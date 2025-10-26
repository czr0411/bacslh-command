player.onChat("\\solar", function (plants, rau) {
    if (plants == 0) {
        space.createSolarSystem(pos(0, 0, 0), 0)
    } else if (plants == 1) {
        space.createMercury(pos(0, 0, 0), 2)
    } else if (plants == 2) {
        space.createVenus(pos(0, 0, 0), 6)
    } else if (plants == 3) {
        space.createEarth(pos(0, 0, 0), 6)
    } else if (plants == 4) {
        space.createMars(pos(0, 0, 0), 3)
    } else if (plants == 5) {
        space.createJupiter(pos(0, 0, 0), 35)
    } else if (plants == 6) {
        space.createSaturn(pos(0, 0, 0), 29)
    } else if (plants == 7) {
    	
    } else if (plants == 8) {
    	
    } else if (plants == 9) {
    	
    } else {
    	
    }
})
