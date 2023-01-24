-- Active: 1674082182139@@35.226.146.116@3306@jbl-4416561-samuel-silva
CREATE TABLE Architecture_User (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Architecture_Movie (
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    launch VARCHAR(255)  NOT NULL
);