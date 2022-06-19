const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((item) => {
  item.addEventListener("click", (e) => {
    const answer = document.querySelector(`.answer-${item.dataset.tab}`);
    answer.classList.toggle("active");
  });
});
