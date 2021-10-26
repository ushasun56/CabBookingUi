$(document).ready(function(){
	// alert()

	$("#myform").on('submit', function(e){
			e.preventDefault();

			// return;
			var form_data = new FormData(this);                  
    		// alert(form_data);	

    		$.ajax({
        		url: '../../ajax/product.php', 
        		cache: false,
        		contentType: false,
        		processData: false,
        		data: form_data,                         
        		type: 'post',
        		success: function(response){
            		
            		$("#err").html("Please wait...")

        			setTimeout(function(){
        				$("#err").html(response)
        			},1000)
        		}
     		});
		})	
})