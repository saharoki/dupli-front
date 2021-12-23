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
            dataType: "json",
            success: function(data, status)
            {
                if(data.hasOwnProperty('token')) {
                    localStorage.setItem('token',data.token);
                    document.location = '/movies.html';
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