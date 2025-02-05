document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("junior-farmer-form");
  const welcomeMessage = document.getElementById("welcome-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const date = new Date(formData.get("visit-date")).toLocaleDateString();

    welcomeMessage.textContent = `Welcome ${name} to The Next Door Farmers' adventure. We are eager to have you with us on ${date}. Farm on!!! OooooooW YEA!`;
    form.reset();
  });
});
s;
