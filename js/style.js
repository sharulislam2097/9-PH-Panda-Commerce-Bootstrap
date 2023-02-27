//2
const h2title = document.getElementsByTagName("h2");
for (h2 of h2title) {
  h2.style.color = "lightblue";
}
//3
const bagsection = document.getElementById("backpack");
bagsection.style.backgroundColor = "tomato";
//4
cardsection = document.getElementsByClassName("card");
for (card of cardsection) {
  card.style.borderRadius = "30px";
}
//5
function test() {
  console.log("button click test");
}

//6
document
  .getElementById("exampleInputEmail1")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;

    const submitBtn = document.getElementById("btn-submit");
    if (text === "email") {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", true);
    }
  });

  //9
  const staysection=document.getElementById('stayfooter');
  staysection.addEventListener('dblclick',function(){
    
    staysection.style.backgroundColor='powderblue';
  })
