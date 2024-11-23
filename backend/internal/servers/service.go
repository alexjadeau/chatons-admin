package servers

import (
	"encoding/json"
	"fmt"
	"net"
	"os"
	"time"
)

type Service struct{}

func NewService() *Service {
	return &Service{}
}

func (s *Service) GetServers() (*ServersData, error) {
	data, err := os.ReadFile("servers.json")
	if err != nil {
		return nil, err
	}

	var serversData ServersData
	if err := json.Unmarshal(data, &serversData); err != nil {
		return nil, err
	}

	return &serversData, nil
}

func (s *Service) GetServerStatus(id string) (bool, error) {
	server, err := s.findServerById(id)
	if err != nil {
		return false, err
	}

	if server == nil {
		return false, fmt.Errorf("server %s not found", id)
	}

	return s.pingServer(server), nil
}

func (s *Service) findServerById(id string) (*Server, error) {
	servers, err := s.GetServers()
	if err != nil {
		return nil, err
	}

	var server *Server
	for _, s := range servers.Servers {
		if s.ID == id {
			server = &s
			break
		}
	}

	return server, nil
}

func (s *Service) pingServer(server *Server) bool {
	timeout := 1 * time.Second
	_, err := net.DialTimeout("tcp", fmt.Sprintf("%s:%d", os.Getenv("MINECRAFT_SERVER_IP"), server.Port), timeout)

	return err == nil
}
