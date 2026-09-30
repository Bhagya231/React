import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section.jsx";
import {values} from "../js/topic.js";
import {Tab} from "./Tab.jsx";

export function Examples()
{
    const [selectedone, setSelectedone] = useState();
    
    function handleclick(selectedName)
    {
    
        setSelectedone(selectedName);
        console.log("name: ",selectedName);
        
    }

    console.log("APP components runing")

    let tabcontent = <p>Please select a Topic.</p>

    if(selectedone)
    {
        tabcontent = <div>
                        <h1>{values[selectedone].title}</h1>

                        <p>{values[selectedone].description}</p>

                        <pre>
                            <code>{values[selectedone].code}</code>
                        </pre>
                    </div>
    }

    return(
       <Section title = "Topics"  className="my-3">
          
            <div className="card shadow">
                <div className="card-body" style={{background:"#ffe4b5", color:"black"}}>
                     
                     <div className="d-flex gap-2 flex-wrap mb-4" style={{color:"#48d9f3"}}>

                        {/* <Tab buttonconstainer = "menu" buttons = {
                            <>
                            <TabButton className={`btn ${selectedone === "components"? "btn-primary":""}`} 
                        onClick ={() => {handleclick('components')}} >Components</TabButton>
                        <TabButton className={`btn ${selectedone === "jsx"? "btn-primary":""}`} 
                        onClick ={() => {handleclick('jsx')}}>JSX</TabButton>
                        <TabButton className={`btn ${selectedone === "props"? "btn-primary":""}`}
                         onClick ={() => {handleclick('props')}}>Props</TabButton>
                        <TabButton className={`btn ${selectedone === "state"? "btn-primary":""}`}
                         onClick ={() => {handleclick('state')}}>State</TabButton> </>
                        }>{tabcontent}</Tab> */}

                        {/* <TabButton onSelect ={() => {handleclick('components')}} >Components</TabButton>
                        <TabButton onSelect ={() => {handleclick('jsx')}}>JSX</TabButton>
                        <TabButton onSelect ={() => {handleclick('props')}}>Props</TabButton>
                        <TabButton onSelect ={() => {handleclick('state')}}>State</TabButton>  */}


                        {/* <TabButton className={`btn ${selectedone === "components"? "btn-primary":""}`} 
                        onSelect ={() => {handleclick('components')}} >Components</TabButton>
                        <TabButton className={`btn ${selectedone === "jsx"? "btn-primary":""}`} 
                        onSelect ={() => {handleclick('jsx')}}>JSX</TabButton>
                        <TabButton className={`btn ${selectedone === "props"? "btn-primary":""}`}
                         onSelect ={() => {handleclick('props')}}>Props</TabButton>
                        <TabButton className={`btn ${selectedone === "state"? "btn-primary":""}`}
                         onSelect ={() => {handleclick('state')}}>State</TabButton>  */}


                          <TabButton className={`btn ${selectedone === "components"? "btn-primary":""}`} 
                        onClick ={() => {handleclick('components')}} >Components</TabButton>
                        <TabButton className={`btn ${selectedone === "jsx"? "btn-primary":""}`} 
                        onClick ={() => {handleclick('jsx')}}>JSX</TabButton>
                        <TabButton className={`btn ${selectedone === "props"? "btn-primary":""}`}
                         onClick ={() => {handleclick('props')}}>Props</TabButton>
                        <TabButton className={`btn ${selectedone === "state"? "btn-primary":""}`}
                         onClick ={() => {handleclick('state')}}>State</TabButton> 


                    </div>
                   
                   {/* first one */}
                   {/* {!selectedone? "Please select a Topic.": null}
                   {selectedone ? <div>
                        <h1>{values[selectedone].title}</h1>

                        <p>{values[selectedone].description}</p>

                        <pre>
                            <code>{values[selectedone].code}</code>
                        </pre>
                    </div>: null } */}

                    {/* short one for first one */}
                   {/* {!selectedone ? "Please select a Topic.": <div>
                        <h1>{values[selectedone].title}</h1>

                        <p>{values[selectedone].description}</p>

                        <pre>
                            <code>{values[selectedone].code}</code>
                        </pre>
                    </div>} */}

                    {/* second process */}

                     {/* {!selectedone && "Please select a Topic."}
                      {selectedone && <div>
                        <h1>{values[selectedone].title}</h1>

                        <p>{values[selectedone].description}</p>

                        <pre>
                            <code>{values[selectedone].code}</code>
                        </pre>
                    </div>} */}

                    {/* third one */}

                    {tabcontent}
                    
                </div>

  

            </div>

       
       </Section>
                
    )
}

