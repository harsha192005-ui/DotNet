Product[] products =
{
    new Product(101, "Laptop"),
    new Product(102, "Mobile"),
    new Product(103, "Keyboard"),
    new Product(104, "Mouse"),
    new Product(105, "Monitor")
};

Console.WriteLine("Linear Search:");

var linearResult = SearchOperations.LinearSearch(products, 104);

if (linearResult != null)
    Console.WriteLine($"Found: {linearResult.ProductName}");

Console.WriteLine();

Console.WriteLine("Binary Search:");

var binaryResult = SearchOperations.BinarySearch(products, 104);

if (binaryResult != null)
    Console.WriteLine($"Found: {binaryResult.ProductName}");