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
    "functions and arrow function",
    "deconstruction spread operator",
    "import and export a function we will start with"
  ]
];



function Main()
{
    const [activeContentIndex,setactiveContentIndex] = useState(0);

   

    return(
        <div>
            <Header />

            <div>
                <menu>
                    <button className={activeContentIndex === 0 ? "active" : ""}  
                                    onClick={() => setactiveContentIndex(0)}>
                        react
                    </button>
                     <button className={activeContentIndex === 1 ? "active" : ""}  
                                    onClick={() => setactiveContentIndex(1)}>
                        topics 
                    </button>
                     <button className={activeContentIndex === 2 ? "active" : ""}  
                                    onClick={() => setactiveContentIndex(2)}>
                        react.dev
                    </button>
                     <button className={activeContentIndex === 3 ? "active" : ""}  
                                    onClick={() => setactiveContentIndex(3)}>
                        javascript basic first
                    </button>
                </menu>
                <div id="id_content">
                    <ul>
                        {content[activeContentIndex].map((item) => (
                            <li key={item}>{item}</li>
                        
                        ))}
                        <li>my topics</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main;