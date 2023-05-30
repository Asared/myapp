$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/payments',
        dataType: 'JSON'
    }).done(function( response ) {

        response.payments.forEach(payments => {
            $('#tbl_payments').append(
                `<tr>
                    <td>${payments.id}
                    <td>${payments.id_order}
                    <td>${payments.id_payment_type}
                    <td>${payments.amount}
                </tr>`
            )
        })

    });
    $('#create_payments').click(function(e){

        $('#create_payments_popup').show()
  
    })
  
    $('#create_payments_popup_close').click(function(e){
  
        $('#create_payments_popup').hide()
  
    })
  
    $('#cancel_create_payments').click(function(e){
  
        $('#create_payments_popup').hide()
  
    })
  
    $('#submit_create_payments').click(function(e){

        e.preventDefault()
        let data = {
            id_order: $('#inpId_order').val(),
            id_payment_type: $('#inpId_payment_type').val(),
            amount: $('#inpAmount').val()
        }
    
        $.ajax({
            type: 'POST',
            data: data,
            url: '/payments/create',
            dataType: 'JSON'
        }).done(function( response ) {
    
            if (response.msg === '') {
                alert('Платеж создан')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    
    })
  
    $('#delete_payments').click(function(e){
  
        $('#delete_payments_popup').show()
  
    })
  
    $('#delete_payments_popup_close').click(function(e){
  
        $('#delete_payments_popup').hide()
  
    })
  
    $('#cancel_delete_payments').click(function(e){
  
        $('#delete_payments_popup').hide()
  
    })
  
    $('#submit_delete_payments').click(function(e){
  
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }
  
        $.ajax({
            type: 'POST',
            data: data,
            url: '/payments/delete',
            dataType: 'JSON'
        }).done(function( response ) {
  
            if (response.msg === '') {
                alert('Платеж удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
  
    })
})
