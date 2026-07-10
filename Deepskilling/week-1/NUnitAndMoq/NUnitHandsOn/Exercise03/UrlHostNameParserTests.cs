using NUnit.Framework;
using UtilLib;

namespace UtilLib.Tests
{
    [TestFixture]
    public class UrlHostNameParserTests
    {
        private UrlHostNameParser parser;

        [SetUp]
        public void Setup()
        {
            parser = new UrlHostNameParser();
        }

        [Test]
        public void ParseHostName_ValidUrl_ReturnsHostName()
        {
            string url = "http://www.google.com";

            string actual = parser.ParseHostName(url);

            Assert.That(actual, Is.EqualTo("www.google.com"));
        }

        [Test]
        public void ParseHostName_UrlWithoutProtocol_ReturnsInput()
        {
            string url = "www.google.com";

            string actual = parser.ParseHostName(url);

            Assert.That(actual, Is.EqualTo("www.google.com"));
        }
    }
}