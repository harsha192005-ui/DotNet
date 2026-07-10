CREATE DATABASE AdvancedSQLDB;
GO

USE AdvancedSQLDB;
GO

-- Create Products Table
CREATE TABLE Products
(
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

-- Insert Sample Data
INSERT INTO Products VALUES
(101,'Laptop','Electronics',80000),
(102,'Mobile','Electronics',65000),
(103,'Headphones','Electronics',65000),
(104,'Keyboard','Electronics',2500),
(105,'Mouse','Electronics',1500),

(201,'Refrigerator','Appliances',70000),
(202,'Washing Machine','Appliances',55000),
(203,'Microwave','Appliances',20000),
(204,'Mixer Grinder','Appliances',5000),
(205,'Induction Stove','Appliances',5000),

(301,'Sofa','Furniture',45000),
(302,'Dining Table','Furniture',35000),
(303,'Wardrobe','Furniture',35000),
(304,'Office Chair','Furniture',8000),
(305,'Coffee Table','Furniture',6000);

---------------------------------------------------------
-- 1. ROW_NUMBER()
---------------------------------------------------------

SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER
    (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RowNumber
FROM Products;

---------------------------------------------------------
-- Top 3 Products in Each Category using ROW_NUMBER()
---------------------------------------------------------

SELECT *
FROM
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RowNumber
    FROM Products
) AS RankedProducts
WHERE RowNumber <= 3;

---------------------------------------------------------
-- 2. RANK()
---------------------------------------------------------

SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    RANK() OVER
    (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RankValue
FROM Products;

---------------------------------------------------------
-- Top 3 Products in Each Category using RANK()
---------------------------------------------------------

SELECT *
FROM
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        RANK() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RankValue
    FROM Products
) AS RankedProducts
WHERE RankValue <= 3;

---------------------------------------------------------
-- 3. DENSE_RANK()
---------------------------------------------------------

SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER
    (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS DenseRankValue
FROM Products;

---------------------------------------------------------
-- Top 3 Products in Each Category using DENSE_RANK()
---------------------------------------------------------

SELECT *
FROM
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        DENSE_RANK() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS DenseRankValue
    FROM Products
) AS RankedProducts
WHERE DenseRankValue <= 3;