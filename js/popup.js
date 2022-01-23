const saveButton = document.getElementById("saveBtn");

const saveFile = () => {
  const fileName = document.getElementById("fileName");
  const email = document.getElementById("email-username");
  const password = document.getElementById("password");
  const extra = document.getElementById("extra");

  let data =
    `File Name: ${fileName.value} \n` +
    `Email/Username: ${email.value} \n` +
    `Password: ${password.value} \n` +
    `Extra: ${extra.value} \n`;

  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = `${fileName.value}.txt`;

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};

saveButton.addEventListener("click", saveFile);
