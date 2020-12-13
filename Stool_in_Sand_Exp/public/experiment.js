


var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;         
var mySceneH;          
var myCenterX;         
var myCenterY;  


var tableTop;//Top of the table


var weightdisk1=10;
var weightdisk2=30;
var weightdisk3=20;


var disk1;
var disk2;
var disk3;


var disk3xr ;
var disk3xl ;
var  disk3yu ;
var disk3yd;

var disk1xr;// x coordinate of rightmost part of disk1
var disk1xl;// x coordinate of leftmost part of disk1
var disk1yu;// y coordiante of uppermost part of disk1
var disk1yd;// y coordinate of bottommost part of disk1

var disk2xr;
var disk2xl;
var disk2yu;
var disk2yd;

var disk1on=false;//
var disk2on=false;
var disk3on=false;

var tableorientation=0;// boolean variable indicating orientation of table . 0 represents erect and 1 represents upside down.


// these variables are for container containing sand.
var sand;
var tops;
var bottoms;
var backs;
var lefts;
var rights;

var scale;//scale which is used to measure amount of depression

var factordepression=1;//factordepression is the factor multiplied when table is upside down
var DEPRESSION_CONST=0.20;//amount of depression per 1 kg of weight when orientation of table is erect.
var amtdepression;//amount of depression



var helpContent=" <h2>Stool in the sand : Help</h2><h3>About</h3><p> This experiment demonstrates the depression of stool in sand when different weights are placed on stool.<p><h3> Controls</h3><p> Select the orientation of table from checkbox displayed on top right corner of screen. </p><p>There are 2 types of orientation of table:</p> <ul> <li>Erect</li> <li>Upside Down</li>  </ul><p> There are 3 different amount of weights: </p><ul> <li>10 kg</li><li>20 kg</li><li>30 kg</li>  </ul> <p> Drag the weight and put on the table.You can press the Start button either before or after putting weight on the table. Depression will be observed according to the weight and orientation of table.</p><p> Observe the results from the scale . They are also tabulated in the table displayed on the top left corner of the screen  .<h3>Happy Experimenting.</h3>  "


var InfoContent="<h2>Stool in the sand : Info </h2> <h3> Pressure</h3> <p>The force acting on a unit area of a surface is called pressure. The unit of pressure is Pa (N/m<sup>2</sup>) </p> <h3> Pressure=Force/Area</h3><p> The smaller the area , larger the pressure on a surface for the same force.</p> <p> In experiment there are 3 different types of weights available(10kg,20kg,30kg) and 2 orientations of table(erect , upside down)</p> Pressure depends on the force which directly depends on the amount of weight put on the table . Pressure also depends on the area which depends on the orientation of table . <p> Area concerned in 2 different orientations of table: </p><ul> <li>Erect : area of 4 legs = 4 * area of 1 leg = 4*4 = 16 units </li><li> Upside down : area of table top = 100 units</li> </ul><h3>Formula:</h3> <p>Amount of depression = weight * depression_constant * factor_of_area </p><h3>Constants:</h3><ul><li> depression_constant=0.25 which is the amount of depression when 1 kg weight is put on table in erect configuration. </li><li> factor_of_area is 1 in case of erect configuration and 16/100(area of 4 legs/area of table top) in case of upside down configuraion.</li></ol>   "


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




function addElementsToScene(){

 addTable();
 addDisks();
 addSand();
}


function addDisks(){

	//var geo1 = new THREE.CylinderGeometry( 1, 1, 5, 8 );

var bitmap=document.createElement('canvas');
var g=bitmap.getContext('2d');

bitmap.width=500;
bitmap.height=2000;

g.fillStyle='#5c5c3d';
g.fillRect(0,0,bitmap.width,bitmap.height);

g.fillStyle = '#ffffff';
g.font = 'Bold 300px Arial';
g.fillText('10',100,900);
g.fillText('kg',100,1400);

var texture = new THREE.Texture(bitmap);
	texture.needsUpdate=true;


var geo1=new THREE.PlaneGeometry( 2, 5 );
var edges = new THREE.EdgesGeometry( geo1 );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color:0x5c5c3d } ) );
    

 disk1 = new THREE.Mesh(geo1 , new THREE.MeshBasicMaterial({map:texture}));	
