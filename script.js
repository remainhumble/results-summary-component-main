const reaction = document.querySelector(".reaction");

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    data = json;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

reaction.textContent = data[0].category;
