var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();


radioGroup.addEventListener( 'change', changeSide );



var state = 0;
		function changeBulbImage() {
			if (state == 1) {
				document.getElementById("bulbImg").src="light1.png";
        document.getElementById("bulbImg").style="background : rgb(207,208,80); background: radial-gradient(circle, rgba(207,208,80,1) 31%, rgba(0,212,255,1) 84%)";
				state = 0;
			} else {
				document.getElementById("bulbImg").src="light2.png";
        document.getElementById("bulbImg").style="background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)";
       
				state = 1;
			}
		}