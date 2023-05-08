import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Details from "@/components/details/Details";
import Header from "@/components/header/Header";
import Testimony from "@/components/testimony/Testimony";
import Carrossel from "@/components/header/Carrossel";
import Footer from "@/components/footer/Footer";
import BotaoVolta from "@/components/BotaoVolta";

export default function Home() {
  return (
   <div className="overflow-x-hidden">
    <Header/>
    <Carrossel/>
    <About/>
    <Testimony/>
    <Details/>
    <Blog/>
    <Contact/>
    <Footer/>
    <BotaoVolta/>
   </div>
  )
}
