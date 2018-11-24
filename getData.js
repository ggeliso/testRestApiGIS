$(function () {
	
	var $results = $('#results');
	var query = $("#queryList option:selected").text();

	$.ajax({
		type:'POST',
		url: 'http://10.7.58.16:8080/labviewer/integration/getData',
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify({"databaseId" : "LBVICP", "queryId": query, ""})
		succes: function (data) {
			$.each(data, function(i, item){
				$
			})
			console.log('Succes' data);
			// body...
		}
	});
});