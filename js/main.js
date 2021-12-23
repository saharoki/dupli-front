const base_url = 'http://ec2-35-158-255-126.eu-central-1.compute.amazonaws.com/api';

const raw_token = localStorage.getItem('token');
if(raw_token == null){
    window.location.replace("/");
}

$.ajaxSetup({
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", 'Bearer '+ localStorage.getItem('token'));
    }
});

