let box1 = document.querySelector("#b-1")
let text1 = document.querySelector("#p-1")

let box2 = document.querySelector("#b-2")
let text2 = document.querySelector("#p-2")

let box3 = document.querySelector("#b-3")
let text3 = document.querySelector("#p-3")

let box4 = document.querySelector("#b-4")
let text4 = document.querySelector("#p-4")

let box5 = document.querySelector("#b-5")
let text5 = document.querySelector("#p-5")

let box6 = document.querySelector("#b-6")
let text6 = document.querySelector("#p-6")

let box7 = document.querySelector("#b-7")
let text7 = document.querySelector("#p-7")

let box8 = document.querySelector("#b-8")
let text8 = document.querySelector("#p-8")

let box9 = document.querySelector("#b-9")
let text9 = document.querySelector("#p-9")

let infoBox = document.querySelector(".info")
let scoreBox = document.querySelector("#one")
let scoreBox2 = document.querySelector("#two")

console.log(scoreBox,scoreBox2)

let enable1 = true
let enable2 = true
let enable3 = true
let enable4 = true
let enable5 = true
let enable6 = true
let enable7 = true
let enable8 = true
let enable9 = true
let turn = 0
let maxTurn  = 9
let xText = "X"
let oText = "O"
let xScore = 0
let oScore = 0
let gameFinished = false
let boxes = document.querySelectorAll(".box")
let texts = document.querySelectorAll(".cont")
let playAgainButton = document.querySelector(".btn")


playAgainButton.style.visibility = "hidden"


function listenForTurn(){
	box1.addEventListener("click",()=>{
		if(enable1== true){
			if(turn % 2 == 0){
				// console.log(turn%2)
				text1.textContent = xText
				enable1 = false
			}
			else{
				
				text1.textContent = oText
				enable1 = false
			}
			turn++;
			box1.style.backgroundColor = "rgb(0, 27, 85)"
			text1.style.color = "white"
			resultTest()
		}
	})
	
	
	box2.addEventListener("click",()=>{
		if(enable2== true){
			if(turn % 2 == 0){
				text2.textContent = xText
				enable2 = false
			}
			else{
				
				text2.textContent = oText
				enable2 = false
			}
			turn++;
			box2.style.backgroundColor = "rgb(0, 27, 85)"
			text2.style.color = "white"
			resultTest()
		}
	})

	box3.addEventListener("click",()=>{
		if(enable3== true){
			if(turn % 2 == 0){
				text3.textContent = xText
				enable3 = false
			}
			else{
				
				text3.textContent = oText
				enable3 = false
			}
			turn++;
			box3.style.backgroundColor = "rgb(0, 27, 85)"
			text3.style.color = "white"
			resultTest()
		}
	})

	box4.addEventListener("click",()=>{
		if(enable4== true){
			if(turn % 2 == 0){
				text4.textContent = xText
				enable4 = false
			}
			else{
				
				text4.textContent = oText
				enable4 = false
			}
			turn++;
			box4.style.backgroundColor = "rgb(0, 27, 85)"
			text4.style.color = "white"
			resultTest()
		}
	})

	box5.addEventListener("click",()=>{
		if(enable5== true){
			if(turn % 2 == 0){
				text5.textContent = xText
				enable5 = false
			}
			else{
				
				text5.textContent = oText
				enable5 = false
			}
			turn++;
			box5.style.backgroundColor = "rgb(0, 27, 85)"
			text5.style.color = "white"
			resultTest()
		}
	})

	box6.addEventListener("click",()=>{
		if(enable6== true){
			if(turn % 2 == 0){
				text6.textContent = xText
				enable6 = false
			}
			else{
				
				text6.textContent = oText
				enable6 = false
			}
			turn++;
			box6.style.backgroundColor = "rgb(0, 27, 85)"
			text6.style.color = "white"
			resultTest()
		}
	})

	box7.addEventListener("click",()=>{
		if(enable7== true){
			if(turn % 2 == 0){
				text7.textContent = xText
				enable7 = false
			}
			else{
				
				text7.textContent = oText
				enable7 = false
			}
			turn++;
			box7.style.backgroundColor = "rgb(0, 27, 85)"
			text7.style.color = "white"
			resultTest()
		}
	})
	box8.addEventListener("click",()=>{
		if(enable8== true){
			if(turn % 2 == 0){
				text8.textContent = xText
				enable8 = false
			}
			else{
				
				text8.textContent = oText
				enable8 = false
			}
			turn++;
			// text8.style.backgroundColor = "rgb(0, 27, 85)"
			// text8.style.color = "white"
			resultTest()
		}
	})
	box9.addEventListener("click",()=>{
		if(enable9== true){
			if(turn % 2 == 0){
				text9.textContent = xText
				enable9 = false
			}
			else{
				
				text9.textContent = oText
				enable9 = false
			}
			turn++;
			box9.style.backgroundColor = "rgb(0, 27, 85)"
			text9.style.color = "white"
			resultTest()
		}
	})

}


