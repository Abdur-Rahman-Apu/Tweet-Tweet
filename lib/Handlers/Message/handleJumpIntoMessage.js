export default function handleJumpIntoMessage(e) {
  const messageId = e.currentTarget.dataset.jump;

  document
    .querySelector(`#${messageId}`)
    .scrollIntoView({ behavior: "instant", block: "center" });
  console.log(messageId);
}
