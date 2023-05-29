$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/staff',
        dataType: 'JSON'
    }).done(function( response ) {

        response.staff.forEach(staff=> {
            $('#tbl_staff').append(
                `<tr>
                    <td>${staff.staff_id}
                    <td>${staff.fio}
                    <td>${staff.position_id}
                </tr>`
            )
        })

    });
})


