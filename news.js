
const NewsAPI = require('newsapi');

const dotenv = require('dotenv')
dotenv.config()
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

exports.getNews = async function (Category , Country, PageSize){
    var data = null;
    await newsapi.v2.topHeadlines({
        sources: '',
        q: '',
        category: Category,
        language: 'en',
        country: Country,
        pageSize: PageSize,
    }).then(response => {
        data = response.articles;
    });
    return data;
}
exports.getSearchNews = async function (Query , Category , Country, PageSize){
    var data = null;
    await newsapi.v2.topHeadlines({
        sources: '',
        q: Query,
        category: Category,
        language: 'en',
        country: Country,
        pageSize: PageSize,
    }).then(response => {
        data = response.articles;
    });
    return data;
}
