const currentDateElement = document.getElementById("currentDate");

const currentDate = new Date();

const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

currentDateElement.textContent = formattedDate;