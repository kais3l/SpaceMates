let questionSet = [
    (Climate_Change = [
      {
        que: "What is the primary driver of climate change?",
        a: "Natural climate variability",
        b: "Increased greenhouse gas emissions from human activities",
        c: "Solar radiation fluctuations",
        d: "Volcanic eruptions",
        ans: "b",
    },
    {
        que: "How does climate change primarily lead to droughts?",
        a: "By increasing rainfall in all regions",
        b: "By reducing the ability of the air to hold moisture",
        c: "By raising temperatures, leading to more evaporation",
        d: "By creating more snow",
        ans: "c",
    },
    {
        que: "What effect do altered weather patterns from climate change have on rainfall?",
        a: "They guarantee consistent rainfall",
        b: "They can lead to some regions receiving less rainfall",
        c: "They prevent droughts completely",
        d: "They make all areas wetter",
        ans: "b",
    },
    {
        que: "Which factor increases the risk of wildfires due to climate change?",
        a: "Increased humidity",
        b: "Higher vegetation density",
        c: "Extended warm periods and drought",
        d: "Shorter winters",
        ans: "c",
    },
    {
        que: "How can wildfires contribute to climate change?",
        a: "By absorbing carbon dioxide",
        b: "By releasing large amounts of CO2 into the atmosphere",
        c: "By cooling the atmosphere",
        d: "By improving air quality",
        ans: "b",
    }
      
    ]),
    (drought = [
      {
        que: "What is the primary definition of drought?",
        a: "An area receiving excessive rainfall",
        b: "An area getting much less rain than usual, causing water shortages",
        c: "A sudden increase in water levels",
        d: "A temporary weather phenomenon",
        ans: "b",
    },
    {
        que: "How does drought contribute to wildfires?",
        a: "By creating wetter conditions",
        b: "By producing more vegetation",
        c: "By drying out plants, making them more flammable",
        d: "By reducing the number of storms",
        ans: "c",
    },
    {
        que: "What impact does drought have on air quality?",
        a: "It improves air quality",
        b: "It reduces dust and pollutants",
        c: "It increases wildfires, which release smoke into the air",
        d: "It has no effect on air quality",
        ans: "c",
    },
    {
        que: "How does drought affect biodiversity?",
        a: "It increases the variety of species",
        b: "It has no impact on biodiversity",
        c: "It leads to water shortages that can kill off vulnerable species",
        d: "It promotes plant growth",
        ans: "c",
    },
    {
        que: "In what way does drought contribute to climate change?",
        a: "By increasing plant growth that absorbs CO₂",
        b: "By releasing CO₂ through drought-induced wildfires",
        c: "By cooling the atmosphere",
        d: "By improving soil moisture",
        ans: "b",
    }
    
    ]),
    (wildfire = [
      {
        que: "What is the primary definition of a wildfire?",
        a: "A controlled burn for agricultural purposes",
        b: "An uncontrolled fire that spreads quickly across dry areas",
        c: "A fire that only occurs in urban settings",
        d: "A fire started solely by human activities",
        ans: "b",
    },
    {
        que: "How do wildfires affect air quality?",
        a: "They have no impact on air quality",
        b: "They improve air quality by releasing oxygen",
        c: "They release smoke and pollutants that make it harder to breathe",
        d: "They only affect local air quality",
        ans: "c",
    },
    {
        que: "What is one significant impact of wildfires on ecosystems?",
        a: "They always promote biodiversity",
        b: "They destroy habitats and force animals to flee",
        c: "They enhance the growth of new species immediately",
        d: "They have no effect on animal populations",
        ans: "b",
    },
    {
        que: "How do wildfires contribute to climate change?",
        a: "By absorbing CO₂ and cooling the atmosphere",
        b: "By releasing large amounts of carbon dioxide into the atmosphere",
        c: "By increasing the number of trees that absorb CO₂",
        d: "By reducing temperatures in affected areas",
        ans: "b",
    },
    {
        que: "What is a long-range effect of wildfire smoke?",
        a: "It stays only within the fire area",
        b: "It can travel hundreds of miles, affecting distant air quality",
        c: "It dissipates quickly and has no long-term effects",
        d: "It only affects areas directly adjacent to the fire",
        ans: "b",
    }
    
    
    ]),
    (airquality = [
      {
        que: "What does air quality refer to?",
        a: "The amount of oxygen in the air",
        b: "The cleanliness or pollution level of the air",
        c: "The temperature of the atmosphere",
        d: "The humidity levels in a region",
        ans: "b",
    },
    {
        que: "How does poor air quality harm plants?",
        a: "It increases their growth rate",
        b: "It damages their leaves and reduces growth",
        c: "It provides essential nutrients",
        d: "It has no effect on plant health",
        ans: "b",
    },
    {
        que: "What is one way air quality can affect climate change?",
        a: "By increasing rainfall",
        b: "By trapping heat in the atmosphere through greenhouse gases",
        c: "By cooling the Earth's surface",
        d: "By promoting biodiversity",
        ans: "b",
    },
    {
        que: "How does poor air quality increase wildfire risk?",
        a: "By increasing humidity levels",
        b: "By leading to drier conditions and less rainfall",
        c: "By reducing the number of plants",
        d: "By cooling the environment",
        ans: "b",
    },
    {
        que: "What effect do wildfires have on air quality?",
        a: "They improve air quality by releasing oxygen",
        b: "They release smoke and harmful particles, worsening air quality",
        c: "They have no significant impact on air quality",
        d: "They eliminate pollutants from the atmosphere",
        ans: "b",
    }
    
    ]),
    (ecosystem = [
      {
        que: "What is the definition of an ecosystem?",
        a: "A single species interacting with its environment",
        b: "A community of living things interacting with each other and their environment",
        c: "A physical environment without living organisms",
        d: "An area with only plants and no animals",
        ans: "b",
    },
    {
        que: "How do healthy ecosystems contribute to air quality?",
        a: "By releasing carbon dioxide",
        b: "By absorbing pollutants and carbon dioxide",
        c: "By increasing dust levels",
        d: "By providing habitat for pollution",
        ans: "b",
    },
    {
        que: "What effect does the destruction of ecosystems have on climate change?",
        a: "It increases the absorption of CO₂",
        b: "It decreases the release of greenhouse gases",
        c: "It reduces the number of natural CO₂ absorbers, speeding up climate change",
        d: "It has no effect on climate change",
        ans: "c",
    },
    {
        que: "In what way can ecosystems influence droughts?",
        a: "Healthy ecosystems prevent water from being stored in the soil",
        b: "Ecosystems have no effect on droughts",
        c: "Healthy ecosystems help retain water in the soil, reducing drought severity",
        d: "Ecosystems only contribute to rain formation",
        ans: "c",
    },
    {
        que: "How do dry ecosystems contribute to the spread of wildfires?",
        a: "They absorb more water",
        b: "They provide fuel in the form of dry vegetation",
        c: "They prevent fires from starting",
        d: "They reduce the intensity of wildfires",
        ans: "b",
    }
    
    ]),
  ];
  
  let userName = document.querySelector("#userName").value;
  const submit = document.querySelector("#submitBtn");
  
  let index = 0;
  let subset = 0;
  let total = questionSet.length;
  let right = 0;
  let timmer = 10;
  let wrong = 0;
  let questionCount = 1;
  let questionCategory = [];
  let PlayerName = [];
  let score=0;
  
  //our project start from here submit button.check the category selection and input field are filled well. after submit button click. the selction category call..
  submit.addEventListener("click", () => {
    userName = document.querySelector("#userName").value;
    if (userName == "") {
      alert("please fill the blank");
    } else {
      selectionCategory();
    }
  });
  
  //before starting quize we confirm that our question Category and input field are fill..
  function selectionCategory() {
    alert("please select the category");
    let Category = document.querySelectorAll(".categoryOption");
    Category.forEach((cate) => {
      cate.addEventListener("click", function (data) {
        let quesCategory = data.target.id;
        questionCategory.push(quesCategory);
        console.log(questionCategory);
        start();
      });
    });
  }
  
  //here we collect playerName in array via push mathod and call for question load.and with question load we will start countdwon
  function start() {
    let userName = document.querySelector("#userName").value;
    let arry = PlayerName.push(userName);
    console.log(PlayerName);
    PlayerName = "";
    getQuestion();
  }
  
  //here i face one problem due to scop issue..
  //i take setInterval in a variable.but when i call this coutdwon on nextquestion that time i can't clear this time out..due to this parallel countDwon function running seperatly.
  function countDwonStater() {
    const startTimer = setInterval(function () {
    counter=document.querySelector("#countDwon");
    counter.innerText=timmer;
      if (timmer == 0) {
        clearInterval(startTimer);
        timmer = 10;
      }
      timmer--;
      return;
    }, 1000);
  }
  
  // question is depend on question category.i predefine the index of arrya before it load
  function getQuestion() {
    if (questionCategory == "Climate_Change") {
      index += 0;
    } else if (questionCategory == "drought") {
      index += 1;
    } else if (questionCategory == "wildfire") {
      index += 2;
    } else if (questionCategory == "airquality") {
      index += 3;
    }else{
      questionCategory == "ecosystem";
    }
    loadQuestion();
  }
  
  
  
  
  //here i done another mistake i'll take mainContent Hardcore.it is working but whole HTMl code written here.
  function loadQuestion() {
    countDwonStater();
    QuestionData = questionSet[index][subset];
    displayQuestion = document.querySelector(".questionBox");
    document.querySelector(".mainContainer").innerHTML = `
    <div class="quizeBody">
      <div class="quizeContainer">
        
        <div class="header">
        <h3 id="questionCategory">Question Category is "${questionCategory}"</h3>
        <div class="scoreTime">
          <div class="time">
            <label for="" id="countDwon"></label>
          </div>
          <div class="score">
            <label for="">Score: ${score} </label>
          </div>
        </div>
       
        <div class="questionContainer">
          <div class="questionCount">
            <h3>${questionCount}/${questionSet[index].length}</h3>
          </div>
          <div class="questionText">
            <h2 id='questionBox'>${QuestionData.que}</h2>
          </div>
        </div>
        <div class="answerContainer">
          <button id="a" class="options">${QuestionData.a}</button>
          <button id="b" class="options">${QuestionData.b}</button>
          <button id="c" class="options">${QuestionData.c}</button>
          <button id="d" class="options">${QuestionData.d}</button>
        </div>
        <button id="nextQuestion" onClick="nextQue()">Next Question</button>
      </div>
     </div>
      
    </div>
    `;
  
  
    // this code is use for selection of Answer.and updating score.
   let answerData = document.querySelectorAll(".options");
    answerData.forEach((dataBtn) => {
      dataBtn.addEventListener("click", (dataBtn) => {
        console.log(dataBtn.target.id);
        if(QuestionData.ans==dataBtn.target.id){
              console.log("congratulation");
              score++;
              right++;
        dataBtn.target.style.backgroundColor='green';
        }else{
          wrong++;
            dataBtn.target.style.backgroundColor='red';
            answerData.disabled='true'
        }
  
      });
    });
  return;
  }
  
  
  
  function ResultPage() {
    let scorePercentage=eval(`${questionSet[index].length}*${score}%${100}`);
    document.querySelector(".mainContainer").innerHTML = `
          <div class="resultContainer3rd">
            <h2 class="resultHeading3rdPage">Quiz Result</h2>
            <h2 class="resultHeading4-3rdPage">${userName}:<h2>your result is</h2></h2>
            <h2 class="resultHeading4-3rdPage">Total time taken:110 second</h2>
            <h2 class="resultHeading4-3rdPage">total Question:${questionSet[index].length}</h2>
             <h2 class="resultHeading4-3rdPage">Attempt:10</h2>
            <h2 class="resultHeading4-3rdPage">Correct:${right}</h2>
             <h2 class="resultHeading4-3rdPage">Wrong:${wrong}</h2>
             <h2 class="resultHeading4-3rdPage">percentage:${scorePercentage}%</h2>
         <div class="resultPagebutton">
             <button class="resultButton-3rdPage"><a href="http://127.0.0.1:5500/index.html">Start Again</a></button>
              <button class="resultButton-3rdPage"><a href="http://127.0.0.1:5500/index.html">Home</a></button>
              
         </div>
        </div>`;}
  
  function nextQue() {
    subset++;
    questionCount++;
    //i want clear this countdwon before the function execute but due to scop issue i am able to solve this ..i will solve this bug latter.
    if (subset < questionSet[index].length) {
      loadQuestion();
    } else {
      ResultPage();
    }
  }