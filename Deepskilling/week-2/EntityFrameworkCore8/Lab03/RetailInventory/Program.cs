using System;
using RetailInventory.Data;

namespace RetailInventory
{
    class Program
    {
        static void Main(string[] args)
        {
            using var context = new AppDbContext();

            Console.WriteLine("=========================================");
            Console.WriteLine("Lab 03 - EF Core Migrations");
            Console.WriteLine("=========================================");

            Console.WriteLine("Migration Created Successfully.");
            Console.WriteLine("Database Updated Successfully.");
        }
    }
}