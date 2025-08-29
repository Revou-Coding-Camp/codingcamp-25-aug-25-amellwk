console.log("Hello World");

window.onload = function() {
    // greet();
};

function greet () {
    let user = prompt("Please enter your name:");
    document.getElementById("username").innerText = user;
    if(user){
        alert(`Hi ${user}, Welcome to Energi Hijau!`);
    } else {
        alert("Hi, Welcome to Energi Hijau!");
    }
}

function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
        }

function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }