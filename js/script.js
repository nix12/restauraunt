$(document).ready(function() {
	$("#content").append("<img src='images/index.png'>");
	$("#content").append("<h1>Welcome to the Greatest Restauraunt on Earth!</h1>");

	var list = '<ul id="tabmenu" >' 
            + '<li><a class="active"'
            + 'id="tab1">Menu</a></li>' 
            + '<li><a class=""'
            + 'id="tab2">Location</a></li>' 
            + '<li><a class=""'
            + 'id="tab3">Contact</a></li>' 
            + '</ul>' 
            + '<div id="page"></div>'
$("#content").append(list);

function binding(tab, content) {
	$(tab).click(function() {
		$("#page").html(content);
		$("a").removeClass("active");
		$(this).addClass("active");
	});
}

binding("#tab1", "<p>Insert menu here</p>");
binding("#tab2", "<p>325 Martian Avenue, Planet Mars</p>");
binding("#tab3", "<p>(555)555-5555</p>");
});

