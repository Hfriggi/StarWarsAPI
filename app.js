document.getElementById('button1').onclick = function(){
    var planetId = document.getElementById('planetData').value;
    var planetId2 = document.getElementById('planetData2').value;
    var pilotId = document.getElementById('pilotData').value;
    var copilotId = document.getElementById('copilotData').value;
    var shipId = document.getElementById('shipData').value;
    var urlPlanet1 = 'https://swapi.py4e.com/api/planets/' + planetId;
    var urlPlanet2 = 'https://swapi.py4e.com/api/planets/' + planetId2;
    var urlPilot = 'https://swapi.py4e.com/api/people/' + pilotId;
    var urlCopilot = 'https://swapi.py4e.com/api/people/' + copilotId;
    var urlShip = 'https://swapi.py4e.com/api/starships/' + shipId;

    $.getJSON(urlPlanet1, function(planetData)
    {
        $.getJSON(urlPlanet2, function(planetData2)
        {
            $.getJSON(urlPilot, function(dataPilot)
            {
                $.getJSON(urlCopilot, function(dataCopilot)
                {
                    $.getJSON(dataPilot.species, function(specie1)
                    {   
                        $.getJSON(dataCopilot.species, function(specie2)
                        {                         
                            $.getJSON(urlShip, function(dataShip)
                            {
                                console.log(shipId)
                                shipPrint.innerText = dataShip.name
                                console.log(planetData.name)
                                console.log(planetData2.name)
                                planet.innerText = planetData.name
                                planet2.innerText = planetData2.name
                                console.log(dataPilot.name)
                                console.log(dataCopilot.name)
                                pilot.innerText = dataPilot.name
                                copilot.innerText = dataCopilot.name
                                console.log('pilot specie: ',specie1.name)
                                console.log('copilot specie: ',specie2.name)

                                if ((specie1.name == 'Human') && (specie2.name == 'Human'))
                                {
                                    console.log('Your crew has no droid. Travel denied!');
                                }
                                else
                                {
                                    console.log('Your crew has one droid. Travel accepted!');

                                    const travel = {
                                        originPlanet : planetData.name,
                                        destinyPlanet : planetData2.name,
                                        pilot : dataPilot.name,
                                        pilotSpecies : specie1.name,
                                        copilot : dataCopilot.name,
                                        copilotSpecies : specie2.name,
                                        ship : dataShip.name
                                    }

                                    exportName = 'travel ' + Math.random() * (100 - 0) + 100;
                                    function downloadObjectAsJson(travel, exportName){
                                        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(travel));
                                        var downloadAnchorNode = document.createElement('a');
                                        downloadAnchorNode.setAttribute("href",     dataStr);
                                        downloadAnchorNode.setAttribute("download", exportName + ".json");
                                        document.body.appendChild(downloadAnchorNode);
                                        downloadAnchorNode.click();
                                        downloadAnchorNode.remove();
                                      }

                                    downloadObjectAsJson(travel,exportName)
                                    console.log(travel)
                                }
                            });
                        })
                    });
                });
            });
        });
    });
}
