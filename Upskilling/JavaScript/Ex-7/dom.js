const events = [
    "Music Festival",
    "Food Fair",
    "Sports Day"
];

const container =
document.querySelector("#eventContainer");

events.forEach(event => {

    let card =
    document.createElement("div");

    card.innerHTML = `
        <h3>${event}</h3>
        <button onclick="register(this)">
            Register
        </button>
    `;

    container.appendChild(card);

});

function register(btn) {

    btn.innerText =
    "Registered";

}

function cancel(btn) {

    btn.innerText =
    "Register";

}