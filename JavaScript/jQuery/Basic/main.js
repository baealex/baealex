$(function() {
    $('h1').css({
        color: '#fff',
        fontSize: '2em'
    }).each(function(i, item) {
        $(item)
            .css('backgroundColor', $(item).data('bg'))
            .text($(item).data('xyz'));
    }).addClass('someClass');
});