$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/product',
        dataType: 'JSON'
    }).done(function( response ) {

        response.product.forEach(product => {
            $('#tbl_product').append(
                `<tr>
                    <td>${product.product_id}
                    <td>${product.product_name}
                    <td>${product.production_cost}
                    <td>${product.material_id}
                    <td>${product.stone_id}
                    <td>${product.mateerial_weight}
                    <td>${product.stone_weight}
                    <td>${product.type_id}
                </tr>`
            )
        })

    });
})


