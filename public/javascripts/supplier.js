$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/supplier',
        dataType: 'JSON'
    }).done(function( response ) {

        response.supplier.forEach(supplier => {
            $('#tbl_supplier').append(
                `<tr>
                    <td>${supplier.supplier_id}
                    <td>${supplier.supplier_name}
                    <td>${supplier.material_id}
                    <td>${supplier.stone_id}
                </tr>`
            )
        })

    });
})


