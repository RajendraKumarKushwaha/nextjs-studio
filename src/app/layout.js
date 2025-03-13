
import WhatsappButton from "./clientComponent/Whatsapp"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./globals.css"

export const metadata = {
  title: "Studio Website",
  description: "Photography Studio Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
        <WhatsappButton/>
      </body>
    </html>
  )
}
