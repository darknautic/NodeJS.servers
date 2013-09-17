
	function readyFn( jQuery ) {
		// Code to run when the document is ready.
		console.log("JQuery Loaded .");		
		$("span#alerting").text("Time :");

	
	//## get JSON-formatted data from the server
	$.getJSON( "http://localhost:1337/json", function( data ) {
	//$.getJSON( "https://stream.twitter.com/1.1/statuses/sample.json", function( data ) {
		
		 //##log each key in the response data
		$.each( data, function( key, value ) {
			console.log( key + " : " + value );
		});

		console.log(data['Ferrari']);
		console.log(data['McLaren']);
		console.log(data['Renault']);

		console.log(data['Ferrari'].prize);
		console.log(data['McLaren'].prize);
		console.log(data['Renault'].prize);

		$("#jsonResult").text(data['Renault'].prize);
		
		
	
	});
		
	

		} //main function

	$( document ).ready( readyFn );	
