$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/order_items',
        dataType: 'JSON'
    }).done(function( response ) {

        response.order_items.forEach(order_items => {
            $('#tbl_order_items').append(
                `<tr>
                    <td>${order_items.id}
                    <td>${order_items.label}
                    <td>${order_items.id_order}
                    <td>${order_items.amount}
                </tr>`
            )
        })

    });
    $('#create_order_items').click(function(e){

        $('#create_order_items_popup').show()
  
    })
  
    $('#create_order_items_popup_close').click(function(e){
  
        $('#create_order_items_popup').hide()
  
    })
  
    $('#cancel_create_order_items').click(function(e){
  
        $('#create_order_items_popup').hide()
  
    })
  
    $('#submit_create_order_items').click(function(e){
  
        e.preventDefault()
        let data = {
            label: $('#inpLabel').val(),
            id_order: $('#inpId_order').val(),
            amount: $('#inpAmount').val()
        }
  
        $.ajax({
            type: 'POST',
            data: data,
            url: '/order_items/create',
            dataType: 'JSON'
        }).done(function( response ) {
  
            if (response.msg === '') {
                alert('Элемент заказа создан')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
  
    })
  
    $('#delete_order_items').click(function(e){
  
        $('#delete_order_items_popup').show()
  
    })
  
    $('#delete_order_items_popup_close').click(function(e){
  
        $('#delete_order_items_popup').hide()
  
    })
  
    $('#cancel_delete_order_items').click(function(e){
  
        $('#delete_order_items_popup').hide()
  
    })
  
    $('#submit_delete_order_items').click(function(e){
  
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }
  
        $.ajax({
            type: 'POST',
            data: data,
            url: '/order_items/delete',
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


