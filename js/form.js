$("#sendMail").on("click", function () {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var emailtext = $("#emailtext").val().trim();

    if (email == "") {
        $("#errorMessage").text("Enter email");
        return false;
    } else if (name == "") {
        $("#errorMessage").text("Enter your name");
        return false;
    } else if (phone == "") {
        $("#errorMessage").text("Enter phone not less than 5");
        return false;
    } else if (emailtext.length < 5) {
        $("#errorMessage").text("Text field none");
        return false;
    }

    $("#errorMessage").text("");

    $.ajax({
        url: 'ajax/mail.php',
        tyoe: 'POST',
        cache: false,
        data: {
            'name': name,
            'email': email,
            'phone': phone,
            'emailtext': emailtext
        },
        dataType: 'html',
        beforeSend: function () {
            $("#sendMail").prop("disabled", true);
        },
        success: function (data) {
            if (!data)
                alert("Message is not sended");
            else
                $("mailForm").trigger("reset");
            $("#sendMail").prop("disabled", false);
        }
    });
})