USE [HubEntretenimiento];

CREATE TABLE Series (
    id int IDENTITY(1,1) NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(max),
    genero_ID int,
    imagen varchar(255),
    trailer varchar(255),

    CONSTRAINT PK_Series PRIMARY KEY (id),
    CONSTRAINT FK_Series_Genero FOREIGN KEY (genero_ID)
        REFERENCES Genero(genero_ID)
);
