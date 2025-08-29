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

document.getElementById('learnMoreBtn').addEventListener('click', function() {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
        }

function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }

function ValidateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false;
    } else {
        alert("Thank you " + name + " , your message has been sent successfully!");
        return true;
    }
}
        