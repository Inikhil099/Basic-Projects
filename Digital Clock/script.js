let show = document.getElementById("show");
let button = document.querySelector(".start");
let reset = document.querySelector(".reset");


button.addEventListener("click", () => {
  const myIn = setInterval(() => {
    let date = new Date().toLocaleTimeString();
    show.innerHTML = date;
    reset.addEventListener("click", () => {
        clearInterval(myIn);
        show.innerHTML = ""
      });
  }, 1000);
});

// reset.addEventListener("click", () => {
//   clearInterval(myIn);
// });
