$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/positions',
        dataType: 'JSON'
    }).done(function( response ) {

        response.positions.forEach(positions => {
            $('#tbl_positions').append(
                `<tr>
                    <td>${positions.position_id}
                    <td>${positions.position_name}
                </tr>`
            )
        })

    });
})


