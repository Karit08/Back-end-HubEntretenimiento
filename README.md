# HubEntretenimiendo

### Sprint 4 
## KARLA ITZEL JIMENEZ MOLINA

### 1. Resumen del proyecto 
Este proyecto es un hub de entretenimiento en el cual se muestran peliculas y series a las cuales el usuario las puede agregar a favoritos si lo desea.

### 2. Requerimientos tecnicos -
Conocimientos SQL
Conocimiento de servidores

### 3. ¿Como instalar?
1. Clone the repository:

git clone https://github.com/EderGodinez/MovieHub_Back_Express.git

2. Change to the project directory:

cd yourrepository/MovieHub

3. Install the dependencies:

npm install

4. Create a .env file in the root of the project and add your environment variables following the .env.template


DB_User="User to database"
DB_Password="Password to database"
DB_Server="Server name"
DB_Database="Server name"
DB_Port="Server port"
Port="Port number"

### 4. Capturas de pantalla 

Diagrama de entidad-relacion de Base de Datos.
![imagen](./src/assets/image.png)

Base.
![imagen](./src/assets/image.png)

#### 4.1 Routes
Users Routes

    POST /users

Description: Create a new user.
Request: JSON body with user details.
Response: JSON message indicating success or failure.

    GET /users/:id

Description: Get a user by ID.
Request: None.
Response: User data.

    PUT /users/:id

Description: Update a user by ID.
Request: JSON body with user details.
Response: JSON message indicating success or failure.
    
    DELETE /users/:id

Description: Delete a user by ID.
Request: None.
Response: JSON message indicating success or failure.

Series Routes
POST /series

Description: Create a new series.
Request: JSON body with series details.
Response: JSON message indicating success or failure.
GET /series

Description: Get all series.
Request: None.
Response: Array of Series.
GET /series/:id

Description: Get a series by ID.
Request: None.
Response: Series data.
PUT /series/:id

Description: Update a series by ID.
Request: JSON body with series details.
Response: JSON message indicating success or failure.
DELETE /series/:id

Description: Delete a series by ID.
Request: None.
Response: JSON message indicating success or failure.
POST /series/episode

Description: Create a new episode.
Request: JSON body with episode details.
Response: JSON message indicating success or failure.
DELETE /series/episode/:id

Description: Delete an episode by ID.
Request: None.
Response: JSON message indicating success or failure.
PATCH /series/episode/:id

Description: Update an episode by ID.
Request: JSON body with episode details.
Response: JSON message indicating success or failure.

### 5. Proceso que seguí para realizar el proyecto
Me guie con el curso Bases de datos empresariales con el gestor Microsoft SQL Server 2019, el lenguaje T-SQL y Management Studio

### 6. Tabla con Sprint Review 

| Que salio bien? | Que puedo hacer diferente? | Que no salio bien ? |
------------------|----------------------------|-----------------------
| Realizar tablas en SQL | La forma de organizarme  | Entender como conectar T-SQL a mi proyecto |
