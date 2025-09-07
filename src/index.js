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

  let topicInput = document.querySelector("#user-topic");
  let apiKey = "68a00b103e53ctc365f3574aeo9c2492";
  let context =
    "You are an expert at writing nature poems for children. Your mission is to generate a 4 line in basic HTML and separate each line with a <br />. Do not include a title to the poem. Please sign the bottom of the poem 'SheCodes AI'. Make sure to follow user instructions.";
  let prompt = `User instructions: Generate a poem about ${topicInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = "Generating a poem for you. 📝";

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
