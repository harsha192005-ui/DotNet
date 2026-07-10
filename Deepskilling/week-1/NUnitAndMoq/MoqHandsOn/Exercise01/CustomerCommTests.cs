using Moq;
using NUnit.Framework;
using CustomerCommLib;

namespace CustomerCommLib.Tests
{
    [TestFixture]
    public class CustomerCommTests
    {
        private Mock<IMailSender> mockMailSender;
        private CustomerComm customerComm;

        [OneTimeSetUp]
        public void Setup()
        {
            mockMailSender = new Mock<IMailSender>();

            mockMailSender
                .Setup(x => x.SendMail(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(true);

            customerComm = new CustomerComm(mockMailSender.Object);
        }

        [TestCase]
        public void SendMailToCustomer_ReturnsTrue()
        {
            bool actual = customerComm.SendMailToCustomer();

            Assert.That(actual, Is.True);
        }

        [Test]
        public void Verify_SendMail_Called_Once()
        {
            customerComm.SendMailToCustomer();

            mockMailSender.Verify(
                x => x.SendMail(It.IsAny<string>(), It.IsAny<string>()),
                Times.Once);
        }
    }
}