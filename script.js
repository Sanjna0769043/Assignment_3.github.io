$(document).ready(function() {
    function firstMethod() {
        $.getJSON("team.json", function(data) {
            $.each(data.teammembers, function () {
                let name = $('<h3>').text(this.name);
                let title = $('<h4>').text(this.title);
                let bio = $('<p>').text(this.bio);
                $('#team').append(name);
                $('#team').append(title);
                $('#team').append(bio);
            });

        });
    }

    function secondMethod() {
        $.ajax({
            url: 'team.json',
            method: 'GET',
            beforeSend: function() {
                $('#team').text('Loading....')
            },
            success: function(data) {
                setTimeout(function () {
                    $('#team').empty();
                    $.each(data.teammembers, function () {
                        let name = $('<h3>').text(this.name)
                        let title = $('<h4>').text(this.title)
                        let bio = $('<p>').text(this.bio)
                        $('#team').append(name);
                        $('#team').append(title);
                        $('#team').append(bio);
                    });
                }, 5000);

            },
            error: function(request, errorThrown) {
                var message = '';
                if (request.status === 0) {
                    message = 'Not connect.\n Verify Network.';
                } else if (request.status == 404) {
                    message = 'Error 404! Requested page not found.';
                } else if (request.status == 500) {
                    message = 'Error 500! Internal Server Error';
                } else if (errorThrown === 'parsererror') {
                    message = 'Requested JSON parse failed.';
                } else if (errorThrown === 'timeout') {
                    message = 'Time out error.';
                } else if (errorThrown === 'abort') {
                    message = 'Ajax request aborted.';
                } else {
                    message = 'Uncaught Error.\n' + request.responseText;
                }
                alert(message);
            }

        });
    }
    // run any method which you want.
    //firstMethod()
    secondMethod()

});