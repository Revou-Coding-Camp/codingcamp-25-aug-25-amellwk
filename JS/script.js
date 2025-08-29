console.log("Hello World");

window.onload = function() {
    greet();
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

document.querySelector('.logo-brand').style.cursor = 'pointer';
document.querySelector('.logo-brand').addEventListener('click', function() {
  document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('nav ul a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        if(targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
       
        const sidebar = document.querySelector('.sidebar');
        if(sidebar && sidebar.style.display === 'flex') {
            sidebar.style.display = 'none';
        }
    });
});

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

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === "") {
      alert("All fields are required.");
      return false;
  } else {
      alert("Thank you " + name + ", your message has been sent successfully!");
      document.querySelector('#contacts').scrollIntoView({ behavior: 'smooth' });
      this.reset();
  }
});
