function changeSpeed() {
  console.log("change speed");
  let attribute = document.getElementById("heart").getAttribute("class");
  if (attribute === "heart") {
    document.getElementById("heart").setAttribute("class", "heart-click");
    document.getElementById("description").innerHTML =
      "I love you!";
      document.getElementById("description").style.fontSize = '6vw';
  } else if (attribute === "heart-click") {
    document.getElementById("heart").setAttribute("class", "heart");
    document.getElementById("description").innerHTML =
      "Click on the heart to see what happens to my heart when I see you!";
      document.getElementById("description").style.fontSize = '3vw';
  }
}
