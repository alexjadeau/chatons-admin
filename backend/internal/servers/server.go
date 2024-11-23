package servers

type ServersData struct {
	Servers []Server `json:"servers"`
}

type Server struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Description *string `json:"description"`
	Port        int     `json:"port"`
}
