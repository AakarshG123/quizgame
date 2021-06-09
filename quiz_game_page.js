player1_name = localStorage.getItem("mathlete1")
player2_name = localStorage.getItem("mathlete2")

mathlete1_score = 0
mathlete2_score = 0

document.getElementById("player_1").innerHTML = player1_name + " : "
document.getElementById("player_2").innerHTML = player2_name + " : "
document.getElementById("mathlete1_score").innerHTML = player1_score
document.getElementById("mathlete22_score").innerHTML = player2_score
document.getElementById("player_question").innerHTML = "Question turn - " + player1_name
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name