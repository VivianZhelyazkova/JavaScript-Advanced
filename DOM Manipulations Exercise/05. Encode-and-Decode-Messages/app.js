function encodeAndDecodeMessages() {
  const [encode, decode] = Array.from(document.querySelectorAll("button"));
  encode.addEventListener("click", (e) => {
    const message = e.target.parentElement.querySelector("textarea");
    const encodedMessage = [...message.value].map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join("");
    decode.parentElement.querySelector("textarea").value = encodedMessage;
    message.value = ""
  });
  decode.addEventListener("click", (e) => {
    const message = e.target.parentElement.querySelector("textarea");
    const decodedMessage = [...message.value].map((char) => String.fromCharCode(char.charCodeAt(0) - 1)).join("");
    message.value = decodedMessage
  });
}
