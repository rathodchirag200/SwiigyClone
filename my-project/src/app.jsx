import { Banner } from "./banner"
import { Card } from "./card"
import { Citydata } from "./city"
import { Download } from "./download"
import { Footer } from "./footer"
import { Header } from "./header"
import { Mind } from "./mind"
import { Online } from "./online"
import { Top } from "./top"

export const App = () =>{
    return(
        <div className="">
             <div className=" font-sans overflow-x-hidden">
        <Header />
        <Mind />
        <Top/>
        <Online/>
        <Banner/>
        <Citydata/>
        <Footer/>
        <Download/>
        </div>
        </div>
       
    )
}