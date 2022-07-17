const hippo = document.getElementById("hippo");
const obstacle = document.getElementById("obstacle");

function jump() {
    if (hippo.classList != "jump") {
        hippo.classList.add("jump");

        setTimeout(function () {
            hippo.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function () { 
    // get current hippo Y position
    let hippoTop = parseInt(window.getComputedStyle(hippo).getPropertyValue("top"));
    
    // get current obstacle X position
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    // detect collision
    if (obstacleLeft <50 && obstacleLeft >0 && hippoTop >= 150) {
        // collision 
        //var modal = document.getElementById("gameOver");
        modal.style.display = "block";
    }

}, 10);

document.addEventListener("keydown", function(event) {
    jump();
});

document.addEventListener("click", function(event) {
    jump();
});

____________________________________________

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target != modal) {
    modal.style.display = "none";
  }
}