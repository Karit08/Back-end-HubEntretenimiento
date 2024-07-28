USE [HubEntretenimiento];


CREATE TABLE Favoritos (
    favorito_ID int IDENTITY(1,1) NOT NULL,
    user_ID int NOT NULL,
    movie_ID int,
    serie_ID int,

    CONSTRAINT PK_Favoritos PRIMARY KEY (favorito_ID),
    CONSTRAINT FK_Favoritos_Usuarios FOREIGN KEY (user_ID)
        REFERENCES Users(user_ID),
    CONSTRAINT FK_Favoritos_Peliculas FOREIGN KEY (movie_ID)
        REFERENCES Movies(movie_ID),
    CONSTRAINT FK_Favoritos_Series FOREIGN KEY (serie_ID)
        REFERENCES Series(id)
);
