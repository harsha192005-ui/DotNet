using NUnit.Framework;
using CalcLibrary;

namespace CalculatorUnitTests
{
    [TestFixture]
    public class CalculatorTests
    {
        private SimpleCalculator calculator;

        [SetUp]
        public void Init()
        {
            calculator = new SimpleCalculator();
        }

        [TearDown]
        public void Cleanup()
        {
            calculator = null;
        }

        [TestCase(10, 20, 30)]
        [TestCase(15, 5, 20)]
        [TestCase(100, 200, 300)]
        [TestCase(-10, 5, -5)]
        [TestCase(0, 0, 0)]
        public void Addition_Test(double first, double second, double expected)
        {
            double actual = calculator.Addition(first, second);

            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}