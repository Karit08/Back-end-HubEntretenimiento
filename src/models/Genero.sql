USE [HubEntretenimiento];

CREATE TABLE Genero(
    genero_ID int IDENTITY(1,1) NOT NULL,
    name varchar(100) NOT NULL,

    CONSTRAINT PK_Genero PRIMARY KEY (genero_ID)
);
