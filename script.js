function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_tv0mk79", "template_4rihmoj", parms)
    .then(alert("Form submitted successfully"));
}
