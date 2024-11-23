package server

import (
	"chatons-admin/backend/internal/health"
	"chatons-admin/backend/internal/middleware"
	"chatons-admin/backend/internal/servers"
	"net/http"
)

func NewServer() *http.Server {
	router := http.NewServeMux()

	healthHandler := health.NewHandler()
	router.HandleFunc("GET /health", healthHandler.HealthCheck)

	serversHandler := servers.NewHandler(servers.NewService())
	router.HandleFunc("GET /servers", serversHandler.GetServers)
	router.HandleFunc("GET /servers/{id}", serversHandler.GetServerStatus)

	middlewares := middleware.Chain(middleware.Logging, middleware.Cors)

	return &http.Server{
		Addr:    ":8080",
		Handler: middlewares(router),
	}
}
