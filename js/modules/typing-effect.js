const words = ["Kamil", "Frontend Developerem"];
const typingWordsElement = document.getElementById("typing-words");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseAfterWord = 1500;

export function typingWords() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
    typingWordsElement.textContent = currentWord.substring(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typingWords, 300);
      return;
    }

    setTimeout(typingWords, deletingSpeed);
  } else {
    charIndex++;
    typingWordsElement.textContent = currentWord.substring(0, charIndex);

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typingWords, pauseAfterWord);
      return;
    }

    setTimeout(typingWords, typingSpeed);
  }
}
