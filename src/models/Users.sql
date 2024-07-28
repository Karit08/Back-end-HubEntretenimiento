USE [HubEntretenimiento];

CREATE TABLE Users (
    user_ID int IDENTITY(1,1) NOT NULL,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    phone varchar(20),
    surname varchar(100),
    password varchar(255) NOT NULL,
    address varchar(255),

    CONSTRAINT PK_Users PRIMARY KEY (user_ID),
    CONSTRAINT UQ_Email UNIQUE (email)
);
.
