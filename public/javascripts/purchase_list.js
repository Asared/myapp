$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/purchase_list',
        dataType: 'JSON'
    }).done(function( response ) {

        response.purchase_list.forEach(purchase_list => {
            $('#tbl_purchase_list').append(
                `<tr>
                    <td>${purchase_list.purchase_id}
                    <td>${purchase_list.order_id}
                    <td>${purchase_list.purchase_date}
                </tr>`
            )
        })

    });
})


