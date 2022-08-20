package database

import (
	"github.com/korsdor/jwt_authentication/models"
	"github.com/korsdor/jwt_authentication/utils"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	Db *gorm.DB
)

func Connect() error {
	conn, err := gorm.Open(mysql.Open(utils.GetEnvVar("MYSQL_CONNECTION")), &gorm.Config{})
	if err != nil {
		return err
	}

	Db = conn

	conn.AutoMigrate(&models.User{})

	return nil
}
