function adduser(){
    
    var user_name = document.getElementById("user_name").value;
    var user_password = document.getElementById("user_password").value;

    localStorage.setItem("user_na", user_name);
    localStorage.setItem("user_pass", user_password);


    window.location = "kwitter_room.html";
    window.alert("done")
}