-- Creación de la tabla Marcas
CREATE TABLE Marcas (
    MarcasID INT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Descripcion VARCHAR(255)
);
-- Creación de la tabla Productos
CREATE TABLE Productos (
    ProductoID INT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255),
    Precio DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    MarcasID INT,
    FOREIGN KEY (MarcasID) REFERENCES Marcas(MarcasID)
);


-- Creación de la tabla Especificaciones
CREATE TABLE Especificaciones (
    EspecificacionesID INT PRIMARY KEY,
    Resolucion VARCHAR(50),
    Memoria VARCHAR(50),
    Comentarios VARCHAR(255),
	ProductoID INT,
	FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);