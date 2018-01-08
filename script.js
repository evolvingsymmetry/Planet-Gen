var asteroidtag= new Array("Asteroid");
var planetname= new Array("Koclayliv","Oswetania","Mocleron","Atrov","Keoter","Fiolia","Grosebos","Smeutune","Shion VC","Strolla K",);
var techlevel= new Array("TL0", "TL1", "TL2", "TL3", "TL4", "TL5", "TL6");
var planetsize= new Array("Asteroid", "Planet");


function arrSearch(arrName) {
  return arrName[Math.floor(Math.random() * arrName.length)];
}

function randomEl(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}

function techLevel(){document.getElementById("techlevel").innerHTML = arrSearch(techlevel);}
function planetName(){document.getElementById("planet").innerHTML = arrSearch(planetname);}
function planetSize(){document.getElementById("planetsize").innerHTML = arrSearch(planetsize);}
function planetTag(){document.getElementById("planettag").innerHTML = arrSearch(tags);}

function getRandomCharacteristic(){

    var planetsizeChoice = document.getElementById('planetsize').innerHTML;

    //Asteroid
    if(planetsizeChoice == "Asteroid") {document.getElementById("characteristic").innerHTML = randomEl(asteroids_Char);}
    if(planetsizeChoice == "Asteroid") {document.getElementById("atmosphere").innerHTML = randomEl(asteroids_Atmo);}
    if(planetsizeChoice == "Asteroid") {document.getElementById("biosphere").innerHTML = randomEl(asteroids_Bios);}
    if(planetsizeChoice == "Asteroid") {document.getElementById("population").innerHTML = randomEl(asteroids_Popu);}

    //Planet
    if(planetsizeChoice == "Planet") {document.getElementById("characteristic").innerHTML = randomEl(planet_Char);}
    if(planetsizeChoice == "Planet") {document.getElementById("atmosphere").innerHTML = randomEl(planet_Atmo);}
    if(planetsizeChoice == "Planet") {document.getElementById("biosphere").innerHTML = randomEl(planet_Bios);}
    if(planetsizeChoice == "Planet") {document.getElementById("population").innerHTML = randomEl(planet_Popu);}


}




