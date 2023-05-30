$(document).ready(function(){

  $.ajax({
      type: 'GET',
      url: '/api/orders',
      dataType: 'JSON'
  }).done(function( response ) {

      response.orders.forEach(orders => {
          $('#tbl_orders').append(
              `<tr>
                  <td><a href=${"/orders/edit/" + orders.id}>${orders.id}</a>
                  <td>${orders.label}
                  <td>${orders.amount}
              </tr>`
          )
      })

  });

  $('#create_orders').click(function(e){

      $('#create_orders_popup').show()

  })

  $('#create_orders_popup_close').click(function(e){

      $('#create_orders_popup').hide()

  })

  $('#cancel_create_orders').click(function(e){

      $('#create_orders_popup').hide()

  })

  $('#submit_create_orders').click(function(e){

      e.preventDefault()
      let data = {
          label: $('#inpLabel').val(),
          amount: $('#inpAmount').val()
      }

      $.ajax({
          type: 'POST',
          data: data,
          url: '/orders/create',
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

  $('#delete_orders').click(function(e){

      $('#delete_orders_popup').show()

  })

  $('#delete_orders_popup_close').click(function(e){

      $('#delete_orders_popup').hide()

  })

  $('#cancel_delete_orders').click(function(e){

      $('#delete_orders_popup').hide()

  })

  $('#submit_delete_orders').click(function(e){

      e.preventDefault()
      let data = {
          id: $('#inpId').val()
      }

      $.ajax({
          type: 'POST',
          data: data,
          url: '/orders/delete',
          dataType: 'JSON'
      }).done(function( response ) {

          if (response.msg === '') {
              alert('Заказ удален')
              window.location.reload()
          }
          else {
              alert(response.msg)
          }
      });

  })
   $('.order-id').click(function(e) {
    let id = $(this).data('id');
    window.location.href = '/orders/edit/' + id;
  });

  $('#save_order_changes').click(function(e) {
    e.preventDefault();

    let currentURL = window.location.href;
  
    let urlParts = currentURL.split('/');
  
    
    let id = urlParts[urlParts.length - 1];

    let data = {
      label: $('#inplabel').val(),
      amount: $('#inpamount').val(),
    };

    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      url: '/orders/update/' + id,
      contentType: 'application/json',
      dataType: 'json'
    })
    .done(function(response) {
      if (response.msg === '') {
        alert('Изменения сохранены');
        window.location.href = '/orders';
      } else {
        alert(response.msg);
      }
    })
    .fail(function(error) {
      alert('Ошибка при сохранении изменений');
      console.log(error);
    });
  });
    $(document).ready(function(){
        $('#search_orders').click(function(e){
            e.preventDefault()
            
            var position = $('#searchname').val();

            $.ajax({
                type: 'GET',
                url: '/api/orders/search',
                data: {position: position},
                dataType: 'JSON'
            }).done(function( response ) {
                $('#tbl_orders').empty();

                response.orders.forEach(orders => {
                    $('#tbl_orders').append(
                        `<tr>
                            <td><a href=${"/orders/edit/" + orders.id}>${orders.id}</a>
                            <td>${orders.label}
                            <td>${orders.amount}
                        </tr>`
                    );
                });
            });

        });
    });
})
