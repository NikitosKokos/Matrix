$('p').click(() => {
    $(this).toggleClass('derk');
    console.log('fkdkfk')
});
$('p').mouseenter(() => {
    $(this).toggleClass('derk');
});

// for (let i = 0; i <= 60; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000);
// }


$(document).ready(function () {

    $(".name").focus();

});

// $('.derk').focus(() => {
//     $(this).toggleClass('focus');
// });
// $('.derk').change(() => {
//     $('.derk').toggleClass('focus');
// });


$('.derk-pas').focus(() => {
    $('.derk-pas').toggleClass('focus');

})
$('.derk-txt').focus(() => {
    $('.derk-txt').toggleClass('focus');
})

// 
$('.name').keyup(() => {
    $('#name').text(`Добро пожаловать, ${$('.name').val()}!`);
});
$(function () {


    $("#typing").typed({
        strings: [" У тябя есть выбор", " Красная или синяя", "Выбор за тобой"],
        typeSpeed: 70,
        backDelay: 1500,
        startDelay: 2500,
        loop: true,
        // сколько раз печатать
        loopCount: 999,
        contentType: 'html',
    });

});