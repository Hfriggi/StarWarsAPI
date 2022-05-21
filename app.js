document.getElementById('button1').onclick = function(){
    var planetId = document.getElementById('planetData').value;
    var planetId2 = document.getElementById('planetData2').value;
    axios.get('https://swapi.dev/api/planets').then(function(response){
        updateInfoPlanets(response.data.results)
        console.log(planetId)
        console.log(planetId2)
    }
    )
    var pilotId = document.getElementById('pilotData').value;
    var copilotId = document.getElementById('copilotData').value;
    axios.get('https://swapi.dev/api/people').then(function(response){
        updateInfoPilots(response.data.results)
        console.log(pilot)
        console.log(copilot)
    }
    )

    function updateInfoPlanets(data) {
        planet.innerText = data[planetId].name
        planet2.innerText = data[planetId2].name
    }

    function updateInfoPilots(data) {
        pilot.innerText = data[pilotId].name
        copilot.innerText = data[copilotId].name
    }
}
