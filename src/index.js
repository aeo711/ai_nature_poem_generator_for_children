function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "I put on my coat/ And boots on my feet./ I put on my hat/And stroll down the street. The rain falls down/ From the clouds above. Splashing in puddles Is what I love! by Claire Louise Milne",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
