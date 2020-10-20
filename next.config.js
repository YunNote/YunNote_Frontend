const env = process.env.NODE_ENV || 'development';
const configs = {
    development : {
        LOCAL_HOST: "http://localhost:3000",
        API_HOST : "http://localhost:8080"
    },

    staging : {
        LOCAL_HOST: "http://localhost:3000",
        API_HOST : "http://localhost:8080/staging"
    },

    production : {
        LOCAL_HOST: "http://localhost:3000",
        API_HOST : "http://localhost:8080/production"
    }
}[env];

module.exports = {
    env : configs
};