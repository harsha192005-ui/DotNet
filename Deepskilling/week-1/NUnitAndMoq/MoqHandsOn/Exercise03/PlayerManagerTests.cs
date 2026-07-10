using Moq;
using NUnit.Framework;
using PlayersManagerLib;
using System;

namespace PlayersManagerLib.Tests
{
    [TestFixture]
    public class PlayerManagerTests
    {
        private Mock<IPlayerMapper> mockPlayerMapper;

        [OneTimeSetUp]
        public void Setup()
        {
            mockPlayerMapper = new Mock<IPlayerMapper>();
        }

        [Test]
        public void RegisterNewPlayer_ValidPlayer_ReturnsPlayer()
        {
            mockPlayerMapper
                .Setup(x => x.IsPlayerNameExistsInDb(It.IsAny<string>()))
                .Returns(false);

            Player player = Player.RegisterNewPlayer(
                "Virat",
                mockPlayerMapper.Object);

            Assert.That(player.Name, Is.EqualTo("Virat"));
            Assert.That(player.Age, Is.EqualTo(23));
            Assert.That(player.Country, Is.EqualTo("India"));
            Assert.That(player.NoOfMatches, Is.EqualTo(30));

            mockPlayerMapper.Verify(
                x => x.AddNewPlayerIntoDb("Virat"),
                Times.Once);
        }

        [Test]
        public void RegisterNewPlayer_PlayerAlreadyExists_ThrowsArgumentException()
        {
            mockPlayerMapper
                .Setup(x => x.IsPlayerNameExistsInDb(It.IsAny<string>()))
                .Returns(true);

            Assert.Throws<ArgumentException>(() =>
            {
                Player.RegisterNewPlayer(
                    "Virat",
                    mockPlayerMapper.Object);
            });
        }

        [Test]
        public void RegisterNewPlayer_EmptyPlayerName_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                Player.RegisterNewPlayer(
                    "",
                    mockPlayerMapper.Object);
            });
        }

        [Test]
        public void RegisterNewPlayer_NullPlayerName_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                Player.RegisterNewPlayer(
                    null,
                    mockPlayerMapper.Object);
            });
        }
    }
}