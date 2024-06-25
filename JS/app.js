const endDate ="01 January 2025 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    

     //convert into days
    inputs[0].value = (Math.floor(diff / 3600 / 24));
   
     //convert into hours
     inputs[1].value = (Math.floor(diff / 3600 ) % 24);

    //covert into min
    inputs[2].value = (Math.floor(diff / 60 ) % 60);

    //conver into sec
    inputs[3].value =  (Math.floor(diff )%60 );
}

//initial call
clock()

/*
1day = 24hrs
1hrs = 60min
60 min = 3600 sec

*/

setInterval(
    () => {
        clock()
    },
    1000
)