var canvas = new fabric.Canvas('myCanvas');
player_y = 10;
player_x = 10;
block_imgw =30;
block_imgh =30;
player_object="";
block_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
player_object =Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({ top:player_y, left:player_x });

canvas.add(player_object);
    });

}
function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
block_object =Img;
block_object.scaleToWidth(block_imgw);
block_object.scaleToHeight(block_imgh);
block_object.set({ top:player_y, left:player_x });

canvas.add(block_object);
    });

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey== true && keypressed == '80'){
        block_imgw=block_imgw+10;
        block_imgh=block_imgh+10;
        document.getElementById("current_width").innerHTML=block_imgw;
        document.getElementById("current_height").innerHTML=block_imgh;
        console.log("shift and p key pressed");

    }

    if(e.shiftKey== true && keypressed == '77'){
        block_imgw=block_imgw-10;
        block_imgh=block_imgh-10;
        document.getElementById("current_width").innerHTML=block_imgw;
        document.getElementById("current_height").innerHTML=block_imgh;
        console.log("shift and m key pressed");

    }
    if(keypressed == '38'){
        console.log("up arrow key pressed");
        up();

    }
    if(keypressed == '40'){
        console.log("down arrow key pressed");
        down();
    }
    if(keypressed == '37'){
        console.log("left arrow key pressed");
        left();
    }
    if(keypressed == '39'){
        console.log("right arrow key pressed");
        right();
    }
    if(keypressed == '67'){
        console.log("c key pressed");
        block_update('cloud.jpg');
        
    }
    if(keypressed == '68'){
        console.log("d key pressed");
        block_update('dark_green.png');
        
    }
    if(keypressed == '71'){
        console.log("g key pressed");
        block_update('ground.png');
        
    }
    if(keypressed == '76'){
        console.log("l key pressed");
        block_update('light_green.png');
        
    }
    if(keypressed == '82'){
        console.log("r key pressed");
        block_update('roof.jpg');
        
    }
    if(keypressed == '84'){
        console.log("t key pressed");
        block_update('trunk.jpg');
        
    }
    if(keypressed == '85'){
        console.log("u key pressed");
        block_update('unique.png');
        
    }
    if(keypressed == '87'){
        console.log("w key pressed");
        block_update('wall.jpg');
        
    }
    if(keypressed == '89'){
        console.log("y key pressed");
        block_update('yellow_wall.png');
        
    }
}
function up(){
    if(player_y>=0){

        player_y=player_y - block_imgh;
        console.log("x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){

        player_y=player_y + block_imgh;
        console.log("x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){

        player_x=player_x - block_imgw;
        console.log("x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=900){

        player_x=player_x + block_imgw;
        console.log("x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}