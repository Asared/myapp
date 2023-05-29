$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/order_statuses',
        dataType: 'JSON'
    }).done(function( response ) {

        response.order_statuses.forEach(order_statuses => {
            $('#tbl_order_statuses').append(
                `<tr>
                    <td>${order_statuses.id}
                    <td>${order_statuses.label}
                </tr>`
            )
        })

    });

$('#create_order_statuses').click(function(e){

    $('#create_order_statuses_popup').show()

})

$('#create_order_statuses_popup_close').click(function(e){

    $('#create_order_statuses_popup').hide()

})

$('#cancel_create_order_statuses').click(function(e){

    $('#create_order_statuses_popup').hide()

})

$('#submit_create_order_statuses').click(function(e){

    e.preventDefault()
    let data = {
        label: $('#inpLabel').val()
    }

    $.ajax({
        type: 'POST',
        data: data,
        url: '/order_statuses/create',
        dataType: 'JSON'
    }).done(function( response ) {

        if (response.msg === '') {
            alert('Заказ создан')
            window.location.reload()
        }
        else {
            alert(response.msg)
        }
    });

})

$('#delete_order_statuses').click(function(e){

    $('#delete_order_statuses_popup').show()

})

$('#delete_order_statuses_popup_close').click(function(e){

    $('#delete_order_statuses_popup').hide()

})

$('#cancel_delete_order_statuses').click(function(e){

    $('#delete_order_statuses_popup').hide()

})

$('#submit_delete_order_statuses').click(function(e){

    e.preventDefault()
    let data = {
        id: $('#inpId').val()
    }

    $.ajax({
        type: 'POST',
        data: data,
        url: '/order_statuses/delete',
        dataType: 'JSON'
    }).done(function( response ) {

        if (response.msg === '') {
            alert('Корзина удалена')
            window.location.reload()
        }
        else {
            alert(response.msg)
        }
    });

})
})
