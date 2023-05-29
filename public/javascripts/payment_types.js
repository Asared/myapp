$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/payment_types',
        dataType: 'JSON'
    }).done(function( response ) {

        response.payment_types.forEach(payment_types => {
            $('#tbl_payment_types').append(
                `<tr>
                    <td>${payment_types.id}
                    <td>${payment_types.label}
                </tr>`
            )
        })

    });
$('#create_payment_types').click(function(e){

    $('#create_payment_types_popup').show()

})

$('#create_payment_types_popup_close').click(function(e){

    $('#create_payment_types_popup').hide()

})

$('#cancel_create_payment_types').click(function(e){

    $('#create_payment_types_popup').hide()

})

$('#submit_create_payment_types').click(function(e){

    e.preventDefault()
    let data = {
        label: $('#inpLabel').val()
    }

    $.ajax({
        type: 'POST',
        data: data,
        url: '/payment_types/create',
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

$('#delete_payment_types').click(function(e){

    $('#delete_payment_types_popup').show()

})

$('#delete_payment_types_popup_close').click(function(e){

    $('#delete_payment_types_popup').hide()

})

$('#cancel_delete_payment_types').click(function(e){

    $('#delete_payment_types_popup').hide()

})

$('#submit_delete_payment_types').click(function(e){

    e.preventDefault()
    let data = {
        id: $('#inpId').val()
    }

    $.ajax({
        type: 'POST',
        data: data,
        url: '/payment_types/delete',
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

