function displayPoem(response) {
  console.log("poem generated");

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
  let prompt = `Generate a children's nature poem about ${topicInput}`;
  let context =
    "You are a children's poem expert and love to write short poems. Your mission is to generate a 4 line poem for children. Format the poem with a HTML strucutre, example: <p></p>. Also please add a title to the poem. Make sure the subject of the poem is the user-topic. Sign the poem with 'SheCodes AI' inside of a <strong></strong> element at the end.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
