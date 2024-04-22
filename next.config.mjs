/** @type {import('next').NextConfig} */
const nextConfig = {
    headers() {
        const CSP = [
            "default-src 'self'",
            "connect-src 'self'",
            "frame-src 'self' youtube.com",
            "font-src 'self'",
            'img-src *',
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            "style-src 'self' 'unsafe-inline'"
        ]

        const headers = [
            { key: 'Content-Security-Policy', value: CSP.join(';') },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload'
            }
        ]

        return [
            {
                source: '/:path*',
                headers: headers
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                hostname: 'pasacademy.storage.googleapis.com',
                protocol: 'https'
            },
            {
                hostname: 'picsum.photos',
                protocol: 'https'
            }
        ]
    },
    redirects() {
        return []
    },
    poweredByHeader: false
}

export default nextConfig
