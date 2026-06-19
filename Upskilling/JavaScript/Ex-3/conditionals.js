const events = [
    { name: "Music Festival", seats: 10 },
    { name: "Food Fair", seats: 0 },
    { name: "Sports Day", seats: 20 }
];

events.forEach(event => {

    if (event.seats > 0) {
        console.log(`${event.name} Available`);
    } else {
        console.log(`${event.name} Full`);
    }

});

function register(event) {

    try {

        if (event.seats <= 0) {
            throw new Error("No Seats Available");
        }

        event.seats--;
        console.log("Registration Successful");

    } catch (error) {

        console.log(error.message);

    }

}

register(events[0]);
register(events[1]);