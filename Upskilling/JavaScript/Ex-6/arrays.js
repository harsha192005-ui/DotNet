let events = [
    "Music Festival",
    "Workshop",
    "Sports Day"
];

events.push("Food Fair");

console.log(events);

let musicEvents = events.filter(
    event => event.includes("Music")
);

console.log(musicEvents);

let cards = events.map(
    event => `Event Card: ${event}`
);

console.log(cards);