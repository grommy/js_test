// Cyclick "Goodbye click" - "Now Really Goodbye"
	function complexFunc(){
		$("#title").html("Goodbye click");
		$("#title").click(function() {
			$("#title").html("Now Really Goodbye");
			$("#title").off("click");
		});
	};

// Text to console
	console.log('in case if you read a console, Hello!');
