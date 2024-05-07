function setup() {
    createCanvas(600, 400);
  }
  
  
  function inicializaCores() {
    
    background("#F5E780");
    fill("black");
    textSize(64);
    textAlign(CENTER, CENTER);
    
  } 
    
    
    function draw() {
    inicializaCores();
      
    let maximo = width;
    let minimo = 0;
    let palavra = "Caminhante";
    let quantidade = map(mouseX, 0, width, 0, palavra.length);
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 300, 200);
    
  }
  
  
  
  
  