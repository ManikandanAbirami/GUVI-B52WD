const allItems = document.querySelectorAll("li");

function clickFunc() {
  allItems[0].setAttribute("class", "firstLi");
  allItems[1].style.backgroundColor = "lightcoral";
  allItems[0].value = 4;
  allItems[0].innerText = "Manikandan Anbalagan";
}

function changeFunc() {
  allItems[0].removeAttribute("class", "firstLi");
  allItems[1].style.backgroundColor = "white";
  allItems[0].value = 1;
  allItems[0].textContent = "List item 1";
  allItems.forEach((item) => {
    item.classList.remove("large");
  });
}

function changeAll() {
  allItems.forEach((item) => {
    item.setAttribute("class", "firstLi large");
  });
}

const p = document.createElement("p");
p.setAttribute("id", "para1");
// const text = document.createTextNode("Welcome B52 WD3 batch members!!!!");
// p.appendChild(text);
p.innerText = "Welcome B52 WD3 batch members!!!!";

const p1 = document.createElement("p");
// const text1 = document.createTextNode("Welcome B52 WD2 batch members!!!!");
// p1.appendChild(text1);
p1.innerText = "Welcome B52 WD2 batch members!!!!";

// document.body.append(p, p1);

document.getElementById("scrollable").prepend(p, p1);

const txt = document.getElementById("text");
console.log("InnerText", txt.innerText);
console.log("InnerHTML", txt.innerHTML);
console.log("TextContent", txt.textContent);
console.log(document.getElementById("text").innerHTML);

document.getElementById("text").innerHTML += `<div id="text">
Text div
<p>Text 1</p>
<p>Text 2</p>
<p>Text 3</p>
</div>`;

// document.body.innerHTML = "";
