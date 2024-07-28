USE [HubEntretenimiento];

CREATE TABLE Capitulos (
    capitulo_ID int IDENTITY(1,1) NOT NULL,
    serie_ID int NOT NULL,
    temporada int NOT NULL,
    nombre varchar(100) NOT NULL,

    CONSTRAINT PK_Capitulos PRIMARY KEY (capitulo_ID),
    CONSTRAINT FK_Capitulos_Series FOREIGN KEY (serie_ID)
        REFERENCES Series(id)
);
