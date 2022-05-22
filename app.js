document.getElementById('button1').onclick = function(){
    var planetId = document.getElementById('planetData').value;
    var planetId2 = document.getElementById('planetData2').value;
    var urlPlanet1 = 'https://swapi.dev/api/planets/' + planetId;
    var urlPlanet2 = 'https://swapi.dev/api/planets/' + planetId2;
    $.getJSON(urlPlanet1, function(planetData)
    {
        $.getJSON(urlPlanet2, function(planetData2)
        {
            console.log(planetData.name)
            console.log(planetData2.name)
            planet.innerText = planetData.name
            planet2.innerText = planetData2.name
        })
    });

    var pilotId = document.getElementById('pilotData').value;
    var copilotId = document.getElementById('copilotData').value;
    var url = 'https://swapi.dev/api/people/' + pilotId;
    var url2 = 'https://swapi.dev/api/people/' + copilotId;
    $.getJSON(url, function(data)
        {
            $.getJSON(url2, function(data2)
            {
                console.log(data.name)
                console.log ('pilot species is:', data.species)
                console.log(data2.name)
                console.log ('copilot species is:', data2.species)
                pilot.innerText = data.name
                copilot.innerText = data2.name

                if (data.species == 'https://swapi.dev/api/species/2/')
                {
                    console.log('one of your pilots id a droid. Ready to go!')
                }
            })
        });

    var shipId = document.getElementById('shipData').value;
    var urlShip = 'https://swapi.dev/api/starships/' + shipId;
    $.getJSON(urlShip, function(dataShip)
        {
            console.log(shipId)
            shipPrint.innerText = dataShip.name
        })
}
