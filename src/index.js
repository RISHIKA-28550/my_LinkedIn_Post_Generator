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
    Write a LinkedIn post based on the following idea: ${user_input.value}
      
    Keep the tone clear and engaging. Structure the text using short paragraphs and strategic line breaks for easy reading. Follow LinkedIn formatting best practices, including the use of bold/italic, emojis, and hashtags. Start with a strong hook and close with a soft call to action.
      
    Make the post between 200-250 words unless the content needs elaboration.
      
    Make it suitable for posting directly on LinkedIn.
      `;

  let context = `
    You are a professional LinkedIn post-writing assistant.
        
    Your goal is to generate clear, engaging, and well-structured LinkedIn posts based on the user's content idea. Always follow these guidelines:
        
    - Use a professional yet relatable tone (unless specified otherwise).
    - Write 200-250 words by default, but you may increase the length if the topic requires elaboration or if the user requests it.
    - Structure the post with short paragraphs and intentional line breaks to improve readability.
    - Add a **strong opening hook** to capture attention.
    - End with a soft **call to action**.
    - Use eye-catching **emojis** where appropriate (but don't overdo it).
    - Include **relevant hashtags** at the end (3-7 tags max).
    - You can use *italic* and **bold** text (markdown-style) for emphasis, but keep formatting elegant and not excessive.
    - Ensure the post feels natural and similar to successful, professional LinkedIn posts.
    - Adapt tone, formality, or length only if the user asks.
        
    Stick closely to the user's instructions and generate a result suitable for direct posting on LinkedIn.
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
