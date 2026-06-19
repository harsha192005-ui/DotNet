const events = [];

function addEvent(name, category) {

    events.push({
        name,
        category
    });

}

function registerUser(user, eventName) {

    console.log(
        `${user} registered for ${eventName}`
    );

}

function filterEventsByCategory(category) {

    return events.filter(
        event => event.category === category
    );

}

/* Closure Example */

function registrationCounter() {

    let count = 0;

    return function () {

        count++;
        return count;

    };

}

const musicCounter = registrationCounter();

console.log(musicCounter());
console.log(musicCounter());
console.log(musicCounter());

/* Callback Example */

function searchEvents(callback) {

    const result = callback(events);

    console.log(result);

}

addEvent("Music Festival", "Music");
addEvent("Dance Show", "Dance");

searchEvents(data =>
    data.filter(
        event => event.category === "Music"
    )
);