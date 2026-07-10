using NUnit.Framework;
using UserManagerLib;
using System;

namespace UserManagerLib.Tests
{
    [TestFixture]
    public class UserManagerTests
    {
        private UserManager userManager;

        [SetUp]
        public void Setup()
        {
            userManager = new UserManager();
        }

        [Test]
        public void CreateUser_ValidPAN_ReturnsUser()
        {
            User user = userManager.CreateUser("ABCDE1234F");

            Assert.That(user, Is.Not.Null);
            Assert.That(user.PANCardNo, Is.EqualTo("ABCDE1234F"));
        }

        [Test]
        public void CreateUser_NullPAN_ThrowsNullReferenceException()
        {
            Assert.Throws<NullReferenceException>(() =>
            {
                userManager.CreateUser(null);
            });
        }

        [Test]
        public void CreateUser_EmptyPAN_ThrowsNullReferenceException()
        {
            Assert.Throws<NullReferenceException>(() =>
            {
                userManager.CreateUser("");
            });
        }

        [Test]
        public void CreateUser_InvalidPANLength_ThrowsFormatException()
        {
            Assert.Throws<FormatException>(() =>
            {
                userManager.CreateUser("ABC123");
            });
        }

        [Test]
        public void CreateUser_LongPAN_ThrowsFormatException()
        {
            Assert.Throws<FormatException>(() =>
            {
                userManager.CreateUser("ABCDE1234FGH");
            });
        }
    }
}