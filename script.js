//your JS code here. If required.
function currentTime(){
    let date  = new Date()
    let hours = date.getHours() 
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let amPM

    if(hours>12){ 
         hours = hours - 12
         amPM = "PM"
    }
    else if(hours==0){
       hours = 12
       amPM = "AM"
    }
    else if(hours<12){
       amPM = "AM"
    }
    else if(hours==12){
        amPM = "PM"
    }
   
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    let day = date.getDay()
    let month = date.getMonth() 
    let year = date.getFullYear()


   
    clockSection.innerHTML = month+"/"+day+"/"+year + " " + hours+":"+minutes+":"+seconds+" "+amPM

}

setInterval(currentTime, 1000) // 1sec = 1000ms