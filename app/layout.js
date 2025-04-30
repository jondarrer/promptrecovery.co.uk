import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import reportWebVitals from "./reportWebVitals";

import "./global.css";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <div className="app">
          <Navbar />

            <main className="main-content">
              {children}
            </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
reportWebVitals();