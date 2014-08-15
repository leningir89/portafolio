$(function() {
    
    $('form .Footer-button').click(function(event){

        event.preventDefault();

        var name = $("form #name").val();
        var email = $("form #email").val();
        var motive = $("form #motive").val();

        var object={name:name,email:email,motive:motive};  
        var object=JSON.stringify(object); 
        save_contact(object);  // Guardamos y mandamos el mail de contacto

    });
 		
});

function save_contact(data){

  $.ajax({  
        type: "POST",
        dataType: 'json',
        url: "/contact",
        data: {data:data},
        error: function (response) {
            console.log(response.responseText);
        }
      }).done(function(respuesta){ 
           console.log(respuesta);
           clean_form();
      });

}

function clean_form(){

    $('form').find('input').each(function() 
    {  
       switch(this.type) 
       {
            case 'password':
            case 'text':
            case 'email':     
            case 'hidden':     
                $(this).val('');
                  break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
        }
    });    
    $('form').find('textarea').each(function(){
      $(this).val('');
    });
    $('form').find('select').each(function() {
       $("#"+this.id + " option[value=0]").attr("selected",true);
    });

}
