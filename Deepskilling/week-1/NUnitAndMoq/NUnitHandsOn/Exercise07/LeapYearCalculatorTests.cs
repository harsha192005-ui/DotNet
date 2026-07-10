using NUnit.Framework;
using LeapYearCalculatorLib;

namespace LeapYearCalculatorLib.Tests
{
    [TestFixture]
    public class LeapYearCalculatorTests
    {
        private LeapYearCalculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new LeapYearCalculator();
        }

        // Leap Year Test Cases
        [TestCase(2000, 1)]
        [TestCase(2024, 1)]
        public void IsLeapYear_LeapYear_ReturnsOne(int year, int expected)
        {
            int actual = calculator.IsLeapYear(year);

            Assert.That(actual, Is.EqualTo(expected));
        }

        // Non-Leap Year Test Cases
        [TestCase(2023, 0)]
        [TestCase(1900, 0)]
        public void IsLeapYear_NonLeapYear_ReturnsZero(int year, int expected)
        {
            int actual = calculator.IsLeapYear(year);

            Assert.That(actual, Is.EqualTo(expected));
        }

        // Invalid Year Test Cases
        [TestCase(1700, -1)]
        [TestCase(10000, -1)]
        [TestCase(0, -1)]
        public void IsLeapYear_InvalidYear_ReturnsMinusOne(int year, int expected)
        {
            int actual = calculator.IsLeapYear(year);

            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}