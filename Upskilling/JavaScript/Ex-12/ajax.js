function registerUser() {

    document.getElementById(
        "message"
    ).innerText =
    "Submitting...";

    setTimeout(() => {

        fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({

                    name: "Vardhan",
                    event: "Music Festival"

                })

            }
        )

        .then(response => response.json())

        .then(data => {

            document.getElementById(
                "message"
            ).innerText =
            "Registration Successful";

            console.log(data);

        })

        .catch(error => {

            document.getElementById(
                "message"
            ).innerText =
            "Registration Failed";

            console.log(error);

        });

    }, 2000);

}