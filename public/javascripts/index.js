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
              
           if(!respuesta != ''){
                $('form .u-alert').html('<strong>Bien hecho!</strong> tu mensaje fue enviado exitosamente.');
                clean_form();
           }
           else{
              $('form .u-alert').html(respuesta);
           }

          setTimeout(show_message , 300);
          
      });

}

function show_message() 
{
  $('form .u-notDisplay').show("slow"); 
  setTimeout(hide_message, 4000) 
}

function hide_message() 
{ 
  $('form .u-notDisplay').hide("slow"); 
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
