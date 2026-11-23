
const chat = document.getElementById("chat");
const message = document.getElementById("message");

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "chat-message " + type;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function ask(text) {
  message.value = text;
  sendMessage();
}

async function sendMessage() {
  const text = message.value.trim();
  if (!text) return;

  const welcome = document.querySelector(".welcome");
  if (welcome) welcome.remove();

  addMessage(text, "user");
  message.value = "";

  addMessage("Ansh AI का जवाब पाने के लिए AI API जोड़ना बाकी है।", "ai");
}

document.getElementById("send").onclick = sendMessage;

message.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

document.getElementById("newChat").onclick = () => {
  chat.innerHTML = `
    <div class="welcome">
      <h1>नमस्ते! 👋</h1>
      <h2>मैं Ansh AI हूँ</h2>
      <p>आज मैं आपकी क्या मदद कर सकता हूँ?</p>
    </div>`;
};

document.getElementById("menu").onclick = () => {
  alert("Ansh AI Menu");
};
