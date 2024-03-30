import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Tech from "./components/Tech"
import Works from "./components/Works"
import Feedbacks from "./components/Feedbacks"
import Contact from "./components/Contact"
import StartCanvas from "./components/canvas/Stars"

import { BrowserRouter } from "react-router-dom"

const App = () =>  {

  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
              <NavBar/>

              <Hero />
          </div>

          <About />

          <Experience />

          <Tech />

          <Works />

          <Feedbacks />

          <div className="relative z-0">
            <Contact />

            <StartCanvas />
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
