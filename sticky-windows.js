Arry = [];
for (var i = 1; i < 12; i++) {
	let index = i;
    Hotkey('+F'+index, function(){Arry[index] = WinGet("ID","A")});
    Hotkey('ESC & F'+index,  function(){WinActivate("ahk_id "+Arry[index])});
}

Hotkey('+F12', function(){Arry = [];});
Hotkey('ESC & F12', function(){printArray()});

function printArray(){	
	var str = ""

	Arry.forEach(function(element, i){
		str += ("\n" + i.toString() + " - " + WinGet("ProcessName","ahk_id "+element));
		}
	);
	MsgBox(str);
}