// dark/light mode toggle //
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// date and time display //
function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    const timeString = now.toLocaleTimeString();
    document.getElementById('date-time').innerHTML = dateString + ' ' + timeString;
}
setInterval(updateTime, 1000);
updateTime();