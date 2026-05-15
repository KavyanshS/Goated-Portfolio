
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


const audio = document.getElementById("bgMusic");
const btn = document.getElementById("music-btn");

const iconNote = document.getElementById("icon-note");
const iconMute = document.getElementById("icon-mute");

let playing = false;

btn.addEventListener("click", () => {

  if (!playing) {

    audio.play();

    playing = true;

    btn.classList.add("playing");

    iconNote.style.display = "none";
    iconMute.style.display = "block";

  } else {

    audio.pause();

    playing = false;

    btn.classList.remove("playing");

    iconNote.style.display = "block";
    iconMute.style.display = "none";
  }

});


const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry, i) => {

    if (entry.isIntersecting) {

      setTimeout(() => {
        entry.target.classList.add("visible");
      }, i * 80);

      observer.unobserve(entry.target);
    }

  });

}, { threshold: 0.1 });

faders.forEach(el => observer.observe(el));