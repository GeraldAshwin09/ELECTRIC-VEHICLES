var ima12=["https://teslamotorsclub.com/tmc/media/tesla-t.68716/full","https://upload.wikimedia.org/wikipedia/en/thumb/9/90/BuildYourDreams.svg/1200px-BuildYourDreams.svg.png","https://www.carlogos.org/logo/Volkswagen-logo-2015-1920x1080.png"];
var evs=["TESLA", "BYD", "VOLKSWAGEN"];
var i=0;
function change(){
i++;
var num=3;
if (i>2)
{
    i=0;
}

      
    var updtima12=ima12[i];
    var updtevs=evs[i];
    document.getElementById("poll").innerHTML=updtevs;
    document.getElementById("a").src=updtima12;
   
  }   
  
