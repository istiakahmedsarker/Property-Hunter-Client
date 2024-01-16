import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Shared/Navbar/Navbar'
import Footer from '@/Components/Shared/Footer/Footer'
import Banner from '@/Components/Banner/Banner'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Banner></Banner>
        
        <Footer></Footer>
        </body>
    </html>
  )
}
