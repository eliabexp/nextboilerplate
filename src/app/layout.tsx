import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'boilerplate',
    description: "eliabe's boilerplate"
}

export function generateViewport(): Viewport {
    const userAgent = headers().get('User-Agent')

    // prevent input zoom on focus on iOS devices
    if (userAgent && /iPad|iPhone|iPod/.test(userAgent)) {
        return {
            maximumScale: 1
        }
    }

    return {}
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
