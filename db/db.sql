DROP DATABASE IF EXISTS `shop`;
CREATE DATABASE `shop`;
USE `shop`;

CREATE TABLE IF NOT EXISTS `shop_item` (
  `id` int AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `locate` varchar(255) NOT NULL
  PRIMARY KEY (`id`)
)

INSERT INTO `shop_item` (name,locate) VALUES ('A','Ho Chi Minh');
INSERT INTO `shop_item` (name,locate) VALUES ('B','Ha Noi');