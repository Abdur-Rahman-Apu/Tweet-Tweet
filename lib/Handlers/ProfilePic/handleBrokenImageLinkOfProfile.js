// This handler function will be called when image url failed to load
export default function handleBrokenImageLinkOfProfile(e) {
  e.target.src = "./assets/images/unknown-avatar.jpeg";
  e.onerror = null;
}
