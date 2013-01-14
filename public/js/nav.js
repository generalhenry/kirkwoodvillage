// Browser detect check

var ie4 = (document.all && !document.getElementById) ? true:false;
var ns4 = (document.layers) ? true:false;
var dom2 = (document.getElementById) ? true:false;

var loc = new String(document.location);



function menurollon(whichdoc,whichimg) {
	if (ns4 && whichdoc != '') {
		eval('document.layers["' + whichdoc + '"].document.images["' + whichimg + '"].src = "' + 'images/menu/' + whichimg + '_on.gif"');
	} else {
		eval('document.images["' + whichimg + '"].src = "' + 'images/menu/' + whichimg + '_on.gif"');
	}
}

function menurolloff(whichdoc,whichimg) {
	if (ns4 && whichdoc != '') {
		if (whichdoc != '') {
			eval('document.layers["' + whichdoc + '"].document.images["' + whichimg + '"].src = "' + 'images/menu/' + whichimg + '_off.gif"');
		}
	} else {
		eval('document.images["' + whichimg + '"].src = "' + 'images/menu/' + whichimg + '_off.gif"');
	}
}
