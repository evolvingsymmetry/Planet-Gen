function GetValue()
{
    var planetname= new Array("Koclayliv","Oswetania","Mocleron","Atrov","Keoter","Fiolia","Grosebos","Smeutune","Shion VC","Strolla K",);
    var techlevel= new Array("TL0", "TL1", "TL2", "TL3", "TL4", "TL5", "TL6");
    var planetsize= new Array("Asteroid Belt","Asteroid","Tiny","Small","Meso","Macro","Big","Gas Giant","Double","Doughnut","Mobile","Ring","Rogue",);
    var atmosphere= new Array("Vacuum","Very Thin","Thin","Standard","Dense","Corrosive","Toxic","Insideous",);


    var planetname_button = planetname[Math.floor(Math.random() * planetname.length)];
    var techlevel_button = techlevel[Math.floor(Math.random() * techlevel.length)];
    var planetsize_button = planetsize[Math.floor(Math.random() * planetsize.length)];
    var atmosphere_button = atmosphere[Math.floor(Math.random() * atmosphere.length)];


    document.getElementById("planet").innerHTML=planetname_button;
    document.getElementById("techlevel").innerHTML=techlevel_button;
    document.getElementById("planetsize").innerHTML=planetsize_button;
    document.getElementById("atmosphere").innerHTML=atmosphere_button;
}
