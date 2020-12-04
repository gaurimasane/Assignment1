var stage = document.getElementById('svs'), 
        ctx = stage.getContext('2d'), 
        x = 10, 
        y = 10, 
        wid = 20, 
        hei = 20; 
		
function drawRect(x,y,wid,hei) {
    ctx.fillStyle = 'black'; 
    ctx.fillRect(x, y, wid, hei); 
}

drawRect(x,y,wid,hei);

window.onkeydown = function(event) {
    var keyPr = event.keyCode; 
  
    if(keyPr === 39 && x<=460){ 
        x = x+20; 
    }
    else if(keyPr === 37 && x>10){
        x = x-20; 
    }
    else if(keyPr === 38 && y>10) {
        y = y-20; 
    }
    else if(keyPr === 40 && y<=460){
        y = y+20; 
    }
		
  
    ctx.clearRect(0,0, 500, 500);
  
    drawRect(x,y,wid,hei);
};