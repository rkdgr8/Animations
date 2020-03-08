
var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;         
var mySceneH;          
var myCenterX;         
var myCenterY;  




var InfoContent="<h2> Rotating a magnet : Info </h2> <h3> About </h3><p>There are 2 magnets lying on the table. This experiment demonstrates the rotation of magnet(fixed like a compass) when other magnet is dragged around fixed magnet </p> <p> The concept involved is of magnetic field lines. Magnetic field lines are imaginary lines of any magnetic substance that acts as a guide for tracing path of other magnet if brought closer .</p><p> Magnetic field lines of dragging magnet applies a force on fixed magnet and causes it to rotate until it aligns itself to the magnetic field lines of dragging magnet.</p> <h2> Happy Experimenting!</h2>";                          

var helpContent="<h2> Rotating a magnet : Help</h2> <h3> <p> The experiment involves 2 magnets lying on the table. One magnet is fixed at the center(like a compass) and the other magnet can be freely dragged near the fixed magnet. </p> <p> Dragging the magnet would cause the fixed magnet to rotate and lead to alignment of fixed magnet such that net torque on fixed magnet by draggable magnet is zero. </p> <p> Another really amusing observation is that for 1 complete revolution of the draggable magnet , the fixed magnet would have completed 2 revolutions. </p> <h2> Happy Experimenting!</h2>  ";

function initialiseHelp(){

	PIEupdateHelp(helpContent);

}



function initialiseInfo(){

	  PIEupdateInfo(InfoContent);

}

function initialiseScene(){
    mySceneTLX = -25;
    mySceneTLY = 25;
    mySceneBRX = 25;
    mySceneBRY = -25;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;


 }  

var fmagnet,dmagnet,background;
var b;

function initf(){

var bitmap=document.createElement('canvas');
var g=bitmap.getContext('2d');
bitmap.width=500;
bitmap.height=2000;

g.fillStyle = '#000000';
g.fillRect(0,0,bitmap.width , bitmap.height/2 );

g.fillStyle = '#ff5c33';
g.fillRect(0, bitmap.height/2 , bitmap.width , bitmap.height/2);

 g.font = 'Bold 350px Arial';
 g.fillStyle = '#ffffff';
 g.fillText('N', 150,400 );
 g.fillText('S' , 150 , 1600);

var  texture = new THREE.Texture(bitmap);
  texture.needsUpdate = true;


    var geofmagnet= new THREE.CubeGeometry(4,9,1,4,4,1);
   fmagnet= new THREE.Mesh(geofmagnet , new THREE.MeshBasicMaterial({map:texture}));

   //  fmagnet= new THREE.Mesh(geofmagnet , new THREE.MeshBasicMaterial({color:0x4dff4d}));

    PIEaddElement(fmagnet);


}

function init(){

var bitmap=document.createElement('canvas');
var g=bitmap.getContext('2d');
bitmap.width=500;
bitmap.height=2000;

g.fillStyle = '#000000';
g.fillRect(0,0,bitmap.width , bitmap.height/2 );

g.fillStyle = '#ff5c33';
g.fillRect(0, bitmap.height/2 , bitmap.width , bitmap.height/2);

 g.font = 'Bold 350px Arial';
 g.fillStyle = '#ffffff';
 g.fillText('N', 150,400 );
 g.fillText('S' , 150 , 1600);

var  texture = new THREE.Texture(bitmap);
  texture.needsUpdate = true;


    var geofmagnet= new THREE.CubeGeometry(4,9,1,4,4,1);
   fmagnet= new THREE.Mesh(geofmagnet , new THREE.MeshBasicMaterial({map:texture}));

   //  fmagnet= new THREE.Mesh(geofmagnet , new THREE.MeshBasicMaterial({color:0x4dff4d}));

    PIEaddElement(fmagnet);


//fmagnet.rotateZ(Math.PI/2);
//fmagnet.rotateZ(Math.PI/2);

var bitmap1=document.createElement('canvas');
var g1=bitmap1.getContext('2d');
bitmap1.width=500;
bitmap1.height=2000;

g1.fillStyle = '#ff5c33';
g1.fillRect(0,0,bitmap1.width , bitmap1.height/2 );

g1.fillStyle = '#000000';
g1.fillRect(0, bitmap1.height/2 , bitmap1.width , bitmap1.height/2);

g1.font = 'Bold 350px Arial';
 g1.fillStyle = '#ffffff';
 g1.fillText('S', 150,400 );
 g1.fillText('N' , 150 , 1600);

var texture1 = new THREE.Texture(bitmap1);
  texture1.needsUpdate = true;

    var geodmagnet = new THREE.CubeGeometry(4,15,1,4,4,1);
    // dmagnet=new THREE.Mesh(geodmagnet, new THREE.MeshBasicMaterial({color:0xff80bf}));

dmagnet=new THREE.Mesh(geodmagnet, new THREE.MeshBasicMaterial({map:texture1}));

    PIEaddElement(dmagnet);
    dmagnet.position.x-=15;

    PIEdragElement(dmagnet);
    PIEsetDrag(dmagnet , dragmagnet);

    dmagnet.position.z-=1;

    PIEchangeInputCheckbox("Vertical" , true);
    PIEchangeInputCheckbox("Horizontal" , false);
  
      
}

