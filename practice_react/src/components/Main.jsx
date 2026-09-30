import { useState } from "react";
import Header from "./Header";

 const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Functions and arrow functions",
    "Destructuring and spread operator",
    "Import and export"
  ]
];



export default function Main()
{
    const [activeContentIndex,setactiveContentIndex] = useState(0);

   

    return(
        <div className="container">
            <Header />

            <div className="card shadow">
                <div className="card-body">
                    <div className="d-flex gap2 flex-wrap mb-4">
                        <button  className={`btn ${activeContentIndex === 0? "btn-primary":""}`} 
                                onClick={() => setactiveContentIndex(0)}>
                             React
                        </button>
                        <button className={`btn ${activeContentIndex === 1? "btn-primary":""}`}   
                                    onClick={() => setactiveContentIndex(1)}>
                        Topics 
                    </button>
                     <button className={`btn ${activeContentIndex === 2? "btn-primary":""}`}  
                                    onClick={() => setactiveContentIndex(2)}>
                        React.dev
                    </button>
                     <button className={`btn ${activeContentIndex === 3? "btn-primary":""}`} 
                                    onClick={() => setactiveContentIndex(3)}>
                        JavaScript Basics
                    </button>
                    </div>

                    <ul className="list-non">
                        {content[activeContentIndex].map((item) =>(
                            <li key={item} className="list-group-item">
                                {item}
                            </li>

                        ))}

                    </ul>

                </div>
            
            </div>
        </div>
    )
}

