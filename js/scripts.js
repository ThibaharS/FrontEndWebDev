<!-- Returns Hello as a pop up box-->
<!-- alert("Hello!"); -->

<!-- Loads hello within console log -->
<!-- console.log("Hello!"); -->


const hello = document.getElementById("Hello");



<!--Function -->


function greeting() {
  console.log("Hello!");
  alert("Hello!");
}

hello.addEventListener("click", greeting);
