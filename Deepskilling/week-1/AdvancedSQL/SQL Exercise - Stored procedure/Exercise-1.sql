CREATE DATABASE EmployeeManagementDB;
GO

USE EmployeeManagementDB;
GO


CREATE TABLE Departments
(
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);


CREATE TABLE Employees
(
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE,

    CONSTRAINT FK_Department
    FOREIGN KEY (DepartmentID)
    REFERENCES Departments(DepartmentID)
);


INSERT INTO Departments (DepartmentID, DepartmentName)
VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Marketing');


INSERT INTO Employees
(FirstName, LastName, DepartmentID, Salary, JoinDate)
VALUES
('John', 'Doe', 1, 5000.00, '2020-01-15'),
('Jane', 'Smith', 2, 6000.00, '2019-03-22'),
('Michael', 'Johnson', 3, 7000.00, '2018-07-30'),
('Emily', 'Davis', 4, 5500.00, '2021-11-05');


SELECT * FROM Departments;
SELECT * FROM Employees;

-----------------------------------------------------
-- Exercise 1
-- Stored Procedure to Retrieve Employees by Department
-----------------------------------------------------
CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT
        EmployeeID,
        FirstName,
        LastName,
        DepartmentID,
        Salary,
        JoinDate
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

EXEC sp_GetEmployeesByDepartment @DepartmentID = 3;


CREATE PROCEDURE sp_InsertEmployee
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DepartmentID INT,
    @Salary DECIMAL(10,2),
    @JoinDate DATE
AS
BEGIN
    INSERT INTO Employees
    (
        FirstName,
        LastName,
        DepartmentID,
        Salary,
        JoinDate
    )
    VALUES
    (
        @FirstName,
        @LastName,
        @DepartmentID,
        @Salary,
        @JoinDate
    );
END;
GO


EXEC sp_InsertEmployee
    @FirstName = 'David',
    @LastName = 'Brown',
    @DepartmentID = 3,
    @Salary = 6500.00,
    @JoinDate = '2024-06-15';


SELECT * FROM Employees;