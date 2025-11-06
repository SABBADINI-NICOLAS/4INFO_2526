function login(){
    let user = prompt("come ti chiami?") || alert("canceled");
    user == null || user  == 'Admin' || alert("i don't know you");
    user == 'Admin' && (password = prompt("password"));
    user == null || password == null || password == "Agnell1no" || alert("wrong password");
    password == "Agnell1no" && alert("welcome");
}