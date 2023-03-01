const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  const arrowIcon = question.querySelector(".arrow-icon");

  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const allAnswers = document.querySelectorAll(".faq-answer");

    allAnswers.forEach((item) => {
      if (item !== answer) {
        item.style.display = "none";
      }
    });

    if (answer.style.display === "block") {
      answer.style.display = "none";
      arrowIcon.style.transform = "rotate(-90deg)";
    } else {
      answer.style.display = "block";
      arrowIcon.style.transform = "rotate(0deg)";
    }
  });
});

const buyButton1 = document.getElementById("buy-first-btn");
const itemsSection1 = document.getElementById("buy-items-one");

buyButton1.addEventListener("click", () => {
  itemsSection1.scrollIntoView({ behavior: "smooth" });
});

const buyButton2 = document.getElementById("buy-second-btn");
const itemsSection2 = document.getElementById("buy-items-two");

buyButton2.addEventListener("click", () => {
  itemsSection2.scrollIntoView({ behavior: "smooth" });
});
