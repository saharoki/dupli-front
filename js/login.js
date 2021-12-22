$(document).ready(function() {
    $("#submit").on('click', function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: base_url+"/login",
            data: {
                email: $("#email").val(),
                password: $("#pwd").val()
            },
            success: function(data, status)
            {
                if(data.hasOwnProperty('access_token')) {
                    localStorage.setItem('token',data.access_token);
                } else {
                    alert('Something went wrong. Try Again later')
                }
            },
            error: function(data, status)
            {
                alert('Something went wrong. Try Again later')
            },
            statusCode: {
                401: function () {
                    alert('Incorrect username or password')
                }
            }
        });
    });
});