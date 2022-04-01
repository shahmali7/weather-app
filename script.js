// get All values
const search = document.querySelector('#search')
const city  = document.querySelector('.city')
const temp  = document.querySelector('.temp')
const desc  = document.querySelector('.description')
const icon =document.querySelector(".icon")
/*get api
//fetch('https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=baccfe52b55aa6a2d67ca322856b55cb')
.then(res => res.json())
.then(data =>{
 console.log(data)
})
*/
const url ='https://api.openweathermap.org/data/2.5/weather?q='
const apiKey ='&appid=baccfe52b55aa6a2d67ca322856b55cb'


document.addEventListener("submit",(e)=>{
    //get input value
    e.preventDefault()
    var cityName = search.value;
    //console.log(cityName)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=baccfe52b55aa6a2d67ca322856b55cb&units=metric&lang=eng`,{
        method: 'GET'
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    // get information from fetch
    city.innerHTML = cityName.toUpperCase() + ',' + data.sys.country
    city.setAttribute("id","city")
    temp.innerHTML = data.main.temp + "°C"
    temp.setAttribute("id","temp")
    desc.innerHTML = data.weather[0].description
    desc.setAttribute("id","desc")
    search.value=""
})
    
})
