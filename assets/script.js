let toggle = document.querySelector("#checkbox");

toggle.addEventListener("change", function () {
  if (toggle.checked == true) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    console.log("on");
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    console.log("off");
  }
});
