$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    //TODO
    var c;
    var tool = new Tool();
    tool.onMouseDown = function(event){
        c = new Shape.Circle(200, 200, 200);
        c.fillColor = "black";
        var text = new PointText(200);
        text.justification = 'center';
        text.fillColor = 'white';
        text.fontSize = 60;
        text.content = 'Hello World!';
    paper.view.draw();
    console.log('main.js loaded!');
    }
});

        // for (var x=10; x<400; x+=20) {
        //     for (var y=10; y<400; y+=20){
        //        
    
        //        if ((x / 20 + y / 20) % 2 === 0) {
        //         c.fillColor = 'blue';
        //     } else {
        //         c.fillColor = 'yellow';
        //     }
               
        //     }
        // }
    //     if (clickCount % 2 == 0){
    //         c.fillColor = 'blue';
    //     }else {
    //         c.fillColor = 'yellow';
    //     }
    // }
    // c = new Shape.Circle(event.point, 10);
    // c.fillColor = getRandomColor();
    // function getRandomColor() {
    //     return new Color(Math.random(), Math.random(), Math.random());
    // }