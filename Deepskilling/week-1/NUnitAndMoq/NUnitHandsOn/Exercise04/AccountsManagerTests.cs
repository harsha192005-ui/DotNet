using NUnit.Framework;
using AccountsManagerLib;
using System;

namespace AccountsManagerLib.Tests
{
    [TestFixture]
    public class AccountsManagerTests
    {
        private LoginManager loginManager;

        [SetUp]
        public void Setup()
        {
            loginManager = new LoginManager();
        }

        [Test]
        public void Login_ValidCredentials_ReturnsWelcomeMessage()
        {
            string actual = loginManager.Login("user_1", "secret@user11");

            Assert.That(actual, Is.EqualTo("Welcome user_1!!!"));
        }

        [Test]
        public void Login_InvalidCredentials_ReturnsInvalidMessage()
        {
            string actual = loginManager.Login("user_1", "wrongpassword");

            Assert.That(actual, Is.EqualTo("Invalid user id/password"));
        }

        [Test]
        public void Login_EmptyUserId_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                loginManager.Login("", "secret@user11");
            });
        }

        [Test]
        public void Login_EmptyPassword_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                loginManager.Login("user_1", "");
            });
        }

        [Test]
        public void Login_NullCredentials_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                loginManager.Login(null, null);
            });
        }
    }
}