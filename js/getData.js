$(function () {
	
	var query;
	var $results = $('#results');
	var	databaseId = "LBVICP";
	var userNamne = "E11Y8356";
	var argument;
	var mainJson;

	

	$("#queryList").change(function(){
		query = $('#queryList :selected').val();
		// alert(query);
		argument, mainJson = "";

		argument = [{"argid": "username","arginto": "[username]","value": "E11Y8356"}, 
					{"argid": "pozo","arginto": "[pozo]","value": ""}, 
					{"argid": "cuenca","arginto": "[cuenca]","value": "CESAR RANCHERIA"},
					{"argid": "material_type","arginto": "[material_type]","value": ""}];
		mainJson = {"databaseId": "LBVICP","queryId": query, "argumentsJson": argument};

		console.log(mainJson);
	});



	$("#getDataFromLbv").click(function(e){
		var url = 'http://10.11.24.28:8080/labviewer/integration/getData';

		// alert(url);

		$.ajax({
			type:'POST',
			url: url,
			dataType: "json",
			contentType: "application/json",	
			data: JSON.stringify(mainJson),
			success: function(data, textStatus, jqXHR){
				alert('Load was performed. Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information! ');
			},
			error: function(jqXHR, textStatus, errorThrown){
				alert('There is an error');
				console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);
			}
		})
	});
});