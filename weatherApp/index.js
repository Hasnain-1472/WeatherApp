
const temperatureField = document.querySelector(".weather1")
const cityField = document.querySelector(".weather2 p")
const dateField = document.querySelector(".weather2 span")
const emojiField = document.querySelector(".weather3 img")
const searchField = document.querySelector(".searchField")
const weatherField = document.querySelector(".weather3 span")
const form = document.querySelector("form");

var target = "delhi"


// async function getMetaData(target) {
const getMetaData = async (target)=>{
try {
    const url = `https://api.weatherapi.com/v1/current.json?key=a41c5b6ee6a94b47982222223231107&q=${target}`

    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
    const { current: { temp_c, condition: { text, icon } }, location: { name, localtime },

    } = data

    updateDom(temp_c, name, icon, localtime)

} catch (error) {
    alert("area not found")
}

}

function updateDom( temp , text,emoji,time) {
    temperatureField.innerHTML = temp
    cityField.innerHTML = target
    emojiField.src = emoji
    weatherField.innerHTML = text
    const exactDate = time.split(" ")[0];
    const exactTime = time.split(" ")[1];
    const exactDay = getDayName (new Date(exactDate).getDay());
    console.log(exactDate,"date")
    console.log(exactTime,"time")
    console.log(exactDay,"day")
    dateField.innerText = `${exactTime} - ${exactDay}  ${exactDate}`
   
}
getMetaData(target);

const getDayName = (num)=>{
switch (num) {
    case 0:
        return "Sunday"
    case 1:
        return "Monday"
    case 2:
        return "tuesday"
        case 3: 
        return "Wednesday"
        case 4:
           return "Thursday"
        case 5:
           return "Friday"
        case 6:
           return "Saturday"
   
    default:
        return
}
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    target = searchField.value
    console.log(target)
    getMetaData(target)
})