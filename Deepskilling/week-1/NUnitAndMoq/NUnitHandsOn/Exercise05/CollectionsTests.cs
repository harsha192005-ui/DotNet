using NUnit.Framework;
using CollectionsLib;
using System.Linq;

namespace CollectionsLib.Tests
{
    [TestFixture]
    public class CollectionsTests
    {
        private EmployeeManager employeeManager;

        [SetUp]
        public void Setup()
        {
            employeeManager = new EmployeeManager();
        }

        [Test]
        public void GetEmployees_NoNullValues_ReturnsValidCollection()
        {
            var employees = employeeManager.GetEmployees();

            CollectionAssert.AllItemsAreNotNull(employees);
        }

        [Test]
        public void GetEmployees_ContainsEmployeeWithId100_ReturnsTrue()
        {
            var employees = employeeManager.GetEmployees();

            Assert.That(employees.Any(e => e.Id == 100), Is.True);
        }

        [Test]
        public void GetEmployees_ReturnsUniqueEmployees()
        {
            var employees = employeeManager.GetEmployees();

            var uniqueEmployees = employees.Distinct().ToList();

            Assert.That(uniqueEmployees.Count, Is.EqualTo(employees.Count));
        }

        [Test]
        public void GetEmployees_PreviousYearEmployees_CollectionsAreEqual()
        {
            var employees = employeeManager.GetEmployees();

            var previousYearEmployees = employeeManager.GetEmployeesWhoJoinedInPreviousYears();

            CollectionAssert.AreEquivalent(employees, previousYearEmployees);
        }
    }
}