const correctAns=['B', 'A', 'C', 'B'];
const scor = document.querySelector('.score');
let length=correctAns.length;
const form=document.querySelector('.quiz-form');
const questions=document.querySelector('.questionss');
const newf=document.querySelector('.form1');
const close=document.querySelector('.close');
const add=document.querySelector('.add');
const done=document.querySelector('.question-add');

done.addEventListener('click', e=>{
    e.preventDefault();
    newf.style.display='none';
    let html=`<div class="question">

    <p class='text2'>${newf.newquestion.value}</p>
    
    <!--OPTION 1-->
    <div class="form-check">
        <input type="radio" name='q1' value='A' checked>
        <label class="form-check-label"> ${newf.option1.value}</label>
    </div>
    
    <!--OPTION 2-->
    <div class="form-check">
        <input type="radio" name='q1' value='B' >
        <label class="form-check-label"> ${newf.option2.value}</label>
    </div>
    
    <!--OPTION 3-->
    <div class="form-check">
        <input type="radio" name='q1' value='C' >
        <label class="form-check-label"> ${newf.option3.value}</label>
    </div>
</div>`;
    questions.innerHTML+=html;
})
add.addEventListener('click', e=>{
    newf.style.display='block';
    scor.style.display='none';

})
close.addEventListener('click', e=>{
    newf.style.display='none';
})
form.addEventListener('click', e=>{
    console.log(e.target);
})
form.addEventListener('submit', e=>{
    e.preventDefault();
    let score=0
    const userAns=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,];
    //userAns.forEach(user=>console.log(user));
    userAns.forEach((ans, index)=>{
        if(ans===correctAns[index]){
            score++
        }
    })
    let percentage=(score/length)*100;
    console.log(score, percentage);
    scor.style.display='block';
    
    scrollTo(0,0);
    //Animating the score
    
    let output=0;
    const timer=setInterval(()=>{
        scor.querySelector('.size').textContent=`${output}%`;
        if(output===percentage){
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 10)
})



