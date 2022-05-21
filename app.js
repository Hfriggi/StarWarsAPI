let button = document.querySelector('#button1')
let name = document.querySelector('#planet')

document.getElementById('button1').onclick = function(){
    var planetId = document.getElementById('planetData').value;
    axios.get('https://swapi.dev/api/planets').then(function(response){
        updateInfo(response.data.results)
        console.log(planetId)
    })
    
    function updateInfo(data) {
        planet.innerText = data[planetId].name
    }
}
