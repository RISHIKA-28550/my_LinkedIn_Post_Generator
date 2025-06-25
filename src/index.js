function generatePost(event) {
  event.preventDefault();

  new Typewriter("#post", {
    strings: "Hello",
    autoStart: true,
    delay: 20,
    cursor:""
  });
}

let postformElement = document.querySelector("#post-generator-form");
postformElement.addEventListener("submit", generatePost);
