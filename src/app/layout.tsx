import './globals.scss'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight:['400','500','600','700'], subsets:['latin']})

export const metadata = {
  title: 'AlienDev Task ',
  description: 'task management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
