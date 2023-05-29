$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/clients',
        dataType: 'JSON'
    }).done(function( response ) {

        response.clients.forEach(clients => {
            $('#tblclients').append(
                `<tr>
                    <td>${clients.id}
                    <td>${clients.label}
                </tr>`
            )
        })

    });

$('#create_clients').click(function(e){

    $('#create_clients_popup').show()

})

$('#create_clients_popup_close').click(function(e){

    $('#create_clients_popup').hide()

})

$('#cancel_create_clients').click(function(e){

    $('#create_clients_popup').hide()

})

$('#submit_create_clients').click(function(e){

    e.preventDefault()
    let data = {
        label: $('#inpLabel').val()
    }

    $.ajax({
        type: 'POST',
        data: data,
        url: '/clients/create',
        dataType: 'JSON'
    }).done(function( response ) {

        if (response.msg === '') {
            alert('Клиент создан')
            window.location.reload()
        }
        else {
            alert(response.msg)
        }
    });

})

$('#delete_clients').click(function(e){

    $('#delete_clients_popup').show()

})

$('#delete_clients_popup_close').click(function(e){

    $('#delete_clients_popup').hide()

})

$('#cancel_delete_clients').click(function(e){

    $('#delete_clients_popup').hide()

})

$('#submit_delete_clients').click(function(e){

    e.preventDefault()
    let data = {
        id: $('#inpId').val()
    }

    $.ajax({
        type: 'POST',
        data: data,
        url: '/clients/delete',
        dataType: 'JSON'
    }).done(function( response ) {

        if (response.msg === '') {
            alert('Клиент удален')
            window.location.reload()
        }
        else {
            alert(response.msg)
        }
    });

})
})
