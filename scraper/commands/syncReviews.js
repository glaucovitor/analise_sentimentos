const models = require('../database/models/index');
const Review = models.review;
const App = models.app;
const retry = require('async-await-retry');
const snakeCase = require('lodash.snakecase')

const gplay = require('google-play-scraper').memoized({
    maxAge: 1000 * 60 * 60, // cache for 5 minutes
    max: 10000 // save up to 1k results to avoid memory issues
});
const chalk = require('chalk')

const findReviews = async (appId) => {
    try {
        console.log(chalk.green(`[${appId.toUpperCase()} - ${new Date().toLocaleString()}] Starting scraping!`))
        const reviewsData = await retry(async () => {
                return gplay.reviews({
                    appId,
                    sort: gplay.sort.NEWEST,
                    num: 5000,
                    throttle: 100,
                    lang: 'pt',
                    country: 'br'
                });
            }, { retriesMax: 4, interval: 100, exponential: true, factor: 3 });
                
        const reviewsDataSnakeCase = reviewsData.map(data => {
            const snaked =  Object.fromEntries(
                Object.entries(data).map(([k, v]) => [snakeCase(k), v])
            );
            return {...snaked, app_id: appId}
        })
        console.log(chalk.green(`[${appId.toUpperCase()} - ${new Date().toLocaleString()}] Scraped ${reviewsDataSnakeCase.length} reviews!`))
        return reviewsDataSnakeCase;
    } catch (e) {
        console.log(chalk.red(`[${appId.toUpperCase()} - ${new Date().toLocaleString()}] ${(e)}`))
    }      
}


(async () => {
    const apps = await App.findAll({ attributes: ['id'], where: {id: 'br.gov.meugovbr'}});
    console.log(`Updating ${apps.length} apps...`);
    const findReviewsPromises = [];
    apps.forEach((app, idx) => {
        if(app.id === 'br.gov.meugovbr'){
            findReviewsPromises.push(findReviews(app.id));
        }
    })
    const reviews = await Promise.all(findReviewsPromises);
    console.log(chalk.red(`[DATABASE] - ${new Date().toLocaleString()}] Upserting ${reviews.filter(review => review).length} reviews!`));
    await Review.bulkCreate([].concat.apply([], reviews), 
    {
        updateOnDuplicate: ['version']
    } )
    return process.exit(0);
})();