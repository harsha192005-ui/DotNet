using NUnit.Framework;
using Moq;
using ConverterLib;

namespace ConverterLib.Tests
{
    [TestFixture]
    public class ConverterTests
    {
        private Mock<IDollarToEuroExchangeRateFeed> exchangeRateFeedMock;
        private Converter converter;

        [SetUp]
        public void Setup()
        {
            exchangeRateFeedMock = new Mock<IDollarToEuroExchangeRateFeed>();

            exchangeRateFeedMock
                .Setup(x => x.GetActualUSDValue())
                .Returns(0.85);

            converter = new Converter(exchangeRateFeedMock.Object);
        }

        [TestCase(100, 85)]
        [TestCase(200, 170)]
        [TestCase(50, 42.5)]
        [TestCase(10, 8.5)]
        public void USDToEuro_ValidAmount_ReturnsExpectedEuro(double usd, double expected)
        {
            double actual = converter.USDToEuro(usd);

            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void USDToEuro_ZeroDollar_ReturnsZero()
        {
            double actual = converter.USDToEuro(0);

            Assert.That(actual, Is.EqualTo(0));
        }

        [Test]
        public void USDToEuro_VerifyExchangeRateServiceCalled()
        {
            converter.USDToEuro(100);

            exchangeRateFeedMock.Verify(x => x.GetActualUSDValue(), Times.Once);
        }
    }
}