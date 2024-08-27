let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

let passwordone = {
    string:"",
    count: 0
}

let passwordtwo = {
    string:"",
    count: 0
}


const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function generateRandomDigit() {
        let randomDigitOne = Math.floor(Math.random() * characters.length)
    let randomDigitTwo = Math.floor(Math.random() * characters.length) 
    console.log(characters[randomDigitOne])
    console.log(characters[randomDigitTwo])
    console.log("I'm generating random number(s)")
    passwordone.string += characters[randomDigitOne]
    passwordtwo.string += characters[randomDigitTwo]
    console.log(passwordone.string)
    console.log(passwordtwo.string)
    console.log("I am generating random characters")
    passwordOne.textContent = passwordone.string
    passwordTwo.textContent = passwordtwo.string
}

function generatePw() {
    passwordone.string = " "
    passwordtwo.string = " "
    passwordone.count = 0
    passwordtwo.count = 0
    for (i=0; i < 15; i ++) {
        console.log("This tells random number function how many randoms to make")
        generateRandomDigit()
    }
}

console.log(passwordone.count)
console.log(passwordtwo.count)


function copytext() {
    const content = document.getElementById("password-one").textContent;
    navigator.clipboard.writeText(content)
    alert("Copied the text: " + content)
}

function copytextTwo() {
    const content = document.getElementById("password-two").textContent;
    navigator.clipboard.writeText(content)
    alert("Copied the text: " + content)
}

///step one - generate random number * characters.length - done
///step two - translate this into a character - done
///step three - loop the first two steps x 15 times - done
///step four - generate the 15 digit/letter string.textContent - done!

///step five - repeat this process for passwordTwo
///step six - repeated creating random number 15 times for passwordTwo; but realised that the passwords came out with 28 digits instead of 14.
///step seven - realised that the for loop applies to both passwords because I declared two separate variables to generate random numbers.
///step eight - reset object variables to zero / null outside the for loop so it doesn't affect the generating-15-random-characters-loop.

///step nine - copied and pasted code from W3 school on how to copy on click - this did not work
///step ten - googled another solution from Medium.com. Fixed it!!!! I did it!!!
