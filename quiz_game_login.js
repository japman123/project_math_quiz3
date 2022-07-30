function addUser() {
   user_name = document.getElementById("p1").value;
   user_name = document.getElementById("p2").value;
   localStorage.setItem("user_name", user_name)
   window.location = "quiz_game_page.html"
}