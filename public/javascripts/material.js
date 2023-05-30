$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/material',
        dataType: 'JSON'
    }).done(function( response ) {

        response.material.forEach(material => {
            $('#tbl_material').append(
                `<tr>
                    <td>${material.material_id}
                    <td>${material.material_name}
                    <td>${material.material_price_per_gram}
                </tr>`
            )
        })

    });
    $('#create_material').click(function(e){

        $('#create_material_popup').show()
    
    })
    
    $('#create_material_popup_close').click(function(e){
    
        $('#create_material_popup').hide()
    
    })
    
    $('#cancel_create_material').click(function(e){
    
        $('#create_material_popup').hide()
    
    })
    
    $('#submit_create_material').click(function(e){
    
        e.preventDefault()
        let data = {
            material_name: $('#inpMaterial_name').val(),
            material_price_per_gram: $('#inpMaterial_price_per_gram').val()
        }
    
        $.ajax({
            type: 'POST',
            data: data,
            url: '/material/create',
            dataType: 'JSON'
        }).done(function( response ) {
    
            if (response.msg === '') {
                alert('Материал создан')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    
    })
    
    $('#delete_material').click(function(e){
    
        $('#delete_material_popup').show()
    
    })
    
    $('#delete_material_popup_close').click(function(e){
    
        $('#delete_material_popup').hide()
    
    })
    
    $('#cancel_delete_material').click(function(e){
    
        $('#delete_material_popup').hide()
    
    })
    
    $('#submit_delete_material').click(function(e){
    
        e.preventDefault()
        let data = {
            material_id: $('#inpId').val()
        }
    
        $.ajax({
            type: 'POST',
            data: data,
            url: '/material/delete',
            dataType: 'JSON'
        }).done(function( response ) {
    
            if (response.msg === '') {
                alert('Материал удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    
    })
    
})