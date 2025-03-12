import  "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navigation from "../components/Navigation.react";
import Footer from "../components/Footer.react"
import { Open_Sans, Poppins, Raleway } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--default-font',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic']
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--nav-font',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--heading-font',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <html lang="en">
      <body className={`index-page ${openSans.variable} ${poppins.variable} ${raleway.variable}`}>
        <Navigation/>
        {children}
        <Footer/>
        <GoogleAnalytics gaId="G-N1T2PMCRJS"/>
      </body>
    </html>
  );
}
