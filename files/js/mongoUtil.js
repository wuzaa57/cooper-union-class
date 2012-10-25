var mongoUtil = {
	db: "apiTest",
	apiKey: "5088cebae4b0d0aee183c26d",
	url: function() {
		return 'https://www.mongolab.com/api/1/databases/heroku_app7564546/collections/'+this.db+'?apiKey='+this.apiKey;
	},
	post: function(id, data, callback) {
		var obj = {};
		obj[id] = data;
		var formattedData = JSON.stringify(obj);
		$.ajax({
			url:this.url(),
			dataType:'json',
			contentType:'application/json',
			type:'POST',
			data:formattedData,
			success:function(response){
				
				console.log("success",response);
				if(typeof(callback) === "function") {
					callback(response);
					console.log("The ajax request callback function has been fired.");
				}
			},
			error: function(error) {
				console.log("failure",error);
			}
		
		});				
	},
	get: function(id, callback) {
		$.ajax({

			url:this.url(),
			dataType:'json',
			contentType:'application/json',
			type:'GET',
			success:function(response){
				
				console.log("success",response);
				$("<h2>"+response.length+"</h2>").appendTo("h1");
			},
			error: function(error) {
				console.log("failure",error);
			}
	
		});
	}
};
