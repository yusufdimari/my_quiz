const correctAns = [];
const userAns = [];
const scor = document.querySelector(".score");
let length = correctAns.length;
const form = document.querySelector(".quiz-form");
const questions = document.querySelector(".questionss");
const questionsSet = [
  {
    title: "What is My Name",
    option1: "Yusuf Demir",
    option2: "Yusuf Muhammad Dimari",
    option3: "Yusuf Elnany",
    answer: "B",
  },
  {
    title: "What is My Age",
    option1: "19",
    option2: "18",
    option3: "20",
    answer: "A",
  },
  {
    title: "Education level",
    option1: "High School",
    option2: "Post Graduate",
    option3: "Undergraduate",
    answer: "C",
  },
  {
    title: "Where do i School",
    option1: "Baze University",
    option2: "Nile University",
    option3: "Abuja Univeristy",
    answer: "B",
  },
  {
    title: "What Course am i studying",
    option1: "Computer Science",
    option2: "Information Technology",
    option3: "Software Engineering",
    answer: "C",
  },
];
window.onload = function () {
  getQuestions();
};

const getQuestions = () => {
  let i;

  for (i = 0; i < questionsSet.length; i++) {
    let html = `<!--QUESTION ${i + 1}-->
                  <div class="question">
  
                      <p class='text2'>${i + 1}. ${questionsSet[i].title}</p>
                      
                      <!--OPTION 1-->
                      <div class="form-check">
                          <input type="radio" name='${i + 1}' value='A' >
                          <label class="form-check-label"> ${
                            questionsSet[i].option1
                          }</label>
                      </div>
                      
                      <!--OPTION 2-->
                      <div class="form-check">
                          <input type="radio" name='${i + 1}' value='B' >
                          <label class="form-check-label"> ${
                            questionsSet[i].option2
                          }</label>
                      </div>
                      
                      <!--OPTION 3-->
                      <div class="form-check">
                          <input type="radio" name='${i + 1}' value='C' >
                          <label class="form-check-label"> ${
                            questionsSet[i].option3
                          }</label>
                      </div>
                  </div>`;
    correctAns.push(questionsSet[i].answer);
    questions.innerHTML += html;
  }
};

form.addEventListener("click", (e) => {
  userAns[e.target.name != 0 ? e.target.name - 1 : e.target.name] =
    e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  userAns.length == correctAns.length
    ? correctAns.forEach((ans, index) => {
        ans == userAns[index] ? score++ : console.log("failed");
      })
    : window.alert("fill all options");
  let percentage = (score / correctAns.length) * 100;
  console.log(percentage);
  scor.style.display = "block";

  //scrolling to Top
  scrollTo(0, 0);
  //Animating the score

  let output = 0;
  const timer = setInterval(() => {
    scor.querySelector(".size").textContent = `${output}%`;
    if (output === percentage) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

//Upcoming Feature to Add Question

// const newf = document.querySelector(".form1");
// const close = document.querySelector(".close");
// const add = document.querySelector(".add");
// const done = document.querySelector(".question-add");

// done.addEventListener("click", (e) => {
//   e.preventDefault();
//   newf.style.display = "none";
//   let html = `<div class="question">

//     <p class='text2'>${newf.newquestion.value}</p>

//     <!--OPTION 1-->
//     <div class="form-check">
//         <input type="radio" name='q1' value='A' checked>
//         <label class="form-check-label"> ${newf.option1.value}</label>
//     </div>

//     <!--OPTION 2-->
//     <div class="form-check">
//         <input type="radio" name='q1' value='B' >
//         <label class="form-check-label"> ${newf.option2.value}</label>
//     </div>

//     <!--OPTION 3-->
//     <div class="form-check">
//         <input type="radio" name='q1' value='C' >
//         <label class="form-check-label"> ${newf.option3.value}</label>
//     </div>
// </div>`;
//   questions.innerHTML += html;
//   questions.style.display = "block";
// });
// add.addEventListener("click", (e) => {
//   newf.style.display = "block";
//   scor.style.display = "none";
//   questions.style.display = "none";
// });
// close.addEventListener("click", (e) => {
//   newf.style.display = "none";
//   questions.style.display = "block";
// });
