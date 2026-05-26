CREATE DATABASE IF NOT EXISTS sprintify_db;
USE sprintify_db;

CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    tipo_usuario VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena_hash VARCHAR(255) NOT NULL,
    fecha_registro DATE NOT NULL
);

CREATE TABLE Corredor (
    id_corredor INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    nivel_distancia VARCHAR(50) NOT NULL,
    zona_geografica VARCHAR(100),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);

CREATE TABLE Carrera (
    id_carrera INT AUTO_INCREMENT PRIMARY KEY,
    id_organizador INT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    fecha DATE NOT NULL,
    distancia_km DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (id_organizador) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);

CREATE TABLE Inscripcion (
    id_inscripcion INT AUTO_INCREMENT PRIMARY KEY,
    id_corredor INT NOT NULL,
    id_carrera INT NOT NULL,
    fecha_inscripcion DATE NOT NULL,
    FOREIGN KEY (id_corredor) REFERENCES Corredor(id_corredor) ON DELETE CASCADE,
    FOREIGN KEY (id_carrera) REFERENCES Carrera(id_carrera) ON DELETE CASCADE
);

INSERT INTO Usuario (tipo_usuario, email, contrasena_hash, fecha_registro) 
VALUES ('Corredor', 'sofianboundahalli@gmail.com', 'hash_seguro_123', '2026-05-26');

INSERT INTO Corredor (id_usuario, nombre, edad, nivel_distancia, zona_geografica) 
VALUES (1, 'Sofian Bounda', 25, 'Avanzado (21k+)', 'Madrid Centro');