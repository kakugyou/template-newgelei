
/**
 * Created by kakugyou on 16/2/15.
 */

function change_selected(name){
    if(name==1){
        $("#menu-media").removeClass('selected');
        $("#menu-brand").removeClass('selected');
        $("#menu-ecom").addClass('selected');
    }else if(name==2){
        $("#menu-ecom").removeClass('selected');
        $("#menu-brand").removeClass('selected');
        $("#menu-media").addClass('selected');
    }else if(name==3){
        $("#menu-media").removeClass('selected');
        $("#menu-ecom").removeClass('selected');
        $("#menu-brand").addClass('selected');
    }
}


$(document).ready(function(){
    $("#theTarget").skippr({
        speed: 500,
        navType: 'block',
        childrenElementType: 'div',
        arrows: true,
        autoPlay: true,
        autoPlayDuration: 5000

    });

    $("#theTarget").skippr();

});


$(window).load(function(){
    $('#feature ul').carouFredSel({
        auto: false,
        responsive: true,
        width: '100%',
        prev: '#prev_carousel_featured',
        next: '#next_carousel_featured',
        swipe: {
            onTouch : true
        },
        items: {
            width: 210,
            height: 272,
            visible: {
                min: 1,
                max: 4
            }
        },
        scroll: {
            direction : 'left', // The direction of the transition.
            duration : 500 // The duration of the transition.
        }
    });
});