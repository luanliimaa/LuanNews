export class ApiRequests{
    static baseUrl = "https://kenzie-news-api.herokuapp.com/api/news"

    static async getNews(){
        const news = await fetch(`${this.baseUrl}`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
        return news
    }
}