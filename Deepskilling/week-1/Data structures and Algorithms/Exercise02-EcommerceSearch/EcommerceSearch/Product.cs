public class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }

    public Product(int productId, string productName)
    {
        ProductId = productId;
        ProductName = productName;
    }
}