disk1.add(line);


	disk1.position.set(-30,0,0);
	PIEaddElement(disk1);

var bitmap1=document.createElement('canvas');
var g1=bitmap1.getContext('2d');

bitmap1.width=500;
bitmap1.height=2000;

g1.fillStyle='#5c5c3d';
g1.fillRect(0,0,bitmap1.width,bitmap1.height);

g1.fillStyle = '#ffffff';
g1.font = 'Bold 300px Arial';
	
g1.fillText('30',90,900);
g1.fillText('kg',90,1400);

var texture1 = new THREE.Texture(bitmap1);
	texture1.needsUpdate=true;	

	//var geo2 = new THREE.CylinderGeometry(2,2,9,8);
	var geo2= new THREE.PlaneGeometry( 4 , 9);
	 disk2= new THREE.Mesh(geo2 , new THREE.MeshBasicMaterial({map:texture1}));

	 var edges = new THREE.EdgesGeometry( geo2 );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
	disk2.position.set(-50,0,0);
	disk2.add(line);
	PIEaddElement(disk2);

var bitmap3=document.createElement('canvas');
var g3=bitmap3.getContext('2d');

bitmap3.width=500;
bitmap3.height=2000;

g3.fillStyle='#5c5c3d';
g3.fillRect(0,0,bitmap3.width,bitmap3.height);

g3.fillStyle = '#ffffff';
g3.font = 'Bold 300px Arial';

g3.fillText('20',90,900);
g3.fillText('kg',90,1400);

var texture3 = new THREE.Texture(bitmap3);
	texture3.needsUpdate=true;	

  //  var geo3 = new THREE.CylinderGeometry(1.5,1.5,8 , 8);
  var geo3 = new THREE.CubeGeometry(3,8);

var edges = new THREE.EdgesGeometry( geo3 );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    disk3= new THREE.Mesh(geo3 , new THREE.MeshBasicMaterial({map:texture3}));
    disk3.add(line);
    disk3.position.set(-40,0,0);
    PIEaddElement(disk3);     


	PIEdragElement(disk1);
     PIEdragElement(disk2);
    PIEdragElement(disk3);


	PIEsetDrag(disk1,diskdrag1);
	PIEsetDrag(disk2,diskdrag2);
    PIEsetDrag(disk3,diskdrag3);

}

function diskdrag1(element , newpos){


    disk1on=false;

    disk1.position.set(newpos.x,newpos.y,newpos.z);

    disk1xr=newpos.x + 1;
    disk1xl=newpos.x - 1;

    disk1yu = newpos.y + 2.5;
    disk1yd= newpos.y -2.5;

    if(disk1xr<=20 && disk1xl>=-20 && disk1yu<=-10 && disk1yd>=-30 ) 
        {  disk1.position.set(-30,0,0); } 

 //document.addEventListener('mouseup',diskmouseup);

    if(disk1xr>=-5 && disk1xr<=5 && disk1yd<=1 && disk1yd>=-1 && tableorientation==0 && disk3on==false && disk2on==false)
        { disk1on=true;disk1.position.set(0,2.5+1,0);   }

    if(disk1xr>=-1.5 && disk1xr<=1.5 && disk1yd>=5 && disk1yd<=9 && tableorientation==0 && disk3on==true && disk2on==false)
    	{disk1on=true; disk1.position.set(0,11.5,0);	}

if(disk1xr>=-1.5 && disk1xr<=1.5 && disk1yd>=-5 && disk1yd<=-5+4 && tableorientation==1 && disk3on==true && disk2on==false)
	{disk1on=true; disk1.position.set(0,-1+2.5,0);}	

    if(disk1xr>=-1.5 &&  disk1xr<=1.5 && disk1yd>=14 && disk1yd<=18 && tableorientation==0 && disk2on==true && disk3on==true)
	{disk1on=true; disk1.position.set(0,20.5,0);}

  if(disk1xr>=-1.5 &&  disk1xr<=1.5 && disk1yd>=4 && disk1yd<=8 && tableorientation==1 && disk2on==true && disk3on==true)
  {
  	disk1on=true; disk1.position.set(0,10.5,0);
  }

	if(disk1xr>=-2 && disk1xr<=2 && disk1yd>=5.5 && disk1yd<=10 && tableorientation==0  && disk2on==true && disk3on==false)
		{disk1on=true; disk1.position.set(0,12.5,0)};

	if(disk1xr>=-2 && disk1xr<=2 && disk1yd>=-4.5 && disk1yd<=0 && tableorientation==1  && disk2on==true && disk3on==false)
	{disk1on=true ; disk1.position.set(0,2.5,0);}	

    if(disk1xl>=-5 && disk1xl<=5 && disk1yd<=1 && disk1yd>=-1 && tableorientation==0 )
        {disk1on=true;disk1.position.set(0,2.5+1,0);  }

if(disk1xr>=-5 && disk1xr<=5 && disk1yd<=-9 && disk1yd>=-11 && tableorientation==1)
        {disk1on=true;disk1.position.set(0,-6.5,0); }

if(disk1xr>=-5 && disk1xr<=5 && disk1yd<=-9 && disk1yd>=-11 && tableorientation==1)
        {disk1on=true;disk1.position.set(0,-6.5,0); }


}

