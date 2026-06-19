function Event(name, category, seats) {

    this.name = name;
    this.category = category;
    this.seats = seats;

}

Event.prototype.checkAvailability = function () {

    return this.seats > 0
        ? "Seats Available"
        : "Event Full";

};

const event1 = new Event(
    "Music Festival",
    "Music",
    25
);

console.log(event1.checkAvailability());

Object.entries(event1).forEach(
    ([key, value]) => {
        console.log(key, value);
    }
);