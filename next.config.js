const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    webpack(config) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            options: {
                prettier: true,
                svgo: false,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: { removeViewBox: false },
                            },
                        },
                    ],
                },
                titleProp: false,
            },
        });

        return config;

    }
}

module.exports = nextConfig
