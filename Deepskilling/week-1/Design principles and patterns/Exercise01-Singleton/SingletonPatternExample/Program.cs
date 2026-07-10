Logger logger1 = Logger.GetInstance();
Logger logger2 = Logger.GetInstance();

logger1.Log("First message");
logger2.Log("Second message");

Console.WriteLine(
    ReferenceEquals(logger1, logger2)
        ? "Same instance"
        : "Different instances"
);