$(document).ready(function() {
    $("#submit").on('click', function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "http://ec2-35-158-255-126.eu-central-1.compute.amazonaws.com/api/register",
            data: {
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#pwd").val()
            },
            dataType: "json",
            success: function(data, status)
            {
               alert('user created');
                document.location = '/login.html';
            },
            error: function(data, status)
            {
                alert('Something went wrong. Try Again later')
            }
        });
    });
});