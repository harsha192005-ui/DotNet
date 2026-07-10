using System;
using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;

namespace RetailInventory
{
    class Program
    {
        static async Task Main(string[] args)
        {
            using var context = new AppDbContext();

            Console.WriteLine("----- All Products -----");

            var products = await context.Products.ToListAsync();

            foreach (var product in products)
            {
                Console.WriteLine($"{product.Id} | {product.Name} | ₹{product.Price}");
            }

            Console.WriteLine();

            var productById = await context.Products.FindAsync(1);

            if (productById != null)
            {
                Console.WriteLine($"FindAsync Result: {productById.Name}");
            }

            Console.WriteLine();

            var expensiveProduct = await context.Products
                .FirstOrDefaultAsync(p => p.Price > 50000);

            if (expensiveProduct != null)
            {
                Console.WriteLine($"Expensive Product: {expensiveProduct.Name}");
            }
        }
    }
}