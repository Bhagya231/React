import { Random } from "./Random";
import { descriptions } from "./Random";
import ReactLogo from "../assets/react.svg"

export default function Nav()
{
    const  description = descriptions[Random(2)];
    return(
        <header className="d-flex align-items-center gap-4 my-4">


           <div className=" m-auto">
             <img src={ReactLogo} alt="react logo"style={{width:"4rem"}} className="object-fit-contain" />
            
                <h1 className="m-0 fw-bold" style={{color: "#48d9f3"}}>React Essentials</h1>
                <p className="m-0" style={{color:"#82c2ce"}}>
                    {description} React conceptis we need for almost any app we are going to build !</p>
            
           
           </div>


        </header>
                
                   
    );
}