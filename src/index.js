function displayPost(response) {
  let postElement = document.querySelector("#post");
  new Typewriter(postElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePost(event) {
  event.preventDefault();
  let user_input = document.querySelector("#search-input");

  let apiKey = "bafoe10ec41e43fbd136804atbea3503";
  let prompt = `Write a LinkedIn post. Here is the content idea: ${user_input.value}. Keep it clear, engaging and long with atleast 250-300 words with a blend of bold and italic fonts and you may even increse the count of words ifthe topic requires more explanation or the user wants to elaborate more. Include a powerful opening line and a soft call to action. Please stick to the instructions provided. Include eye-catching emojis and also hashtags at the end we add in linkedin posts.`;
  let context =
    "You are a professional LinkedIn post generator assitant, who helps generate meaningful, engaging posts for people having all levels of experience - new to the connecting community, not having much connections or followers as well as those who are shining high on the platform with large number of followers. Please ensure the posts fit the expectation of a general user and follows the same style of most professional posts, although shift the tone if the user asks to do so.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let postElement = document.querySelector("#post");
  postElement.classList.remove("hidden");
  postElement.innerHTML =
    '<div class="generating">Generating your post...⌛</div>';

  axios.get(apiURL).then(displayPost);
}

let postformElement = document.querySelector("#post-generator-form");
postformElement.addEventListener("submit", generatePost);
