import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-rose-50 via-pink-50 to-white text-gray-800">

      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
