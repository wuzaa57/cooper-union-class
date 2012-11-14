var word_count={};
var word_tracker={};
var pop_words={};

var mongoUtil = {
	_db: "wordCount",
	_appID:"heroku_app7962582",
	_apiKey: "5089c774e4b0a116b09053f1",
	
	config: function(configuration) {
		
		for (var key in configuration) {
			this['_'+key] = configuration[key];
		};
	},
	url: function() {
		return 'https://www.mongolab.com/api/1/databases/'+this._appID+'/collections/'+this._db+'?apiKey='+this._apiKey;
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
				//$("<h2>"+response.length+"</h2>").appendTo("h1");
				
				var i=0;
				var max_count=1;

				$.each(response, function(id, entry) {
					if(entry.searchTerm !== undefined){
						//var popwordsHTML = "<div class='popwords'"+id+" id='popword" + id + "'>" + entry.searchTerm + "</div>";
						//$(popwordsHTML).appendTo("#popularwords");
						if(word_count[entry.searchTerm] === undefined){
							word_count[entry.searchTerm]=1;
							word_tracker[i]=entry.searchTerm;
							i++;
						}
						else if(word_count[entry.searchTerm] > 0){
							word_count[entry.searchTerm]++;
						}
						
					}
				});
				console.log("length of db: "+response.length);
				
				for(var j=0; j<i; j++){
					if(max_count < word_count[word_tracker[j]]){
						max_count = word_count[word_tracker[j]];
					}
				}
				console.log("max word count: "+max_count);
				
				var k=0;
				
				for(var m=max_count; m>0; m--){
					for(var l=0; l<i; l++){
						if(m == word_count[word_tracker[l]]){
							pop_words[k] = word_tracker[l];
							$("#popularwords").append("<tr class='popwords' id='popwords"+k+"'><td>"+pop_words[k]+"</td><td>"+m+"</td></tr>");
							k++;
						}
						if(k===20){break;}
					}
					if(k===20){break;}
				}
				

				//successful general get
				/*for(var k=0; k<i; k++){
					var popHTML="<div class='popwords'>"+word_tracker[k]+"</div>";
					$(popHTML).appendTo("#popularwords");
				}*/
				
			},
			error: function(error) {
				console.log("failure",error);
			}
	
		});
	}
};
