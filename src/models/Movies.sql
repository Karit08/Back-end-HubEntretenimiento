USE [HubEntretenimiento];

CREATE TABLE Movies (
    movie_ID int IDENTITY(1,1) NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(max),
    genero_ID int,
    imagen varchar(255),
    trailer varchar(255),
    video varbinary(max),

    CONSTRAINT PK_Movies PRIMARY KEY (movie_ID),
    CONSTRAINT FK_Movies_Genero FOREIGN KEY (genero_ID)
        REFERENCES Genero(genero_ID)
);
