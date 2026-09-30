
function Header()
{
    return(
        <header className="d-flex align-items-center gap-4 my-4">


            <img src="src/assets/react.svg" alt="react logo"style={{width:"4rem"}} className="object-fit-contain" />
            <div>
                <h1 className="m-0 fw-bold" style={{color: "#48d9f3"}}>React</h1>
                <p className="m-0" style={{color:"#82c2ce"}}>
                    React conceptis we need for almost any app we are going to build !</p>
            
            </div>


        </header>
            
               
    );
}

export default Header;