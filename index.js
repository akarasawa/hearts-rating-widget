var span = document.querySelectorAll('.hearts span');
		
		
for (var i = 0 ; i < span.length; i++) {
   
   span[i].addEventListener("click", setClickHandlers);
   
}


function setClickHandlers() {
	
	for (i = 0; i < span.length; i++) {

        span[i].classList.remove('active');
        		        
    }
    		    
    this.classList.add('active');	
    
    var elem = this;
	while (elem = elem.previousElementSibling){
		elem.classList.add("active");

	}	
					  
}