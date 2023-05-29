$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/precious_stone',
        dataType: 'JSON'
    }).done(function( response ) {

        response.precious_stone.forEach(precious_stone => {
            $('#tbl_precious_stone').append(
                `<tr>
                    <td>${precious_stone.stone_id}
                    <td>${precious_stone.stone_name}
                    <td>${precious_stone.stone_price_per_gram}
                </tr>`
            )
        })

    });
})


