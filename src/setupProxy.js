const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/webapi',
        createProxyMiddleware({
            target: 'http://localhost:8080/b3_challenge_backend_war_exploded',
            changeOrigin: true,
        })
    );
};
