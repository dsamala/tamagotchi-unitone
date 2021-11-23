
$('#startgame').click(function() {
    $('.select').fadeOut();
    $('.main').fadeIn();
});

function storeName () {
    const knightname = $("#namebox2").val();
    $('#namebox1').html("Knight " + knightname);

};

