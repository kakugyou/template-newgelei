$(document).ready(function(){
    $('#menu .icon').click(function(){
        $('#menu #hide-content').toggle('slow');
        $(this).toggleClass('active')
    });
});