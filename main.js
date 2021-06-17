var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png" , function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top : player_y ,
            left : player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image , function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top : player_y ,
            left : player_x
        });
        canvas.add(block_image_object);
    });
}


window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='80') {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey==true && keyPressed=='77') {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keyPressed=='38') {
        up();
        console.log("up is pressed");
    }

    if(keyPressed=='37') {
        left();
        console.log("left is pressed");
    }

    if(keyPressed=='39') {
        right();
        console.log("right is pressed");
    }

    if(keyPressed=='40') {
        down();
        console.log("down is pressed");
    }




    if(keyPressed=='87') {
        new_image('wall.jpg');
        console.log("w is pressed");
    }
    
    if(keyPressed=='71') {
        new_image('ground.png');
        console.log("g is pressed");
    }

    if(keyPressed=='76') {
        new_image('light_green.png');
        console.log("l is pressed");
    }

    if(keyPressed=='84') {
        new_image('thor.jpg');
        console.log("t is pressed");
    }

    if(keyPressed=='83') {
        new_image('spider.jpg');
        console.log("s is pressed");
    }

    if(keyPressed=='73') {
        new_image('iron.jpg');
        console.log("i is pressed");
    }

    if(keyPressed=='72') {
        new_image('hulk.jpg');
        console.log("h is pressed");
    }

    if(keyPressed=='67') {
        new_image('captain.jpg');
        console.log("c is pressed");
    }

    if(keyPressed=='65') {
        new_image('avengers.jpg');
        console.log("a is pressed");
    }

}
