var canvas = new fabric.Canvas("myCanvas")

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

player_object = "";
block_object = "";

function player_update()
{
     fabric.Image.fromUrl("player.png", function(Img){
     player_object = Img;
      
     
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({top:player_y, left:player_x});
     canvas.add(player_object);
     }
     );
}
function block_update(get_image)
{
     fabric.Image.fromUrl(get_image, function(Img){
     block_object = Img;
      
     
     block_object.scaleToWidth(block_image_width);
     block_object.scaleToHeight(block_image_height);
     block_object.set({top:player_y, left:player_x});
     canvas.add(block_object);
     }
     );
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
     var keypressed = e.keyCode;

     if(e.shiftKey == true && keypressed == "80")
     {
          block_image_width = block_image_width + 10;
          block_image_height = block_image_height + 10;

          document.getElementById("current_width").innerHTML = block_image_width;
          document.getElementById("current_height").innerHTML = block_image_height;

          console.log("P and Shift Pressed together");
     }
     if(e.shiftKey == true && keypressed == "77")
     {
          block_image_width = block_image_width - 10;
          block_image_height = block_image_height - 10;

          document.getElementById("current_width").innerHTML = block_image_width;
          document.getElementById("current_height").innerHTML = block_image_height;

          console.log("M and Shift Pressed together");
     }
     
     if(keypressed == "37")
     {
          left();
          console.log("Left");
     }
     if(keypressed == "38")
     {
          up();
          console.log("Up")
     }
     if(keypressed == "39")
     {
          right();
          console.log("Right")
     }
     if(keypressed == "40")
     {
          down();
          console.log("Down")
     }
     if(keypressed == "87")
     {
          block_update("wall.jpg")
          console.log("W")
     }
     if(keypressed == "71")
     {
          block_update("ground.png")
          console.log("G")
     }
     if(keypressed == "76")
     {
          block_update("light_green.png")
          console.log("L")
     }
     if(keypressed == "84")
     {
          block_update("trunk.jpg")
          console.log("T")
     }
     if(keypressed == "82")
     {
          block_update("roof.jpg")
          console.log("R")
     }
     if(keypressed == "89")
     {
          block_update("yellow_wall.png")
          console.log("Y")
     }
     if(keypressed == "68")
     {
          block_update("dark_green.png");
          console.log("D");
     }
     if(keypressed == "85")
     {
          block_update("unique.png");
          console.log("U");
     }
     if(keypressed == "67")
     {
          block_update("cloud.png")
          console.log("C")
     }
}

