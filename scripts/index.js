const setup = () => {
    let list = document.querySelector("#lstIngredients");

    for (let i = 0; i < list.children.length ; i++) {
        let link = list.children[i].querySelector('a');
        link.addEventListener("click", deleteListItem);
    }
    let button = document.querySelector("#btnAdd")

    button.addEventListener("click", toevoegen)
}

const deleteListItem = (event) => {
    let listItem = event.target.closest('li');
    let list = listItem.parentNode;
    list.removeChild(listItem);
    event.preventDefault();
}

window.addEventListener('load', setup);



const toevoegen = () => {
    let text = document.querySelector("#txtInput");
    let list = document.querySelector("#lstIngredients");

    let listItem = document.createElement("li");
    let link = document.createElement("a");

    link.setAttribute("href", "#");
    link.textContent = "verwijder";

    link.addEventListener("click", deleteListItem);

    listItem.appendChild(document.createTextNode(text.value + " "));
    listItem.appendChild(link);
    list.appendChild(listItem);
}