/*function diskmouseup(event){
  disk1on=false;
  disk2on=false;
  disk3on=false;

if(tableorientation==0)
{
  if(disk1.position.x==0 && disk1.position.y==3.5 && disk1.position.z==0)
      {disk1on=true; PIEstartAnimation(); }

    if(disk2.position.x==0 && disk2.position.y==5.5 && disk2.position.z==0)
        {disk2on=true; PIEstartAnimation(); }

      if(disk3.position.x==0 && disk3.position.y==5 && disk3.position.z==0)
        {disk3on=true; PIEstartAnimation(); }
}
else{
    if(disk1.position.x==0 && disk1.position.y==-6.5 &&disk1.position.z==0)
        {disk1on=true; PIEstartAnimation(); }

      if(disk2.position.x==0 && disk2.position.y==-4.5 && disk2.position.z==0)
        {disk2on=true; PIEstartAnimation(); }

      if(disk3.position.x==0 && disk3.position.y==-5 && disk3.position.z==0)
        {disk3on=true; PIEstartAnimation(); }
}


}*/

function diskdrag2(element , newpos){

    disk2on=false;

    disk2.position.set(newpos.x,newpos.y,newpos.z);
   //  document.addEventListener('mouseup',diskmouseup);

    disk2xr = newpos.x + 2;
    disk2xl = newpos.x  - 2;

    disk2yu = newpos.y + 4.5;
    disk2yd= newpos.y - 4.5;

   if(disk2xr<=20 && disk2xl>=-20 && disk2yu<=-10 && disk2yd>=-30 ) 
           { disk2.position.set(-50,0,0);}

        if(disk2xr>=-5 && disk2xr<=5 && disk2yd<=1 && disk2yd>=-1 && tableorientation==0)
       { disk2on=true;disk2.position.set(0,4.5+1,0); }

    if(disk2xl>=-5 && disk2xl<=5 && disk2yd<=1 && disk2yd>=-1 && tableorientation==0)
        {disk2on=true;disk2.position.set(0,4.5+1,0); }


   if(disk2xr>=-5 && disk2xr<=5 && disk2yd<=-9 && disk2yd>=-11 && tableorientation==1)
        {disk2on=true;disk2.position.set(0,-4.5,0); }


   if(disk2xl>=-5 && disk2xl<=5 && disk2yd<=-9 && disk2yd>=-11 && tableorientation==1)
        {disk2.position.set(0,-4.5,0); disk2on=true;}

    

}


