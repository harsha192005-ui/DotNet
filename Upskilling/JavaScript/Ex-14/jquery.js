$(document).ready(function(){

    $("#registerBtn").click(function(){

        alert(
            "Registration Successful"
        );

        $("#eventCard").fadeOut(
            1000,
            function(){

                $("#eventCard").fadeIn(
                    1000
                );

            }
        );

    });

});