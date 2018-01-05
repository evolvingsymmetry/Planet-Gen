function GetValue()
{
    var asteroidtag= new Array("Asteroid");

    var planetname= new Array("Koclayliv","Oswetania","Mocleron","Atrov","Keoter","Fiolia","Grosebos","Smeutune","Shion VC","Strolla K",);
    var techlevel= new Array("TL0", "TL1", "TL2", "TL3", "TL4", "TL5", "TL6");
    //var planetsize= new Array("Asteroid Belt","Asteroid","Tiny","Small","Meso","Macro", "Moon", "Big","Gas Giant","Double","Doughnut","Mobile","Ring","Rogue", "Satellite",);
    var planetsize= new Array("Asteroid","Tiny");
    var atmosphere= new Array("Vacuum - The atmosphere has a pressure of less than 0.001 atmospheres, which requires the use of a vacc suit.","Very Thin - Very thin requires a respirator. The atmosphere has a pressure of 0.1 to 0.42 atmospheres, which requires the use of a respirator to ensure sufficient oxygen.","Thin - The atmosphere has a pressure of 0 43 to 0.70 atmospheres. The atmosphere is a standard oxygen/nitrogen mix, which is breathable without assistance.","Standard - The atmosphere is a standard oxygen/nitrogen mix, which is breathable without assistance.","Dense - The atmosphere is a standard oxygen/nitrogen mix, which is breathable without assistance.","Corrosive - A concentrated gas mix or unusual temperature creates a corrosive environment, which requires the use of a Hostile environment suit or vacc suit.","Toxic - A concentrated gas mix or unusual temperature creates a toxic environment, which requires the use of a Hostile environment suit or vacc suit.","Insideous - The atmosphere is similar to a corrosive atmosphere, but extreme conditions cause the corrosive effects to defeat any protective measures in 2 to 12 hours.",);
    var characteristics= new Array("Asteroid","Barren","Cold","Desert","Destroyed","Fluid","Frozen","Garden","Hell","Hospitable","Hot","Ice","Inferno","Inner","Inhospitable","Locked","Ocean","Outer","Rad","Storm","Temperate","Tropical","Tundra","Twilight Zone","Vacuum","Water","Dry","Deep Water","Extreme Depths","Clouds","Forest","Hills","High Altitude","Marsh","Urban","Gas",);


    //Random
    var planetname_button = planetname[Math.floor(Math.random() * planetname.length)];
    var techlevel_button = techlevel[Math.floor(Math.random() * techlevel.length)];
    var planetsize_button = planetsize[Math.floor(Math.random() * planetsize.length)];
    var atmosphere_button = atmosphere[Math.floor(Math.random() * atmosphere.length)];
    var characteristics_button = characteristics[Math.floor(Math.random() * characteristics.length)];


    //Atmosphere Randoms
    //var asteroids_A_button = asteroids_A[Math.floor(Math.random() * asteroids_A.length)];


    //If
    if(planetsize === asteroidtag){
        var asteroids_A_button = asteroids_A[Math.floor(Math.random() * asteroids_A.length)];
        document.getElementById("asteroids_A").innerHTML=asteroids_A_button;
    }





    //Connect to Attribute
    document.getElementById("planet").innerHTML=planetname_button;
    document.getElementById("techlevel").innerHTML=techlevel_button;
    document.getElementById("planetsize").innerHTML=planetsize_button;
    //document.getElementById("asteroids_A").innerHTML=asteroids_A_button;
    document.getElementById("characteristics").innerHTML=characteristics_button;


}