function loadExperimentElements()
{
	PIEsetExperimentTitle("Rotating a magnet");
    PIEsetDeveloperName("Ravi Kachhadiya");

    initialiseHelp();
    initialiseInfo();

    initialiseScene();

    init();
 /*var backgroundgeo = new THREE.CubeGeometry(200,200,0.5,4,4,1);
     background = new THREE.Mesh(backgroundgeo ,  new THREE.MeshBasicMaterial({color:0xffb3ff}));
    background.position.z-=50   ;

    PIEaddElement(background); */


var image = new THREE.ImageUtils.loadTexture('wood.jpg',{} , function(){PIErender(); }  );
    var myMaterial = new THREE.MeshBasicMaterial({map:image, transparent: true});
var myGeometry= new THREE.CubeGeometry(100,100,0.5,4,4,1);
var background= new THREE.Mesh(myGeometry , myMaterial);
background.position.set(0,0,-1);
PIEaddElement(background);



//dmagnet.rotateZ(Math.PI/2);

  // PIEaddInputCheckbox("Flip magnet" , false , flipmagnet);

  /*	var a = new THREE.Euler( 0, 1, 1.57, 'XYZ' );
    var c = new THREE.Vector3(0,0,1);
var bg = new THREE.Geometry();
bg.vertices.push(new THREE.Vector3(17.5,0,0) , new THREE.Vector3(18.5,0,0) , new THREE.Vector3(18,0,0));
b=new THREE.Line(bg , new THREE.MeshBasicMaterial({color:0xff3333}));
PIEaddElement(b);
b.setRotationFromAxisAngle(c , -Math.PI/2);*/

  	PIEsetAreaOfInterest(mySceneTLX , mySceneTLY + 7, mySceneBRX , mySceneBRY);
    /*PIEadjustCamera(0,-175,175);
    PIErender();

    PIEturnCamera(0,-10,10);
    PIErender();
    PIErenderer.setClearColor(new THREE.Color(0xEEEEEE));*/

    PIEaddInputCheckbox("Vertical",true,checkVertical);
    PIEaddInputCheckbox("Horizontal",false,checkHorizontal);

    PIEaddInputCheckbox("Flip fixed magnet",false,flip_fixed_magnet);
    PIEaddInputCheckbox("Flip drag magnet",false,flip_drag_magnet);

}

var fflipped=false;
var dflipped=false;


function flip_fixed_magnet(){
  PIEstopAnimation();

if(fflipped==false) fflipped=true;
else fflipped=false;

fmagnet.rotateZ(Math.PI);
PIEchangeInputCheckbox("Flip fixed magnet", fflipped);

PIErender();

}


function flip_drag_magnet(){

PIEstopAnimation();

if(dflipped==false) dflipped=true;
else dflipped=false;

dmagnet.rotateZ(Math.PI);
  PIEchangeInputCheckbox("Flip drag magnet", dflipped);

PIErender();

}


var isvertical=true;

