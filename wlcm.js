HTMLElement.prototype.wlcm = function (wlcm_words=[]) { 


	// initializing wlcm container
	var wlcm_contenaier = this;

	// setting default element-css
	wlcm_contenaier.style = "position:relative;overflow:hidden;";

	/**
	* Section to create words and append it to wlcm container
	*/
	for (i=0;i<wlcm_words.length;i++) {


		// create word element
		let word_container = document.createElement("span");


		// setting id and html
		word_container.innerHTML = wlcm_words[i];
		word_container.id = "wlcm_element";


		// initializing starting top, speed and left
		let top = getRandom(15, wlcm_contenaier.clientHeight-17, true);
		let left = getRandom(-100, wlcm_contenaier.clientWidth, true);
		let speed = getRandom(1, 2);

		// setting speed
		word_container.setAttribute("speed", speed);
		
		// setting default style
		word_container.style = "position:absolute;top:"+top+"px;display:inline-block;max-width:200px;";

		// setting start left position
		word_container.style.left = left+"px";


		// appending word element to wlcm container
		wlcm_contenaier.appendChild(word_container);

	}
	
	/**
	* Clock to update position of words
	*/
	setInterval(function() {


		// getting wlcm container children
		let word_nodes = wlcm_contenaier.children;
		

		// looping wlcm container children
		for (i=word_nodes.length-1;i>=0;i--) {


			// setting current node for each wlcm container children
			let current_node = word_nodes[i];

			// cleft for correct left position of current node
			let  cleft = parseInt(current_node.style.left, 10);

			// getting current node starting speed from attribute 
			let speed = current_node.getAttribute("speed");

			// updating left position of current node
			cleft -= speed;

			// if current node is offscreen go to end
			if (cleft < -current_node.clientWidth) cleft = wlcm_contenaier.clientWidth + current_node.clientWidth;

			// updating left position of current node
			current_node.style.left = cleft + "px";

		}


	}, 50);


	/**
	* Function for random numbers
	*/
	function getRandom(min, max, int = false) {
		if (int) {
	    	return Math.floor(Math.random() * (max - min + 1)) + min;
		} else {
			return Math.random() * (max - min) + min;
		}
	}

};


