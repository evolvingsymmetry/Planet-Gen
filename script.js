var asteroidtag= new Array("Asteroid");
var planetname= new Array("Koclayliv","Oswetania","Mocleron","Atrov","Keoter","Fiolia","Grosebos","Smeutune","Shion VC","Strolla K",);
var techlevel= new Array("TL0", "TL1", "TL2", "TL3", "TL4", "TL5", "TL6");
var planetsize= new Array("Asteroid","Tiny");
var atmosphere= new Array("Vacuum - The atmosphere has a pressure of less than 0.001 atmospheres, which requires the use of a vacc suit.","Very Thin - Very thin requires a respirator. The atmosphere has a pressure of 0.1 to 0.42 atmospheres, which requires the use of a respirator to ensure sufficient oxygen.","Thin - The atmosphere has a pressure of 0 43 to 0.70 atmospheres. The atmosphere is a standard oxygen/nitrogen mix, which is breathable without assistance.","Standard - The atmosphere is a standard oxygen/nitrogen mix, which is breathable without assistance.","Dense - The atmosphere is a standard oxygen/nitrogen mix, which is breathable without assistance.","Corrosive - A concentrated gas mix or unusual temperature creates a corrosive environment, which requires the use of a Hostile environment suit or vacc suit.","Toxic - A concentrated gas mix or unusual temperature creates a toxic environment, which requires the use of a Hostile environment suit or vacc suit.","Insideous - The atmosphere is similar to a corrosive atmosphere, but extreme conditions cause the corrosive effects to defeat any protective measures in 2 to 12 hours.",);
var characteristics= new Array("Asteroid","Barren","Cold","Desert","Destroyed","Fluid","Frozen","Garden","Hell","Hospitable","Hot","Ice","Inferno","Inner","Inhospitable","Locked","Ocean","Outer","Rad","Storm","Temperate","Tropical","Tundra","Twilight Zone","Vacuum","Water","Dry","Deep Water","Extreme Depths","Clouds","Forest","Hills","High Altitude","Marsh","Urban","Gas",);


function arrSearch(arrName) {
  return arrName[Math.floor(Math.random() * arrName.length)];
}

function randomEl(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}

function techLevel(){
  document.getElementById("techlevel").innerHTML = arrSearch(techlevel);
}

function planetName(){
  document.getElementById("planet").innerHTML = arrSearch(planetname);
}

function planetSize(){
  document.getElementById("planetsize").innerHTML = arrSearch(planetsize);

}

function getRandomCharacteristic(){

    var planetsizeChoice = document.getElementById('planetsize').innerHTML;
    console.log(planetsizeChoice);

    if(planetsizeChoice == "Asteroid") {
        document.getElementById("characteristics").innerHTML = randomEl(characteristics);
    }
}