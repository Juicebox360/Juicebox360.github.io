var caretOn = 800;
var caretOff = 500;
var timer = setTimeout( function(){ caretUpdate() }, caretOn );
var on = true;
var caretTimer;
var t;

function caretUpdate()
{
	t = "";
	caretTimer = caretOn;
	if ( on )
	{
		t = "_";
		caretTimer = caretOff;
	}
	on = !on;
	document.getElementById( "caret" ).innerHTML = t;
	setTimeout( function(){ caretUpdate() }, caretTimer );
}