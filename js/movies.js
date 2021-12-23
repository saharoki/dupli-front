$(document).ready(function() {
    localStorage.removeItem('movie_id');
    getMovies();
});


function getMovies() {
    $.ajax({
        type: "GET",
        url: base_url + "/api/movie",
        success: function(response, status) {
            setMovies(response);
        },
        error: function(data, status)
        {
            alert('Something went wrong. Try Again later');
        }
    });
}

function setMovies(data) {
    html = '';
    $.each(data, function(k, v) {
        html +='<div class="col-md-4">\n' +
            '                    <div class="card mb-4 box-shadow">\n' +
            '                        <div class="card-header">'+ v.name +'</div><img class="card-img-top" data-src="'+ v.image +'" alt="movie poster">\n' +
            '                        <div class="card-body">\n' +
            '                            <p class="card-text">'+ v.overview +'</p>\n' +
            '                            <div class="d-flex justify-content-between align-items-center">\n' +
            '                                <div class="btn-group">\n' +
            '                                    <button type="button" class="btn btn-sm btn-outline-secondary view-movie" data-id="'+ v.id +'">View</button>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
    })

    $('#movie-list').html(html);
}

