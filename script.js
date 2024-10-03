//Get to the DOM elements

const gameComainter = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//loop through each option image element

optionImages.forEach((Image,index) =>{
    Image.addEventListener("click",(e) =>{
      Image.classList.add("active");

      //loop through each option image element
       optionImages.forEach((Image2,index2)=>{

        // if the current index doesn't match the clicked index
        //Remove the "active" class from the other option images
        index !== index2 && Image2.classList.remove("active");


        //Set a timeout to delay the result calculation

        gameComainter.classList.add("start");

        let time = setTimeout(() =>{
            gameComainter.classList.remove("start");
// Get the source of the clicked option image
let imageSRC = e.target.querySelector("img").src;
//set user image to the clciked option image
userResult.src = imageSRC


//generate a random number between 0 and 2
let randomNumber = Math.floor(Math.random() * 3);
// Create an array of CPU image option
let cpuImage = ["images/rock.png","images/paper.png","images/scissors.png"];
cpuResult.src = cpuImage[randomNumber];

//Assign a letter value to the CPU option (R for Rock, P for paper, S for Scissors)
let cpuValue = ["R","P","S"][randomNumber];
let userValue = ["R","P","S"][index];

// Crate an object with all possible outcomes
let outComes = {
   RR:"Draw",
   RP: "Cpu",
   RS: "User",
   PP: "Draw",
   PR:"User",
   PS: "Cpu",
   SS: "Draw",
   SR:"Cpu",
   SP:"User"
};

// look up the outcome value based on user and CPU options
let outComeValue = outComes[userValue + cpuValue];

//Display the result
result.textContent = userValue === cpuValue ? "Match Draw" :` ${outComeValue} Won!!`

        },2500)
       })
    })
})