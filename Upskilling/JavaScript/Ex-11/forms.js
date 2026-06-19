document
.getElementById(
    "registrationForm"
)
.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        let form =
        event.target.elements;

        let name =
        form.username.value;

        let email =
        form.email.value;

        let selectedEvent =
        form.event.value;

        document.getElementById(
            "nameError"
        ).innerText = "";

        document.getElementById(
            "emailError"
        ).innerText = "";

        let valid = true;

        if(name === ""){

            document.getElementById(
                "nameError"
            ).innerText =
            " Name Required";

            valid = false;
        }

        if(email === ""){

            document.getElementById(
                "emailError"
            ).innerText =
            " Email Required";

            valid = false;
        }

        if(valid){

            document.getElementById(
                "result"
            ).innerText =

            `${name} registered for ${selectedEvent}`;

        }

    }
);