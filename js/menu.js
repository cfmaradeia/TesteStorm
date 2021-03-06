// JavaScript Document
$(function(){
	$.scrollIt({
	  upKey: 38,             // key code to navigate to the next section
	  downKey: 40,           // key code to navigate to the previous section
	  easing: 'easeOutQuart',      // the easing function for animation
	  scrollTime: 800,       // how long (in ms) the animation takes
	  activeClass: 'active', // class given to the active nav element
	  onPageChange: null,    // function(pageIndex) that is called when page is changed
	  topOffset: -80          // offste (in px) for fixed top navigation  
	});
});
