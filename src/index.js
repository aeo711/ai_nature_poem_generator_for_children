function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topicInput = document.querySelector("user-topic");
  let apiKey = "68a00b103e53ctc365f3574aeo9c2492";
  let context =
    "User instructions: You are an expert at writing poems for children. Your mission is to generate a 4 line poem for ages 4 through 12. Do not include a title. Please sign the bottom of the poem 'SheCodes AI' in bold. Please use HTML to format the poem, example: <p></p>. Make sure to follow the user instructions. ";
  let prompt = `Generate a poem about ${topicInput}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = "Generating a poem for you. 📝";

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
