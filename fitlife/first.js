let Savebtn = document.querySelector("#savebtn");

Savebtn.addEventListener("click", () => {

    let Name = document.querySelector("#Name").value;
    let age = document.querySelector("#age").value;
    let gender = document.querySelector("#gender").value;
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let activity = document.querySelector("#activity").value;
    let goal = document.querySelector("#goal").value;


    if (!Name || !age || !gender || !height || !weight || !activity || !goal){
        alert("Please Fill All Fields");
        return;
    }

    let Userdata = {
    "username" :  Name,
    "userage"  :  age,
    "usergender" :   gender,
    "userheight" :   height,
    "userweight" :   weight,
    "useractivity" :   activity,
    "usergoal" :   goal
    };

    localStorage.setItem("username",Name);
    localStorage.setItem("userage",age);
    localStorage.setItem("usergender",gender);
    localStorage.setItem("userheight",height);
    localStorage.setItem("userweight",weight);
    localStorage.setItem("useractivity",activity);
    localStorage.setItem("usergoal",goal);
    localStorage.setItem("Userdata", JSON.stringify(Userdata));

    window.location.href = "dashboard.html";
});


