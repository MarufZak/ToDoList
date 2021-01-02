$('.btn-primary').click(function (e) {
    e.preventDefault()  
    let text = $('.form-control').val();
    let copy = $('.list-group-item').last().clone()
    let btn = $('.remove').first().clone();
        if (text == '') {
            $('.list').children().last().before(copy).html('Пусто').append(btn)
            $('.form-control').val('');
        } else {
            $('.list').children().last().before(copy).html(text).append(btn)
            $('.form-control').val('');
        }
        let list = $('.list').children()
        if (list.length == 0) {
            $('.list').wrapInner(`<li class="list-group-item">${text}<button class = "btn remove">X</button></li>`)
            console.log(1);
        }
    
    $('.remove').click(function () {  
        $($(this).parent()).remove()
    })
})
$('.remove').click(function () {  
    $($(this).parent()).remove()
})