function diskdrag3(element,newpos){

disk3on=false;

disk3.position.set(newpos.x , newpos.y , newpos.z)

// document.addEventListener('mouseup',diskmouseup);


disk3xr=newpos.x + 1.5;
disk3xl= newpos.x - 1.5;

disk3yu = newpos.y + 4;
disk3yd = newpos.y -4;

if(disk3xr<=20 && disk3xl>=-20 && disk3yu<=-10 && disk3yd>=-30 ) 
         { disk3.position.set(-40,0,0);}

 if(disk3xr>=-5 && disk3xr<=5 && disk3yd<=1 && disk3yd>=-1 && tableorientation==0 && disk2on==false)
    {	
    	disk3.position.set(0,4+1,0);
    	 disk3on=true; 
     }

  if(disk3xr>=-2 && disk3xr<=2 && disk3yd<=10 && disk3yd>=5.5 && tableorientation==0 && disk2on==true)
    {	
    	disk3.position.set(0,14,0);
    	disk3on=true;

    }

 if(disk3xr>=-2 && disk3xr<=2 && disk3yd<=-4.5+4.5 && disk3yd>=-4.5 && tableorientation==1 && disk2on==true)
{
		disk3on=true; disk3.position.set(0,4,0);
}

 if(disk3xl>=-5 && disk3xl<=5 && disk3yd<=1 && disk3yd>=-1 && tableorientation==0 && disk1on==false && disk2on==false)
    { disk3.position.set(0,4+1,0); disk3on=true;    }

  if(disk3xr>=-5 && disk3xr<=5 && disk3yd<=-9 && disk3yd>=-11 && tableorientation==1 && disk1on==false && disk2on==false)
    {  disk3.position.set(0,-5,0); disk3on=true;   }

    if(disk3xl>=-5 && disk3xl<=5 && disk3yd<=-9 && disk3yd>=-11 && tableorientation==1 && disk1on==false && disk2on==false)
        {disk3.position.set(0,-5,0) ; disk3on=true;   }
}



