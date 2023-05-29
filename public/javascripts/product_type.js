$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/product_type',
        dataType: 'JSON'
    }).done(function( response ) {

        response.product_type.forEach(product_type => {
            $('#tbl_product_type').append(
                `<tr>
                    <td>${product_type.type_id}
                    <td>${product_type.type_name}
                </tr>`
            )
        })

    });
})


