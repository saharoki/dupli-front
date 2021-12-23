$(document).ready(function() {
    getMovie();
    $('#rent-btn').on('click', rent);
});


function getMovie() {
    $.ajax({
        type: "GET",
        url: base_url + "/movie/"+localStorage.getItem('movie_id'),
        success: function(response, status) {
            setMovie(response);
        },
        error: function(data, status)
        {
            alert('Something went wrong. Try Again later');
        }
    });
}

function setMovie(data) {
    $('#poster').attr("src",data.movie.image);
    $('#title').text(data.movie.name);
    $('#overview').text(data.movie.overview);
    $('#release').text(data.movie.release_date);
    $('#score').text(data.movie.score);

    if(!data.rented_by_user){
        $('#rent-btn').removeClass('d-none');
    } else {
        $('#rent').text(data.rent +'days').removeClass('d-none');
    }
}

function rent() {
    $.ajax({
        type: "POST",
        url: base_url + "/movie/"+localStorage.getItem('movie_id') +'/rent',
        success: function(response, status) {
            window.location.replace("/movie.html");
        },
        error: function(data, status)
        {
            alert('Something went wrong. Try Again later');
        }
    });
}
