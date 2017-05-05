$(document).ready(function(){


	$("#todolistapp ul").on("click", "li", function(){
		$(this).toggleClass('completed');
	});

	$("#todolistapp ul").on('click', 'span', function(event){
		$(this).parent().fadeOut(500, function() {

			$(this).remove();
			
		});

		event.stopPropagation();
	});



	$("input[type='text']").keypress(function(event) {
		
		if(event.keyCode ===13){
			var newTodo = $(this).val();

			$('#todolistapp ul').append('<li><span class ="fa fa-trash">'+'</span>' + newTodo+ '</li>' );
		}

		
	});

	$('#todolistapp .fa-plus'). on('click', function(){
		$("input[type='text']").fadeToggle();
	});


});