function submitForm() {

    console.log(
        "Form Submission Started"
    );

    let user = {
        name: "Vardhan",
        event: "Music Festival"
    };

    console.log(
        "User Data:",
        user
    );

    debugger; // Breakpoint

    fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify(user)
        }
    )

    .then(response => response.json())

    .then(data => {

        console.log(
            "Response Received:",
            data
        );

    })

    .catch(error => {

        console.log(
            "Error:",
            error
        );

    });

}