document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !subject || !message) {
    status.style.color = "red";
    status.textContent = "Please fill out all fields before submitting.";
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    status.style.color = "red";
    status.textContent = "Please enter a valid email address.";
    return;
  }

  status.style.color = "green";
  status.textContent = "Thank you! Your message has been sent successfully.";

  document.getElementById("contactForm").reset();
});
