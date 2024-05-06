
let start = false;

function disappear() {
  let div = document.querySelector("#instructions");
  div.style.display = "none";
  start = true;
  console.log(start);
  let coverImage = document.querySelector("#coverIllustration");
  coverImage.addEventListener("mouseenter", (event) => {
    if (start) {
      coverImage.style.boxShadow = "0 0 0.75rem white";
    }
  });
  coverImage.addEventListener("mouseleave", (event) => {
    if (start) {
      coverImage.style.boxShadow = "none";
    }
  });
}
