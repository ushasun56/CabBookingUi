$(document).ready(function(){
	// alert()

	$("#btnadd").click(function(){
		// alert()

		data = $("#myform").serialize()
		// alert(data)

		$.ajax({
			url : "../../ajax/category.php",
			data : data,
			type : "post",
			success : function(result){
				$("#err").html("Please wait..")
				setTimeout(function(){
					$("#err").html(result)
				},1000)
			}
		})
	})
})