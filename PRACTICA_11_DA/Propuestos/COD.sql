CREATE DATABASE veterinaria;
USE veterinaria;

CREATE TABLE mascotas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    especie VARCHAR(100),
    raza VARCHAR(100),
    propietario VARCHAR(100),
    edad INT
);

-- Procedimientos

DELIMITER $$
CREATE PROCEDURE ObtenerTodasMascotas()
BEGIN
    SELECT * FROM mascotas;
END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE InsertarMascota(
    IN p_nombre VARCHAR(100),
    IN p_especie VARCHAR(100),
    IN p_raza VARCHAR(100),
    IN p_propietario VARCHAR(100),
    IN p_edad INT
)
BEGIN
    INSERT INTO mascotas (nombre, especie, raza, propietario, edad)
    VALUES (p_nombre, p_especie, p_raza, p_propietario, p_edad);
END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE ActualizarMascota(
    IN p_id INT,
    IN p_nombre VARCHAR(100),
    IN p_especie VARCHAR(100),
    IN p_raza VARCHAR(100),
    IN p_propietario VARCHAR(100),
    IN p_edad INT
)
BEGIN
    UPDATE mascotas
    SET nombre = p_nombre, especie = p_especie, raza = p_raza, propietario = p_propietario, edad = p_edad
    WHERE id = p_id;
END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE EliminarMascota(IN p_id INT)
BEGIN
    DELETE FROM mascotas WHERE id = p_id;
END$$
DELIMITER ;


CALL InsertarMascota('Luna', 'Gato', 'Siames', 'Laura Gómez', 3);
CALL InsertarMascota('Max', 'Perro', 'Bulldog', 'José Rodríguez', 2);
CALL InsertarMascota('Rocky', 'Perro', 'Pitbull', 'Ana López', 4);
