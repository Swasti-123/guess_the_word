function LogIn(){
    p1=document.getElementById("input1").value;
    p2=document.getElementById("input2").value;
    localStorage.setItem("P1",p1);
    localStorage.setItem("P2",p2);
    window.location="game_page.html";
}
