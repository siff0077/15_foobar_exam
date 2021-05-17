const { resolve } = require("path");

module.exports = {
    base: "./",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                // dashboard: resolve(__dirname, "dashboard.html"),
            },
        },
    },
};
