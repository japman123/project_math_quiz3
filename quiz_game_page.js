function send() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    actual_answer = parseInt(num1) * parseInt(num2);
    question_number = "<h4>" + num1 + " X " + num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
question_turn = "in1";
answer_turn = "in2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "in1")
        {
            update_in1_score = in1_score +1;
            document.getElementById("in1_score").innerHTML = update_in1_score;
        }
        else
        {
            update_in2_score = in1_score +1;
            document.getElementById("in2_score").innerHTML = update_in2_score;
        }
    }
}
if(question_turn == "in1")
{
    question_turn = "player2"
    document.getElementById("qTurn").innerHTML = "Question Turn - " + player2_name;
}
else
{
    question_turn = "player1"
    document.getElementById("qTurn").innerHTML = "Question Turn - " + player1_name;
}