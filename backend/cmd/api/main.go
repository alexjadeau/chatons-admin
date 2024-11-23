package main

import (
	"chatons-admin/backend/internal/server"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func init() {
	env := os.Getenv("ENV")
	if env == "" {
		env = "development"
	}

	godotenv.Load(".env." + env + ".local")
	if env != "test" {
		godotenv.Load(".env.local")
	}
	godotenv.Load(".env." + env)
	godotenv.Load()
}

func main() {
	s := server.NewServer()

	log.Println("Starting server on port 8080")
	if err := s.ListenAndServe(); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
