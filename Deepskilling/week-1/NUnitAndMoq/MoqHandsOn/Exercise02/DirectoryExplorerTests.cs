using System.Collections.Generic;
using Moq;
using NUnit.Framework;
using MagicFilesLib;

namespace MagicFilesLib.Tests
{
    [TestFixture]
    public class DirectoryExplorerTests
    {
        private Mock<IDirectoryExplorer> mockDirectoryExplorer;

        private readonly string _file1 = "file.txt";
        private readonly string _file2 = "file2.txt";

        [OneTimeSetUp]
        public void Setup()
        {
            mockDirectoryExplorer = new Mock<IDirectoryExplorer>();

            mockDirectoryExplorer
                .Setup(x => x.GetFiles(It.IsAny<string>()))
                .Returns(new List<string>
                {
                    _file1,
                    _file2
                });
        }

        [Test]
        public void GetFiles_Should_ReturnValidCollection()
        {
            ICollection<string> files =
                mockDirectoryExplorer.Object.GetFiles(@"C:\Temp");

            Assert.That(files, Is.Not.Null);
            Assert.That(files.Count, Is.EqualTo(2));
            CollectionAssert.Contains(files, _file1);
        }

        [Test]
        public void GetFiles_Should_ContainSecondFile()
        {
            ICollection<string> files =
                mockDirectoryExplorer.Object.GetFiles(@"C:\Temp");

            CollectionAssert.Contains(files, _file2);
        }

        [Test]
        public void GetFiles_Should_InvokeMethodOnce()
        {
            mockDirectoryExplorer.Object.GetFiles(@"C:\Temp");

            mockDirectoryExplorer.Verify(
                x => x.GetFiles(It.IsAny<string>()),
                Times.Once);
        }
    }
}