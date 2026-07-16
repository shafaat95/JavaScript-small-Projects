const endDate = "11 July 2026 07:00 PM";
document.querySelector("#end-date").innerText = endDate;
const input = document.querySelectorAll("input")


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;
    const totalSeconds = Math.floor(diff/1000);

    // Convert into days
    const days = Math.floor(totalSeconds / 86400);
    // Convert into hours 
    const hours = Math.floor(totalSeconds / 3600) % 24;
    // Convert into minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;
    // Convert into seconds
    const seconds = totalSeconds % 60;

    if(totalSeconds < 0) return;

    input[0].value = String(days).padStart(2, '0');
    input[1].value = String(hours).padStart(2, '0');
    input[2].value = String(minutes).padStart(2, '0');
    input[3].value = String(seconds).padStart(2, '0');
}
// initial call
clock()

setInterval( () => {
    clock();
},1000);



/* 
    1 day = 24 hrs -> 1 day = 86400 sec
    1 hr = 60 mins -> 1 hr = 3600 sec
    60 mins = 3600 sec

*/