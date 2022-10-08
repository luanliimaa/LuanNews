export function createElement(tag, text, classe){
    const element = document.createElement(tag)
    if (text) element.innerText = text
    if (classe) element.classList.add(classe)
    return element
}