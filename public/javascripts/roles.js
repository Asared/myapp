$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/roles',
        dataType: 'JSON'
    }).done(function( response ) {

        response.roles.forEach(roles => {
            $('#tbl_roles').append(
                `<tr>
                    <td>${roles.id}
                    <td>${roles.code}
                    <td>${roles.label}
                </tr>`
            )
        })

    });
})


