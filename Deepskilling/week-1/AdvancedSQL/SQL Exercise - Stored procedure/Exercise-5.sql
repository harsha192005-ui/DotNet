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
('Emily', 'Davis', 4, 5500.00, '2021-11-05'),
('David', 'Brown', 3, 6500.00, '2022-06-10'),
('Sarah', 'Wilson', 1, 5200.00, '2023-02-18');


SELECT * FROM Departments;
SELECT * FROM Employees;

--==========================================
-- Exercise 5
-- Stored Procedure to Return Total Number
-- of Employees in a Department
--==========================================

CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT
        d.DepartmentID,
        d.DepartmentName,
        COUNT(e.EmployeeID) AS TotalEmployees
    FROM Departments d
    LEFT JOIN Employees e
        ON d.DepartmentID = e.DepartmentID
    WHERE d.DepartmentID = @DepartmentID
    GROUP BY d.DepartmentID, d.DepartmentName;
END;
GO


EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 1;
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 2;
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 3;
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 4;