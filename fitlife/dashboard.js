let Name = localStorage.getItem("username");

document.querySelector("#username").textContent = Name? `Welcome, ${Name}`: "Welcome";