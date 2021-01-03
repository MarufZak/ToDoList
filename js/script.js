$('.btn-primary').click(function () {
    let text = $('.form-control').val();
    $('.list').children().last().after(`<li class="list-group-item">${text}<button class = "btn remove">X</button></li>`);
    $('.form-control').val('')
    let list = $('.list').children()
    if (list.length == 0) {
        $('.list').wrapInner(`<li class="list-group-item">${text}<button class = "btn remove">X</button></li>`)
    }
    $('.remove').click(function () {  
        $($(this).parent()).remove()
    })
})
$('.remove').click(function () {  
    $($(this).parent()).remove()
})  

