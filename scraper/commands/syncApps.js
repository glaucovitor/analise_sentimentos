const models = require('../database/models/index');
const App = models.app;
const retry = require('async-await-retry');
const snakeCase = require('lodash.snakecase')

const gplay = require('google-play-scraper').memoized({
    maxAge: 1000 * 60 * 60, // cache for 5 minutes
    max: 10000 // save up to 1k results to avoid memory issues
});
const chalk = require('chalk')

const findApps = async (appId) => {
    try {
        console.log(chalk.green(`[${appId.toUpperCase()} - ${new Date().toLocaleString()}] Starting scraping!`))
        let appDetails = await retry(async () => {
            return gplay.app({
                appId,
                throttle: 100
            });
        }, {retriesMax: 4, interval: 100, exponential: true, factor: 3});
        console.log(appDetails)
        const appDetailsSnakeCase = await Object.fromEntries(
            Object.entries(appDetails).map(([k, v]) => [snakeCase(k), v])
        );
        const {
            1: count_1_star, 
            2: count_2_star, 
            3: count_3_star,
            4: count_4_star,
            5: count_5_star,
        } = {...appDetailsSnakeCase.histogram}
        const stars = Object.assign(
            {},
            {
                count_1_star,
                count_2_star,
                count_3_star,
                count_4_star,
                count_5_star
            }
        );
        console.log(chalk.green(`[${appId.toUpperCase()} - ${new Date().toLocaleString()}] Scraped ${appDetails.title.toUpperCase()} details!`))
        const app =  {...appDetailsSnakeCase, ...stars, id: appDetailsSnakeCase.app_id}
        // console.log(app)
        return app;
    } catch (e) {
        console.log(chalk.red(`[${appId.toUpperCase()} - ${new Date().toLocaleString()}] ${(e)}`))
    }      
}


(async () => {
    const apps = await App.findAll({ attributes: ['id']});
    console.log(`Updating ${apps.length} apps...`);
    const findAppsPromises = [];
    apps.forEach((app, idx) => {
        if(app.id === 'br.gov.meugovbr'){
            findAppsPromises.push(findApps(app.id));
        }
    })
    const appModels = await Promise.all(findAppsPromises);
    console.log(chalk.red(`[DATABASE] - ${new Date().toLocaleString()}] Upserting ${appModels.filter(app => app).length} apps`))
    await App.bulkCreate(appModels.filter(app => app), 
    {
        updateOnDuplicate: Object.keys(App.rawAttributes)
    } )
    return process.exit(0);
})();