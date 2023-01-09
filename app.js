function get_data(){
    // console.log("Hi")
    var x=document.getElementById("input1").value
    if(x===""){
        alert("Enter city name")
    }
    var url="https://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=6ccf9cb1b24923cf2a1c5b66a9ef74d8&units=metric"
    // console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data['cod']==='404'){
            alert("City not found")
        }
        else{
        var y=data['main']['temp']
        var z=data['weather']['0']['icon']
        var icon_url = "https://openweathermap.org/img/wn/"+z+"@2x.png"
        document.getElementById("result").innerHTML=
        `<img src=`+icon_url+`>`+`<br>`+`<h3>Temperature is: `+y+` &deg;C</h3>`
        
        }
    });
}