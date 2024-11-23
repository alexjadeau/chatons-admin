package middleware

import "net/http"

type Middleware func(http.Handler) http.Handler

func Chain(middlewares ...Middleware) Middleware {
	return func(h http.Handler) http.Handler {
		for _, middleware := range middlewares {
			h = middleware(h)
		}
		return h
	}
}
