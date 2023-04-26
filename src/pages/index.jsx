import About from "@/components/about/About";
import Details from "@/components/details/Details";
import Header from "@/components/header/Header";
import Testimony from "@/components/testimony/Testimony";

export default function Home() {
  return (
   <div>
    <Header/>
    <About/>
    <Testimony/>
    <Details/>
   </div>
  )
}
