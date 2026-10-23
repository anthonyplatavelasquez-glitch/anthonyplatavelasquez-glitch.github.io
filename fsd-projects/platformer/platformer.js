$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(250, 610, 300, 25, "red");
    createPlatform(1300, 610, 300, 25, "orange");
    createPlatform(1300, 500, 300, 25, "brown");
    createPlatform(800, 500, 300, 25, "black");
    createPlatform(400, 400, 300, 25, "blue");
    
    // TODO 3 - Create Collectables
    createCollectable("diamond", 680, 460);
    createCollectable("diamond", 1330, 430);
    createCollectable("diamond", 530, 330);

    // TODO 4 - Create Cannons
    createCannon("top", 800, 1500);
    createCannon("right", 405, 1500);
    createCannon("left", 510, 1500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
