

// ------------------trying to make rain on whole body section--------------------------//
let hrElement;
  let counter = Math.random()* 10;
  
  for( let i = 0; i <counter; i++){
      hrElement = document.createElement("HR");
      hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
      hrElement.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(hrElement);
      
  }
  
  // Add an if statement for when game starts to stop raining.






//-------------------------- Navigation bar--------------------------//









// Wait for the DOM to load before running the code
document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the toggle button and the sidebar
    const toggleBtn = document.getElementById('toggle-sidebar');
    let sidebar = document.querySelector('.sidebar');
  
    // Check that the toggle button and sidebar exist
    if (!toggleBtn || !sidebar) {
      console.error('Toggle button or sidebar not found.');
      return;
    }
  
    // trying to move the sidebar to the right a little bit
   
    // Add a click event listener to the toggle button
    toggleBtn.addEventListener('click', function() {
      // Toggle the "show" class on the sidebar
      
      sidebar.classList.toggle('show');
    });
  });

  


  // Get a reference to the sidebar list.
const sidebarList = document.getElementById('sidebar-list');

// Add a new item to the sidebar list

const newItem = document.createElement('li')
newItem.textContent =" New Item";
sidebarList.appendChild(newItem);

 function checkInventory(){
    const inventory = document.querySelector('#sidebar-list');
    if(!inventory || !inventory.children.length){
        alert('There are no inventory items.')
    }
 }
  
  //-------------------------- END navigation bar--------------------------//





  //--------------------------Canvas stuff-------------------------------//

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  let newImage = new Image();
  newImage.src=("step1.png")

newImage.onload = () => {
    ctx.drawImage(newImage, 0, 0, 400, 250);
}

//-------------------------- audios for different stages----------------//

// create an element with the audio on it.
// create a relation with the audio and the picture / biome being shown.

const audio = new Audio('Themesong.mp3');

let biomes = document.getElementsByClassName('biome');

for(let i = 0 ; i < biomes.length; i++){
    if(biomes[i] ==='RUINS'){
        document.removeEventListener('click', arguments.callee);
        audio.play();
    }
}


