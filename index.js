     //--------------------- BOUTON 1 ---------------------

     document.getElementById("xp1").onmouseover = function() {expButton()};
     document.getElementById("xp1").onmouseout = function() {expButtonOut()};

function expButton() {
    document.getElementById("ouverture1").classList.toggle("show");

}

function expButtonOut() {
    document.getElementById("ouverture1").classList.toggle("hide");

}

//--------------------- BOUTON 2 ---------------------

document.getElementById("xp2").onmouseover = function() {exp2Button()};
document.getElementById("xp2").onmouseout = function() {exp2ButtonOut()};

function exp2Button() {
    document.getElementById("ouverture2").classList.toggle("show");

}

function exp2ButtonOut() {
    document.getElementById("ouverture2").classList.toggle("hide");

}


//--------------------- BOUTON 3 ---------------------
document.getElementById("xp3").onmouseover = function() {exp3Button()};
document.getElementById("xp3").onmouseout = function() {exp3ButtonOut()};

function exp3Button() {
    document.getElementById("ouverture3").classList.toggle("show");

}

function exp3ButtonOut() {
    document.getElementById("ouverture3").classList.toggle("hide");

}

//--------------------- BOUTON 4 ---------------------

document.getElementById("xp4").onmouseover = function() {exp4Button()};
document.getElementById("xp4").onmouseout = function() {exp4ButtonOut()};

function exp4Button() {
    document.getElementById("ouverture4").classList.toggle("show");

}
function exp4ButtonOut() {
    document.getElementById("ouverture4").classList.toggle("hide");

}

//------------------ CANVAS ANIMATION ---------------------
/*// On crée le canvas
var canvas = document.getElementById('canvas');
// On prend le contexte en 2d
var ctx = canvas.getContext('2d');

function tick() {

// Fond du Canvas
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';

  // Nettoie le canvas des dessins précédent
  ctx.fillRect(0, 0, 400, 200);

  // Dessine un rond gris
  ctx.fillStyle = 'grey';

  // Commence un chemin qui va etre suivis par l'animation
  ctx.beginPath();

  // Definis la position que le cercle va empreinter 
  ctx.arc((Math.sin(Date.now() / 1500) + 0.5) * 250 + 50,
          150 + Math.sin(Date.now() / 150) * 15,
          // Taille du cercle
          15, 0, 2 * Math.PI);
  // Dessine le cercle
  ctx.fill();
  
  requestAnimationFrame(tick);
}
tick();*/


canevas = document.querySelector('#canvas'); 
    contexte = canevas.getContext('2d');
    var X=canevas.width;
    var Y=canevas.height;
    // deux courbes cubiques
    contexte.beginPath(); 
    contexte.moveTo(0,Y/2.5) ; 
    contexte.bezierCurveTo(X/3,Y/4, X/3*2,Y/4*3,X,Y/2.3); 
    // ordonnées des deux points d'inflexion : Y/4 et Y*3/4
    contexte.stroke(); 
    contexte.strokeStyle = 'red';
    contexte.beginPath(); 
    contexte.moveTo(0,Y/1.7) ; 
    contexte.bezierCurveTo(X/-5,Y/10,X/2*3,Y,X,Y/10); 
    // ordonnées des deux points d'inflexion : 0 et Y
    contexte.stroke(); 

    canevas = document.querySelector('#canvas1'); 
    contexte = canevas.getContext('2d');
    var X=canevas.width;
    var Y=canevas.height;
    // deux courbes cubiques
    contexte.beginPath(); 
    contexte.moveTo(0,Y/2.5) ; 
    contexte.bezierCurveTo(X/3,Y/4, X/3*2,Y/4*3,X,Y/2.3); 
    // ordonnées des deux points d'inflexion : Y/4 et Y*3/4
    contexte.stroke(); 
    contexte.strokeStyle = 'red';
    contexte.beginPath(); 
    contexte.moveTo(0,Y/2) ; 
    contexte.bezierCurveTo(X/-5,Y/10,X/2*3,Y,X,Y/10); 
    // ordonnées des deux points d'inflexion : 0 et Y
    contexte.stroke(); 