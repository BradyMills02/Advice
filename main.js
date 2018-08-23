var myArray = ["What do you think I'm going to say?", "Brady is never wrong", "Don't be stupid"];
var create = document.createElement('div');

function myBtn(e) {
	create.setAttribute('id', 'response');
	create.innerHTML = myArray;
	document.body.appendChild(create);
}

var btn = document.getElementById('myButton');
btn.addEventListener('click', function() {
	myBtn(1);
}, false);