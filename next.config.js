// const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
// const nextConfig = {
//     pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
// }

// module.exports = withMDX(nextConfig)
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    compiler: {
        removeConsole: true,
    }
}

module.exports = withContentlayer({ ...nextConfig })
