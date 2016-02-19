function flip() {
		var c = document.getElementById("coin");
    var p = document.getElementById("who")
		c.classList.toggle("flipped");
    if (c.classList.contains('flipped')) {
    p.innerHTML = "I swear she's really working on stuff!";
    }
    else{
    p.innerHTML = "Alie Cat is working on stuff!";
    }
    
}
