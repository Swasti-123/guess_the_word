p1=localStorage.getItem("P1");
p2=localStorage.getItem("P2");

p1_score=0;
p2_score=0;

document.getElementById("p1_name").innerHTML=p1+" : ";
document.getElementById("p2_name").innerHTML=p2+" : ";

document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;


document.getElementById("p_q").innerHTML="Question Turn: " + p1;
document.getElementById("p_a").innerHTML="Guessing Turn: " + p2;

function send(){
   get_word=document.getElementById("word").value;
   document.getElementById("word").value="";

   word=get_word.toLowerCase();
   console.log(word);

   char1=word.charAt(1);
   console.log(char1);
   char2=word.charAt(Math.floor(word.length/2));
   console.log(char2);
   char3=word.charAt(word.length-2);
   console.log(char3);

   replace_1=word.replaceAll(char1, "_");
   replace_2=replace_1.replaceAll(char2, "_");
   replace_3=replace_2.replaceAll(char3, "_");
   console.log(replace_3);

   question_word="<h4 id='hint'> Q. " + replace_3 + " </h4>";
   input= "<br> Answer : <input type='text' id='input_c'>";
   check_btn="<br> <br> <button class='btn btn-info' onclick='check()'> CHECK ANS </button>"
   row= question_word + input + check_btn;

   document.getElementById("output").innerHTML=row;
}
q_player="P1";
a_player="P2";
function check(){
   ans=document.getElementById("input_c").value;
   ans=ans.toLowerCase();
   console.log(ans);
   if(ans==word){
      if(a_player=="P1"){
         p1_score=p1_score+1;
         document.getElementById("p1_score").innerHTML=p1_score;
      }
      else{
         p2_score=p2_score+1;
         document.getElementById("p2_score").innerHTML=p2_score;   
      }
   }
   if(a_player=="P1"){ 
      document.getElementById("p_q").innerHTML="Question Turn: " + p1;
      document.getElementById("p_a").innerHTML="Guessing Turn: " + p2;
      q_player="P1";
      a_player="P2";
   }
   else{ 
      document.getElementById("p_q").innerHTML="Question Turn: " + p2;
      document.getElementById("p_a").innerHTML="Guessing Turn: " + p1;
      a_player="P1";
      q_player="P2";

   }
   document.getElementById("output").innerHTML="";
}
