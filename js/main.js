$('.editToggle').on('click', function() {
	console.log("here");
	if($(this).html() == "edit") $(this).html("Save Changes");
	else $(this).html("edit");
});