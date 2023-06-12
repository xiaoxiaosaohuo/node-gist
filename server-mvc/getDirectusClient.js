const { Directus }  = require( "@directus/sdk");

const getDirectusClient = async () => {
    const directus = new Directus(process.env.PUBLIC_DIRECTUS_URL);
    const token = await directus.auth.token;
    if (token) return directus;
   
    if (process.env.DIRECTUS_EMAIL && process.env.DIRECTUS_PASSWORD) {
        await directus.auth.login({
        email: process.env.DIRECTUS_EMAIL,
        password: process.env.DIRECTUS_PASSWORD,
        });
    } else if (process.env.DIRECTUS_STATIC_TOKEN) {
        await directus.auth.static(process.env.DIRECTUS_STATIC_TOKEN);
    }
    return directus;
};
module.exports = {
    getDirectusClient
}