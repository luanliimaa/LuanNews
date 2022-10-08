import { ApiRequests } from "./requests.js";
import { createElement } from "./utils.js";

const newsContainer = document.querySelector(".news__container")

async function createNews(){
    const news = await ApiRequests.getNews()
    news.forEach(element => {
        //console.log(element)
        const li = createElement("li")

        //const divImg = createElement("div")
        const img = document.createElement("img")
        img.src = element.imagem

        const divDescription = createElement("div")
        const category = createElement("span", element.categoria)
        const title = createElement("h2", element.titulo)
        const resume = createElement("p", element.resumo)
        const font = createElement("a", `Fonte: ${element.fonte}`)
        font.href = element["noticia_completa"]
        font.target = "_blank"

        //divImg.append(img)
        divDescription.append(category, title, resume, font)
        li.append(img, divDescription)
        newsContainer.append(li)
    });
}

createNews()