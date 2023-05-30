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
    $('#create_positions').click(function(e){

        $('#create_positions_popup').show()
    
    })
    
    $('#create_positions_popup_close').click(function(e){
    
        $('#create_positions_popup').hide()
    
    })
    
    $('#cancel_create_positions').click(function(e){
    
        $('#create_positions_popup').hide()
    
    })
    
    $('#submit_create_positions').click(function(e){
    
        e.preventDefault()
        let data = {
            position_name: $('#inpPosition_name').val()
        }
    
        $.ajax({
            type: 'POST',
            data: data,
            url: '/positions/create',
            dataType: 'JSON'
        }).done(function( response ) {
    
            if (response.msg === '') {
                alert('Должность создана')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    
    })
    
    $('#delete_positions').click(function(e){
    
        $('#delete_positions_popup').show()
    
    })
    
    $('#delete_positions_popup_close').click(function(e){
    
        $('#delete_positions_popup').hide()
    
    })
    
    $('#cancel_delete_positions').click(function(e){
    
        $('#delete_positions_popup').hide()
    
    })
    
    $('#submit_delete_positions').click(function(e){
    
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }
    
        $.ajax({
            type: 'POST',
            data: data,
            url: '/positions/delete',
            dataType: 'JSON'
        }).done(function( response ) {
    
            if (response.msg === '') {
                alert('Должность удалена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    
    })
})


