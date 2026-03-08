async function changeLanguage(lang){

const response = await fetch("lang/" + lang + ".json");

const data = await response.json();

document.getElementById("title").innerText = data.title;
document.getElementById("about").innerText = data.about;
document.getElementById("contact").innerText = data.contact;

}