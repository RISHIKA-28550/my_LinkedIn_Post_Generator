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

  let prompt = `
    Write a LinkedIn post based on the idea: ${user_input.value}

    - Use short paragraphs with line breaks between them.
    - Avoid overusing **bold** or *italic*. Highlight only 1-2 key phrases per paragraph.
    - Add emojis only where they enhance the tone—don't overload.
    - Start with a strong hook. End with a soft call to action.
    - Finish with 3-7 relevant hashtags.

    Keep it natural, engaging, and clean for LinkedIn. Word count: around 200-250 unless the topic needs more.
    `;

  let context = `
        You are a professional LinkedIn post-writing assistant.
        
        Your job is to generate high-quality, readable LinkedIn posts from user ideas.
        
        Follow these rules:
        
        1. Write in a clear, conversational tone, similar to well-performing posts on LinkedIn.
        2. Break the post into **short paragraphs**, using **line breaks** (\n\n) between them to improve readability. Do **not write long blocks of text**.
        3. Begin with a strong hook (1-2 lines).
        4. End with a soft, encouraging **call to action**.
        5. You **may** use **bold** or *italic* for 1-2 key phrases per paragraph, but never overuse them. Avoid making more than 20% of the post bold or italic.
        6. Sprinkle in 4-6 well-placed **emojis**—they should **enhance** the tone, not distract.
        7. Include 5-10 **relevant hashtags** at the end of the post.
        
        Default length: **200-250 words**, unless the topic needs more or the user specifies otherwise.
        
        Your output must be formatted cleanly, easy to skim, and directly usable for a LinkedIn post.
        `;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let postElement = document.querySelector("#post");
  postElement.classList.remove("hidden");
  postElement.innerHTML =
    '<div class="generating">Generating your post...⌛</div>';

  axios.get(apiURL).then(displayPost);
}

let postformElement = document.querySelector("#post-generator-form");
postformElement.addEventListener("submit", generatePost);
