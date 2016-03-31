// if scrolling down
// header-wrapper element bottom in view
// reset position to initial

var waypoint = new Waypoint({
		element: document.getElementById('header-wrapper'),
		handler: function(direction) {
  		//console.log('Bottom of element hit bottom of viewport');
  		if (direction === 'down'){
  			document.getElementById('header').style.position = 'initial'
  		}
	}, 
	offset: 'bottom-in-view'
});



// if scrolling up 
// welcome elements bottom is in view 
// fix to bottom

var waypoint2 = new Waypoint({
	element: document.getElementById('welcome'),
		handler: function(direction) {
 		if (direction === 'up') {
   		document.getElementById('header').style.position = 'fixed'
		  document.getElementById('header').style.bottom = 0
	  }
	},
	offset: 'bottom-in-view'
});



// once element stick-head hits top stick element to top.

var sticky = new Waypoint.Sticky({
  element: $('.sticky-head')[0]
});