var url = "http://canihazip.com/s/";

function setCanvas(data) {
	$("#to_load").text(data);
};

$.get(url, setCanvas);

