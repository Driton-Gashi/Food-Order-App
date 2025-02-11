CREATE TABLE users
  (
     id       INT auto_increment PRIMARY KEY,
     name     VARCHAR(255) NOT NULL,
     lastname VARCHAR(255) NOT NULL,
     email    VARCHAR(255) UNIQUE NOT NULL,
     password VARCHAR(255) NOT NULL
  ); 

CREATE TABLE `foodapp`.`foods`
  (
     `id`       INT NOT NULL auto_increment,
     `name`     VARCHAR(50) NOT NULL,
     `price`    FLOAT NOT NULL,
     `category` VARCHAR(255) NOT NULL DEFAULT 'others',
     PRIMARY KEY (`id`)
  )
engine = innodb; 

CREATE TABLE categories (
  id INT auto_increment PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
)