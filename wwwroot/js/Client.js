$(function(){
    $('.code').on('click', function(e) {
        e.preventDefault();
        $('#toast').toast({ autohide: false }).toast('show');
    });
});

﻿$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });
});