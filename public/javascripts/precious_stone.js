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
    $('#create_precious_stone').click(function(e){

        $('#create_precious_stone_popup').show()
    
    })
    
    $('#create_precious_stone_popup_close').click(function(e){
    
        $('#create_precious_stone_popup').hide()
    
    })
    
    $('#cancel_create_precious_stone').click(function(e){
    
        $('#create_precious_stone_popup').hide()
    
    })
    
    $('#submit_create_precious_stone').click(function(e){
    
        e.preventDefault()
        let data = {
            stone_name: $('#inpStone_name').val(),
            stone_price_per_gram: $('#inpStone_price_per_gram')
        }
    
        $.ajax({
            type: 'POST',
            data: data,
            url: '/precious_stone/create',
            dataType: 'JSON'
        }).done(function( response ) {
    
            if (response.msg === '') {
                alert('Драгоценный камень создан')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    
    })
    
    $('#delete_precious_stone').click(function(e){
    
        $('#delete_precious_stone_popup').show()
    
    })
    
    $('#delete_precious_stone_popup_close').click(function(e){
    
        $('#delete_precious_stone_popup').hide()
    
    })
    
    $('#cancel_delete_precious_stone').click(function(e){
    
        $('#delete_precious_stone_popup').hide()
    
    })
    
    $('#submit_delete_precious_stone').click(function(e){
    
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }
    
        $.ajax({
            type: 'POST',
            data: data,
            url: '/precious_stone/delete',
            dataType: 'JSON'
        }).done(function( response ) {
    
            if (response.msg === '') {
                alert('Драгоценный камень удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    
    })
})


