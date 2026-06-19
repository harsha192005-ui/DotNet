/* let and const */

const eventName = "Music Festival";

let seats = 50;

/* Default Parameter */

function registerUser(
    name = "Guest"
){

    console.log(
        `${name} Registered`
    );

}

registerUser();
registerUser("Vardhan");

/* Destructuring */

const event = {

    name : "Workshop",
    date : "20-June-2026",
    seats : 25

};

const {
    name,
    date,
    seats: availableSeats
} = event;

console.log(
    name,
    date,
    availableSeats
);

/* Spread Operator */

const events = [
    "Music",
    "Sports",
    "Workshop"
];

const clonedEvents = [
    ...events
];

console.log(clonedEvents);