function checkVertical(){
//resetExperiment();

PIEstopAnimation();



PIEremoveElement(fmagnet);
initf();
 // dmagnet.rotateZ(Math.PI/2);
  //fmagnet.rotateZ(-Math.PI/2);
  

  PIEchangeInputCheckbox("Vertical" , true);
  PIEchangeInputCheckbox("Horizontal", false);

PIErender();

isvertical=true;

}

function checkHorizontal(){

  PIEstopAnimation();

PIEremoveElement(fmagnet);
initf();

  //dmagnet.rotateZ(-Math.PI/2);
  fmagnet.rotateZ(Math.PI/2);



PIEchangeInputCheckbox("Horizontal",true);
PIEchangeInputCheckbox("Vertical" , false);

isvertical=false;

PIErender();

}



var mx,my;
var dragstart=false; 

function dragmagnet(element,newpos)
{
  //if(dragstart==false)
     dragstart=true; 
      
      //if(isvertical==false)    
     //fmagnet.rotateZ(Math.PI/2);

    PIEstartAnimation();
 // }

if(newpos.x-2<=-50) dmagnet.position.x=-48;
else if(newpos.x+2>=50) dmagnet.position.x=48;
else if(newpos.y>=22.4) dmagnet.position.y=22.4;
else if(newpos.y<=-17.59) dmagnet.position.y=-17.59;
else dmagnet.position.set(newpos.x , newpos.y , newpos.z);

	mx=newpos.x;
	my=newpos.y;

}
var mr,angleofrotation;
var onetime=false;

function updateExperimentElements(t,dt){

//var axisofrotation = new THREE.Vector3(10,0,1);
//fmagnet.setRotationFromAxisAngle( axisofrotation , -angleofrotation);

/*if(onetime==false && isvertical==false)
{
  angleofrotation= Math.PI/2;
  mr = new THREE.Euler(0,0,angleofrotation , 'XYZ');
  fmagnet.setRotationFromEuler(mr);

onetime=true;
}*/

PIEchangeInputCheckbox("Vertical",false);
PIEchangeInputCheckbox("Horizontal",false);
//PIEchangeInputCheckbox("Flip fixed magnet",false);
//PIEchangeInputCheckbox("Flip drag magnet",false);

if(dflipped==true){angleofrotation-=Math.PI/2; }

if(mx<=0 && my>=0)
{ 
 
  angleofrotation =  2 * Math.atan( Math.abs(my) / Math.abs(mx) );
  if(dflipped==true){angleofrotation-=Math.PI; }

  
mr = new THREE.Euler(0,0,-angleofrotation,'XYZ');
fmagnet.setRotationFromEuler(mr);
}

if(mx>=0 && my>=0)
{


  angleofrotation =  2 * (Math.PI/2 -  Math.atan( Math.abs(my) / Math.abs(mx)) );
  if(dflipped==true){angleofrotation-=Math.PI; }

 //if(isvertical==false){angleofrotation-=Math.PI/2; }

  mr = new THREE.Euler(0,0,-angleofrotation-Math.PI , 'XYZ');
  fmagnet.setRotationFromEuler(mr);
}

if(mx>=0 && my<=0)
{
  angleofrotation =  2 * Math.atan(Math.abs(my) / Math.abs(mx) ) ;
  if(dflipped==true){angleofrotation-=Math.PI; }

 //  if(isvertical==false){angleofrotation-=Math.PI/2; }
    mr = new THREE.Euler(0,0,-angleofrotation , 'XYZ');
    fmagnet.setRotationFromEuler(mr);
}

if(mx<=0 && my<=0)
  {angleofrotation =  2 * (Math.PI/2 -  Math.atan( Math.abs(my) / Math.abs(mx)) );
    if(dflipped==true){angleofrotation-=Math.PI; }

    // if(isvertical==false){angleofrotation-=Math.PI/2; }
  mr = new THREE.Euler(0,0,-angleofrotation-Math.PI , 'XYZ');
  fmagnet.setRotationFromEuler(mr);
}

PIEshowInputPanel();
  
}

function resetExperiment(){


PIEremoveElement(fmagnet);
PIEremoveElement(dmagnet);

init();

    isvertical=true;
    dragstart=false;
  //  onetime=false;  
  
}