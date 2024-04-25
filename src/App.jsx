import { Navbar } from './Components/Navbar'
import { Header } from './Components/Header'
import { Services } from './Components/Services'
import { AboutUs } from './Components/AboutUs'
import { TimeLine } from './Components/TimeLine'
import { Proyects } from './Components/Proyects'
import { Customers } from './Components/Customers'
import { Contact } from './Components/Contact'
import { ChatBot } from './Components/ChatBot'
import './styles/App.css'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <AboutUs />
      <TimeLine />
      <Proyects />
      <Customers />
      <Contact />
      <ChatBot />
    </>
  )
}

export default App
