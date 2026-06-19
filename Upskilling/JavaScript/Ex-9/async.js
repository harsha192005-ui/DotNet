/* Promise with then() and catch() */

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

    console.log("Events Loaded");
    console.log(data);

})

.catch(error => {

    console.log("Error:", error);

});

/* Async / Await Version */

async function loadEvents() {

    try {

        document.getElementById(
            "loading"
        ).innerText = "Loading Events...";

        const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data =
        await response.json();

        console.log(data);

        document.getElementById(
            "loading"
        ).innerText = "Events Loaded";

    }

    catch(error){

        console.log(error);

    }

}

loadEvents();