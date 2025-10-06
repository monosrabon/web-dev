// Add button click animation
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("You clicked on " + button.parentElement.querySelector("h2").innerText);
  });
});
