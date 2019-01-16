module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://10.90.3.90:80',
                changeOrigin: true,
            },
            '/s/': {
                target: 'http://10.90.3.90:80',
                changeOrigin: true,
            },
            '/a/': {
                target: 'http://10.90.3.90:80',
                changeOrigin: true,
            },
        },
    },
};