function resultTest(){
		resultCheck(text1,text2,text3,box1,box2,box3)
		resultCheck(text4,text5,text6,box4,box5,box6)
		resultCheck(text7,text8,text9,box7,box8,box9)


		resultCheck(text1,text4,text7,box1,box4,box7)
		resultCheck(text2,text5,text8,box2,box5,box8)
		resultCheck(text3,text6,text9,box3,box6,box9)


		resultCheck(text1,text5,text9,box1,box5,box9)
		resultCheck(text3,text5,text7,box3,box5,box7)




		
}

function resultCheck(a,b,c,d,e,f){
	scoreBox.textContent = `X: ${xScore}`
	scoreBox2.textContent = `O: ${oScore}`
	if(a.textContent == b.textContent && b.textContent == c.textContent){
		
		if(  a.textContent != '.')
		{
			d.style.backgroundColor = "green"
			e.style.backgroundColor = "green"
			f.style.backgroundColor = "green"
			gameFinished = true
			if(a.textContent=="X"){
				xScore += 1
				turn = 1
				maxTurn = 10
			}
			if(a.textContent=="O"){
				oScore += 1
				turn = 0
				maxTurn = 10
			}
			stopGame()
		}
	}

	if(turn>=maxTurn && gameFinished == false){
		stopGame()
		turn = 0
		maxTurn = 9
	}
}


function stopGame(){
	enable1 = false
	enable2 = false
	enable3 = false
	enable4 = false
	enable5 = false
	enable6 = false
	enable7 = false
	enable8 = false
	enable9 = false
	playAgainButton.style.visibility = "visible"
}


function resetGame(){
	for(let i=0;i<texts.length;i++){
		texts[i].textContent = "."

		texts[i].style = `.cont{
			font-weight: bold;
		}
		
		.cont:hover{
			color: black;

		}`
	}

	for(let i = 0; i<boxes.length;i++){

		boxes[i].style = `.box{
			box-shadow: 3px 3px 3px black;
			transition: 0.5s ease;
			border: 1px solid rgb(41, 29, 29);
			color: white;
			background-color: rgb(0, 27, 85);
			text-align: center;
			display: grid;
			align-items: center;
			place-items: center;
		}
		
		.box:hover{
			transition: 0.5s ease;
			color: black;
			background-color: white;
			border-color: rgb(0, 17, 255);
		}
		`

		
	}


	enable1 = true
	enable2 = true
	enable3 = true
	enable4 = true
	enable5 = true
	enable6 = true
	enable7 = true
	enable8 = true
	enable9 = true
	playAgainButton.style.visibility = "visible"
	gameFinished = false



}


playAgainButton.addEventListener("click",()=>{
	resetGame()
	playAgainButton.style.visibility = "hidden"
})


listenForTurn()



