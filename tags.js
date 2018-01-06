var tags = new Array("Abandoned Colony", "Alien Ruins", "Altered Humanity", "Anarchists", "Area 51", "Badlands World", "Battleground", "Beastmasters", "Bubble Cities", "Cheap Life", "Civil War", "Cold War", "Colonized Population", "Cultural Power", "Cybercommunists", "Cyborgs", "Cyclical Doom", "Desert World", "Doomed World", "Dying Race", "Euginic Cult", "Exchange Consulant", "Fallen Hegemon", "Feral World", "Flying Cities", "Forbidden Tech", "Former Warriors", "Freak Geology", "Freak Weather", "Friendly Foe", "Gold Rush", "Great Work", "Hatred", "Heavy Industry", "Heavy Mining", "Hivemind", "Holy War", "Hostile Biosphere", "Hostile Space", "Immortals", "Local Specialty", "Local Tech", "Major Spaceyard", "Mandarinate", "Mandate Base", "Maneaters", "Megacorp", "Mercenaries", "Minimal Contact", "Night World", "Nomads", "Oceanic World", "Perimeter Agency", "Pilgrimage Site", "Pleasure World", "Police State", "Post Scarcity", "Preceptor Archive", "Pretech Cultists", "Primitive Aliens", "Prison Planet", "Psionics Academy", "Psionics Fear", "Psionics Worship", "Quarentined World", "Radioactive World", "Refugees", "Regional Hegemon", "Restrictive Laws", "Revanchists", "Revolutionaries", "Rigid Culture", "Rising Hegemon", "Ritual Combat", "Robots", "Seagoing Cities", "Sealed Menace", "Secret Masters", "Sectarians", "Seismic Instability", "Shackled World", "Societal Despair", "Sole Supplier", "Taboo Treasure", "Terraform Failure", "Theocracy", "Tomb World", "Trade Hub", "Tyranny", "Unbraked AI", "Urbanized Surface", "Utopia", "Warlords", "Xenophiles", "Xenophobes", "Zombies",);



function tagdescriptions(){

	var tagChoice = document.getElementById('planettag').innerHTML;

	if(tagChoice == "Abandoned Colony") {
        document.getElementById("tagdescription").innerHTML = "The world once hosted a colony, whether human or otherwise, until some crisis or natural disaster drove the inhabitants away or killed them off. The colony might have been mercantile in nature, an expedition to extract valuable local resources, or it might have been a reclusive cabal of zealots. The remains of the colony are usually in ruins, and might still be dangerous from the aftermath of whatever destroyed it in the first place.";
    }
    if(tagChoice == "Alien Ruins") {
        document.getElementById("tagdescription").innerHTML = "The world has significant alien ruins present. The locals may or may not permit others to investigate the ruins, and may make it difficult to remove any objects of value without substantial payment. Any surviving ruins with worthwhile salvage almost certainly have some defense or hazard to explain their unplundered state.";
    }
    if(tagChoice == "Altered Humanity") {
        document.getElementById("tagdescription").innerHTML = "The humans on this world are visibly and drastically different from normal humanity. They may have additional limbs, new sensory organs, or other significant changes. Were these from ancestral eugenic manipulation, strange stellar mutations, or from an environmental toxin unique to this world?";
    }
    if(tagChoice == "Anarchists") {
        document.getElementById("tagdescription").innerHTML = "Rather than being an incidental anarchy of struggling tribes and warring factions, this world actually has a functional society with no centralized authority. Authority might be hyperlocalized to extended families, specific religious parishes, or voluntary associations. Some force is preventing an outside group or internal malcontents from coalescing into a power capable of imposing its rule on the locals; this force might be an ancient pretech defense system, a benevolent military AI, or the sheer obscurity and isolation of the culture.";
    }
    if(tagChoice == "Area 51") {
        document.getElementById("tagdescription").innerHTML = "The world's government is fully aware of their local stellar neighbors, but the common populace has no idea about it, and the government means to keep it that way. Trade with government officials in remote locations is possible, but any attempt to clue the commoners in on the truth will be met with lethal reprisals.";
    }
    if(tagChoice == "Badlands World") {
        document.getElementById("tagdescription").innerHTML = "Whatever the original climate and atmosphere type, something horrible happened to this world. Biological, chemical, or nanotechnical weaponry has reduced it to a wretched hellscape. Some local life might still be able to survive on its blasted surface, usually at some dire cost in health or humanity.";
    }
    if(tagChoice == "Battleground") {
        document.getElementById("tagdescription").innerHTML = "The world is a battleground for two or more outside powers. They may be interstellar rivals, or groups operating out of orbitals or other system bodies. Something about the planet is valuable enough for them to fight over, but the natives are too weak to be anything but animate obstacles to the fight.";
    }
    if(tagChoice == "Beastmasters") {
        document.getElementById("tagdescription").innerHTML = "The natives have extremely close bonds with the local fauna, possibly having special means of communication and control through tech or gengineering. Local animal life plays a major role in their society, indusutry, or warfare, and new kinds of beasts may be bred to suit their purposes.";
    }
    if(tagChoice == "Bubble Cities") {
        document.getElementById("tagdescription").innerHTML = "Whether due to a lack of atmosphere or an uninhabitable climate, the world's cities exist within domes or pressurized buildings. In such sealed environments, techniques of surveillance and control can grow baroque and extreme.";
    }





}

