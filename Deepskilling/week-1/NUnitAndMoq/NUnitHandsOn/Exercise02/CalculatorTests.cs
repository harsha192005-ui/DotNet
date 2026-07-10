using NUnit.Framework;
using CalcLibrary;
using System;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private SimpleCalculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new SimpleCalculator();
        }

        [TearDown]
        public void TearDown()
        {
            calculator = null;
        }

        // Subtraction Tests
        [TestCase(10, 5, 5)]
        [TestCase(20, 10, 10)]
        [TestCase(-5, -5, 0)]
        [TestCase(15, 20, -5)]
        public void Subtraction_Test(double a, double b, double expected)
        {
            double actual = calculator.Subtraction(a, b);
            Assert.AreEqual(expected, actual);
        }

        // Multiplication Tests
        [TestCase(2, 5, 10)]
        [TestCase(10, 10, 100)]
        [TestCase(-2, 4, -8)]
        [TestCase(0, 100, 0)]
        public void Multiplication_Test(double a, double b, double expected)
        {
            double actual = calculator.Multiplication(a, b);
            Assert.AreEqual(expected, actual);
        }

        // Division Tests
        [TestCase(20, 2, 10)]
        [TestCase(15, 3, 5)]
        [TestCase(100, 10, 10)]
        public void Division_Test(double a, double b, double expected)
        {
            double actual = calculator.Division(a, b);
            Assert.AreEqual(expected, actual);
        }

        [Test]
        public void Division_By_Zero_Test()
        {
            try
            {
                calculator.Division(10, 0);
                Assert.Fail("Division by zero");
            }
            catch (ArgumentException)
            {
                Assert.Pass();
            }
        }

        // Void Method Test
        [Test]
        public void TestAddAndClear()
        {
            calculator.Addition(20, 30);

            Assert.AreEqual(50, calculator.GetResult);

            calculator.AllClear();

            Assert.AreEqual(0, calculator.GetResult);
        }
    }
}