function addSand(){

    var sandgeom = new THREE.CubeGeometry(20,15,20);
     sand=new THREE.Mesh(sandgeom , new THREE.MeshBasicMaterial({color:0xffff4d }));
    sand.position.y-=7.5;

    sand.position.y-=11;  

var edges = new THREE.EdgesGeometry( sandgeom );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    sand.add(line);
    PIEaddElement(sand);
   

   var topplane= new THREE.PlaneBufferGeometry(20,20);
    tops=new THREE.Mesh(topplane, new THREE.MeshBasicMaterial({color:0xffff4d})  );
    tops.rotation.x=-Math.PI/2;
    tops.position.y-=11;
     var topedges=new THREE.EdgesGeometry(topplane);
      var topline = new THREE.LineSegments( topedges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
      tops.add(topline);
    PIEaddElement(tops);


     var bottomplane= new THREE.PlaneBufferGeometry(20,20);
    bottoms=new THREE.Mesh(bottomplane, new THREE.MeshBasicMaterial({color:0xffff4d})  );
    bottoms.rotation.x=-Math.PI/2;
    bottoms.position.y-=26;
    PIEaddElement(bottoms);
   
    var backplane= new THREE.PlaneBufferGeometry(20,15);
    backs=new THREE.Mesh(backplane, new THREE.MeshBasicMaterial({color:0xffff4d})  );
    backs.position.y-=18.5;
    backs.position.z-=10;
    PIEaddElement(backs);


     var leftplane= new THREE.PlaneBufferGeometry(20,15);
    lefts=new THREE.Mesh(leftplane, new THREE.MeshBasicMaterial({color:0xffff4d})  );
    lefts.rotation.y= Math.PI/2;
    lefts.position.y-=18.5;
    lefts.position.x-=10;
    PIEaddElement(lefts);


 var rightplane= new THREE.PlaneBufferGeometry(20,15);
    rights=new THREE.Mesh(rightplane, new THREE.MeshBasicMaterial({color:0xffff4d})  );
    rights.rotation.y= -Math.PI/2;
    rights.position.y-=18.5;
    rights.position.x+=10;
    PIEaddElement(rights);

    var lines1geo= new THREE.Geometry();
    lines1geo.vertices.push(new THREE.Vector3(-10,-11,10) , new THREE.Vector3(-10,-26,10) );
    var lines1 = new THREE.Line(lines1geo ,  new THREE.LineBasicMaterial({color:0x000000}));
    PIEaddElement(lines1);  

 var lines2geo= new THREE.Geometry();
    lines2geo.vertices.push(new THREE.Vector3(10,-11,10) , new THREE.Vector3(10,-26,10) );
    var lines2 = new THREE.Line(lines2geo ,  new THREE.LineBasicMaterial({color:0x000000}));
    PIEaddElement(lines2);  



}

function addTable(){
 
var tableGeom = new THREE.CubeGeometry( 10, 2, 10, 4, 4, 1 );
     tableTop =  new THREE.Mesh( tableGeom,new THREE.MeshBasicMaterial({color: 0x663300}));
    PIEaddElement(tableTop);



    var edges = new THREE.EdgesGeometry( tableGeom );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableTop.add(line);

    var tablelegGeom = new THREE.CubeGeometry( 2, 10, 2, 4, 4, 1 );
    var tableleg =  new THREE.Mesh( tablelegGeom,new THREE.MeshBasicMaterial({color: 0x663300}));
    tableleg.position.set(-4,-6,4);
    
    var edges2 = new THREE.EdgesGeometry( tablelegGeom );
    var line2 = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableleg.add(line2);
    tableTop.add(tableleg);  

   
    var tablelegGeom2 = new THREE.CubeGeometry( 2, 10, 2, 4, 4, 1 );
    var tableleg2 =  new THREE.Mesh( tablelegGeom2,new THREE.MeshBasicMaterial({color: 0x663300}));
    tableleg2.position.set(4,-6,4);
    
    var edges3 = new THREE.EdgesGeometry( tablelegGeom2 );
    var line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableleg2.add(line3);
    tableTop.add(tableleg2); 


    var tablelegGeom3 = new THREE.CubeGeometry( 2, 10, 2, 4, 4, 1 );
    var tableleg3 =  new THREE.Mesh( tablelegGeom3,new THREE.MeshBasicMaterial({color: 0x663300}));
    tableleg3.position.set(-3.5,-6,-4);
    
    var edges4 = new THREE.EdgesGeometry( tablelegGeom3 );
    var line4 = new THREE.LineSegments( edges4, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableleg3.add(line4);
    tableTop.add(tableleg3);


    var tablelegGeom4 = new THREE.CubeGeometry( 2, 10, 2, 4, 4, 1 );
    var tableleg4 =  new THREE.Mesh( tablelegGeom4,new THREE.MeshBasicMaterial({color: 0x663300}));
    tableleg4.position.set(3.5,-6,-4);
    
    var edges5 = new THREE.EdgesGeometry( tablelegGeom4 );
    var line5 = new THREE.LineSegments( edges5, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    
    tableleg4.add(line5);
    tableTop.add(tableleg4);    

  
}



function checkErect(){

resetExperiment();

    if(tableorientation==1)
    {
        tableTop.rotateZ(Math.PI);
        tableTop.position.y+=10;


    }

    PIEchangeInputCheckbox("Upside-Down",false);
    PIEchangeInputCheckbox("Erect",true);

    tableorientation=0;
    PIErender();

}

function checkUpsideDown(){
	resetExperiment();
  
    if(tableorientation==0)
    {
        tableTop.rotateZ(Math.PI);
        tableTop.position.y-=10;
    }

    PIEchangeInputCheckbox("Erect",false);
    PIEchangeInputCheckbox("Upside-Down",true);

    tableorientation=1;
    
    PIErender();
}





function loadExperimentElements()
{
	PIEsetExperimentTitle("Stool in the sand");
    PIEsetDeveloperName("Ravi Kachhadiya");

    initialiseHelp();
    initialiseInfo();

    initialiseScene();



    var backgroundgeo = new THREE.CubeGeometry(200,200,0.5,4,4,1);
    var background = new THREE.Mesh(backgroundgeo ,  new THREE.MeshBasicMaterial({color:0xccffb3}));
    background.position.z-=50   ;

    PIEaddElement(background);


    addElementsToScene();

     PIEaddInputCheckbox("Erect", true, checkErect);
    PIEaddInputCheckbox("Upside-Down", false, checkUpsideDown);



    PIEcreateTable("Observation Table" , 7 , 3 , true);
    var headerRow=["Weight of the block  ." , "   Depression when Erect   ." , "   Depression when upside down"];
    PIEupdateTableRow(0, headerRow);
    PIEupdateTableCell(1,0,"10 kg");
    PIEupdateTableCell(2,0,"20 kg");
    PIEupdateTableCell(3,0,"30 kg");
    PIEupdateTableCell(4,0,"40 kg");
    PIEupdateTableCell(5,0,"50 kg");
    PIEupdateTableCell(6,0,"60 kg");

    PIEupdateTableCell(1,1,'-');
    PIEupdateTableCell(1,2,'-');
    PIEupdateTableCell(2,1,'-');
    PIEupdateTableCell(2,2,'-');
    PIEupdateTableCell(3,1,'-');
    PIEupdateTableCell(3,2,'-');
    PIEupdateTableCell(4,1,'-');
    PIEupdateTableCell(4,2,'-');
    PIEupdateTableCell(5,1,'-');
    PIEupdateTableCell(5,2,'-');
    PIEupdateTableCell(6,1,'-');
    PIEupdateTableCell(6,2,'-');


var bitmap=document.createElement('canvas');
var g=bitmap.getContext('2d');
bitmap.width=500;
bitmap.height=2000;
g.fillStyle = '#ffffff';
  g.fillRect(0,0,bitmap.width,bitmap.height);
  g.font = 'Bold 60px Arial';
  g.fillStyle = '#000000';
  g.fillText('0',200,2000);
  g.fillText('1',200,1920);
  g.fillText('2',200,1830);
  g.fillText('3',200,1730);
  g.fillText('4',200,1630);
  g.fillText('5',200,1525);
  g.fillText('6',200,1425);
  g.fillText('7',200,1325);
  g.fillText('8',200,1220);
  g.fillText('9',200,1120);
  g.fillText('10',200,1020);
  g.fillText('11',200,920);
  g.fillText('12',200,825);
  g.fillText('13',200,725);
  g.fillText('14',200,625);
  g.fillText('15',200,525);
  g.fillText('16',200,425);
  g.fillText('17',200,325);
  g.fillText('18',200,225);
  g.fillText('19',200,125);
  g.fillText('20',200,35);





 var  texture = new THREE.Texture(bitmap);
  texture.needsUpdate = true;



var scalegeometry= new THREE.BoxGeometry(5,20,0,0.001);
var scalematerial = new THREE.MeshBasicMaterial({ map:texture });
 scale = new THREE.Mesh(scalegeometry,scalematerial);


PIEaddElement(scale);



 var centerlinegeo= new THREE.Geometry();
    centerlinegeo.vertices.push(new THREE.Vector3(17.5,0,0) , new THREE.Vector3(18.5,0,0) , new THREE.Vector3(18,0,0));
     centerline = new THREE.Line(centerlinegeo , new THREE.MeshBasicMaterial({color:0x000000}));
    scale.add(centerline);
    centerline.position.x-=20;
    centerline.position.z+=0.1;
   
var i,upperline,lowerline;
for( i=1;i<=10;i++)
{
  var upperlinegeo=new THREE.Geometry();
  upperlinegeo.vertices.push(new THREE.Vector3(17.5,0,0) , new THREE.Vector3(18.5,0,0));
   upperline = new THREE.Line(upperlinegeo, new THREE.MeshBasicMaterial({color:0x000000}));
  upperline.position.y=i;
  scale.add(upperline);
 


  var lowerlinegeo=new THREE.Geometry();
  lowerlinegeo.vertices.push(new THREE.Vector3(17.5,0,0) , new THREE.Vector3(18.5,0,0));
   lowerline = new THREE.Line(lowerlinegeo, new THREE.MeshBasicMaterial({color:0x000000}));
lowerline.position.y=-i;
scale.add(lowerline);


upperline.position.z=0.1;
lowerline.position.z=0.1;
lowerline.position.x-=20;
upperline.position.x-=20;

}

var i, smallupperline, smalllowerline;
for(i=1;i<=50;i++){
var smallupperlinegeo=new THREE.Geometry();
smallupperlinegeo.vertices.push(new THREE.Vector3(17.5,0,0) , new THREE.Vector3(17.9,0,0) );
smallupperline=new THREE.Line(smallupperlinegeo , new THREE.MeshBasicMaterial({color:0x000000}));
smallupperline.position.y=i*0.2;
scale.add(smallupperline);


var smalllowerlinegeo= new THREE.Geometry();
smalllowerlinegeo.vertices.push( new THREE.Vector3(17.5,0,0) , new THREE.Vector3(17.9,0,0));
smalllowerline= new THREE.Line(smalllowerlinegeo , new THREE.MeshBasicMaterial({color:0x000000}));
smalllowerline.position.y= - i*0.2;
scale.add(smalllowerline);

smalllowerline.position.z=0.1;
smalllowerline.position.x-=20;
smallupperline.position.z = 0.1;
smallupperline.position.x -= 20;

}

scale.position.x=+5+2.5;
scale.position.y-=1;
scale.position.z=5;
PIEdragElement(scale);




PIEsetAreaOfInterest(mySceneTLX , mySceneTLY + 7, mySceneBRX , mySceneBRY);

var bp= document.createElement('canvas');
var h=bp.getContext('2d');
bp.width=2000;
bp.height=1000;
h.fillStyle='#ffffff';
h.fillRect(0,0,bp.width,bp.height);
h.font='Bold 60px Arial';

h.fillStyle='#000000';
h.fillText('Note',900,50);


h.fillText('Drag the weight block to the table.',50,200);
h.fillText('You can stack multiple weights on each other .',50,300 );
h.fillText('Make sure to stack only lower weight on higher weight and not the',50,400);
h.fillText('other way round .',50,500);
h.fillText('Press the start button only after you put the weights.',50,600);
h.fillText('Observe the depression amount both in table as well as scale.',50,700);
h.fillText('You can change the orientation of table if you wish so.',50,800);
h.fillText('Some values of weights in table are not apparent weight but',50,900);
h.fillText('resulting combination of sum of weights.',50,1000);

var text= new THREE.Texture(bp);
text.needsUpdate=true;

var geoc=new THREE.PlaneGeometry(35,20);
var content= new THREE.Mesh(geoc,new THREE.MeshBasicMaterial({map:text}));
	
content.position.x+=30;
PIEaddElement(content);	

}

      

function updateExperimentElements(t,dt)
{

	//console.log('hello');
	amtdepression=0;

    if(tableorientation==1)
    {

            factordepression=16/100;

    }
    else factordepression=1;

   if(disk1on==true && disk2on==false && disk3on==false)
   {
   	amtdepression=weightdisk1*DEPRESSION_CONST*factordepression;
   	if(tableorientation==0) PIEupdateTableCell(1,1,amtdepression);
   	else PIEupdateTableCell(1,2,amtdepression);

   }
   else if(disk1on==false && disk2on==true && disk3on==false)
   {

   	amtdepression=weightdisk2*DEPRESSION_CONST*factordepression;
   		if(tableorientation==0) PIEupdateTableCell(3,1,amtdepression);
   	else PIEupdateTableCell(3,2,amtdepression);

   }
   else if(disk1on==false && disk2on==false && disk3on==true)
   {

   	amtdepression=weightdisk3*DEPRESSION_CONST*factordepression;
   		if(tableorientation==0) PIEupdateTableCell(2,1,amtdepression);
   	else PIEupdateTableCell(2,2,amtdepression);
   }
   else if(disk1on==false && disk2on==true && disk3on==true )
   {
   		amtdepression=(weightdisk3+weightdisk2)*DEPRESSION_CONST*factordepression;
   			if(tableorientation==0) PIEupdateTableCell(5,1,amtdepression);
   	else PIEupdateTableCell(5,2,amtdepression);
   }
   else if(disk1on==true && disk2on==false && disk3on==true )
   {
   		amtdepression=(weightdisk1 + weightdisk3)*DEPRESSION_CONST*factordepression;
   			if(tableorientation==0) PIEupdateTableCell(3,1,amtdepression);
   	else PIEupdateTableCell(3,2,amtdepression);
   }
   else if(disk1on==true && disk2on==true && disk3on==false)
   {

   	amtdepression=(weightdisk1+weightdisk2)*DEPRESSION_CONST*factordepression;
   		if(tableorientation==0) PIEupdateTableCell(4,1,amtdepression);
   	else PIEupdateTableCell(4,2,amtdepression);
   }
   else if(disk1on==true && disk2on==true && disk3on==true)
   {
   	amtdepression=(weightdisk3+weightdisk2+weightdisk1)*DEPRESSION_CONST*factordepression;
   		if(tableorientation==0) PIEupdateTableCell(6,1,amtdepression);
   	else PIEupdateTableCell(6,2,amtdepression);
   }

if(tableTop.position.y>-amtdepression && tableorientation==0)
{
scale.position.y-=amtdepression/100; 
tableTop.position.y-=amtdepression/100;
}

if(tableorientation==1 && tableTop.position.y>-10- amtdepression)
{

scale.position.y-=amtdepression/100; 
tableTop.position.y-=amtdepression/100;
}


    if(disk1on==true){

  if(tableorientation==0 && tableTop.position.y>-amtdepression)
      {  disk1.position.y-=amtdepression/100;   sand.visible=false;  }

    if(tableorientation==1 && tableTop.position.y>-10- amtdepression)
     {  disk1.position.y-= amtdepression/100;  sand.visible=false; }



   }

    if(disk2on==true)
   {
   // amtdepression=weightdisk2*DEPRESSION_CONST*factordepression;

 if(tableorientation==0 && tableTop.position.y>-amtdepression)
      { disk2.position.y-=amtdepression/100;  sand.visible=false;  }

    if(tableorientation==1 && tableTop.position.y>-10- amtdepression)
     {  disk2.position.y-= amtdepression/100;  sand.visible=false; }


   }
    if(disk3on==true)

   {
        //amtdepression= weightdisk3*DEPRESSION_CONST*factordepression;

         if(tableorientation==0 && tableTop.position.y>-amtdepression)
      { disk3.position.y-=amtdepression/100; sand.visible=false;  }

    if(tableorientation==1 && tableTop.position.y>-10- amtdepression)
     {  disk3.position.y-= amtdepression/100; sand.visible=false; }


}
}

function resetExperiment(){



    if(tableorientation==1)
        tableTop.rotateZ(Math.PI);  

    tableTop.position.set(0,0,0);
    disk1.position.set(-30,0,0);
    disk2.position.set(-50,0,0);
    disk3.position.set(-40,0,0);

    disk1on=false;
    disk2on=false;
    disk3on=false;

    PIEchangeInputCheckbox("Upside-Down",false);
    PIEchangeInputCheckbox("Erect",true);


    tableorientation=0;
    maxweight=0;
    sand.visible=true;
    amtdepression=0;
    currweight=0;
    factordepression=1;
    scale.position.set(7.5,-1,5);

    PIEupdateTableCell(1,1,'-');
    PIEupdateTableCell(1,2,'-');
    PIEupdateTableCell(2,1,'-');
    PIEupdateTableCell(2,2,'-');
    PIEupdateTableCell(3,1,'-');
    PIEupdateTableCell(3,2,'-');
    PIEupdateTableCell(4,1,'-');
    PIEupdateTableCell(4,2,'-');
    PIEupdateTableCell(5,1,'-');
    PIEupdateTableCell(5,2,'-');
    PIEupdateTableCell(6,1,'-');
    PIEupdateTableCell(6,2,'-');



}
