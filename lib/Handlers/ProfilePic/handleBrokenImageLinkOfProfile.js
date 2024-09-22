export default function handleBrokenImageLinkOfProfile(e) {
  e.target.src = "./assets/images/unknown-avatar.jpeg";
  e.onerror = null;
}
