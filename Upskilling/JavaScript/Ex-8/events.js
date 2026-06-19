function registerEvent() {

    document.getElementById(
        "output"
    ).innerText =
    "Registration Successful";

}

document
.getElementById("category")
.onchange = function () {

    document.getElementById(
        "output"
    ).innerText =
    "Selected: " + this.value;

};

document
.getElementById("search")
.addEventListener(
    "keydown",
    function (event) {

        console.log(
            "Key Pressed:",
            event.key
        );

    }
);