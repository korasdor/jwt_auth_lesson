package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/korsdor/jwt_authentication/database"
	"github.com/korsdor/jwt_authentication/routes"
	"github.com/rs/zerolog/log"
)

func main() {

	if err := database.Connect(); err != nil {
		log.Debug().Err(err).Msg("Error occurred when try to connect to database")
	}

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	routes.Setup(app)

	if err := app.Listen(":8000"); err != nil {
		log.Debug().Err(err).Msg("Error occurred while starting server")
	}
}
