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
  let prompt = `Generate a poem about ${topicInput}`;
  let context =
    "You are an expert at writing poems. Your mission is to generate a 4 line poem from user input '${topicInput}'. The subject of the poem will come from '${topicInput}' Please sign the bottom 'SheCodes AI'. Please use HTML to format the poem, example: <p></p>.";

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = "Generating a poem for you. 📝";

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
