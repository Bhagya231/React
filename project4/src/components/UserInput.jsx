
export default function UserInput({onChange, userInput})
{
    // const [userInput,setUserInput] = useState({
    //     initialInvestment: 10000,
    //     annualInvestment: 1200,
    //     expectedReturn:6,
    //     duration:10
    // })


    // function handleChange(inputIdentifier,newValue)
    // {
    //     setUserInput(prevUserInput =>{
    //         return {
    //             ...prevUserInput,[inputIdentifier]:newValue
    //         }
    //     });
    // }


    return (
    <section className="card shadow-sm border mb-4">
        <div className="card-body p-4"> 
            <h2 className="h4 text-center mb-4">Investment Details</h2>
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="initialInvestment" className="form-label fw-semibold">
                        Initial Investment
                    </label>
                    <input id="initialInvestment" min="0" type="number" className="form-control" value={userInput.initialInvestment} required 
                            onChange={(event) => onChange("initialInvestment", event.target.value)}/>

                </div>

                <div className="col-md-6">
                    <label htmlFor="annualInvestment" min="0" className="form-lable fw-semibold">Annual Investment</label>
                    <input id="annualInvestment" type="number" className="form-control" value={userInput.annualInvestment} 
                    required onChange={(event) => onChange("annualInvestment", event.target.value)}/>
                </div>

                <div className="col-md-6">
                    <label htmlFor="expectedReturn" min="0" className="form-label fw-semibold">Expected Return</label>
                    <input type="number" id="expectedReturn" className="form-control"
                    value = {userInput.expectedReturn} required onChange={(event) => onChange("expectedReturn", event.target.value)} />

                </div>
                <div className="col-md-6">
                    <label htmlFor="duration" min="1" className="form-label fw-semibold">Duration (Years)</label>
                    <input type="number" id="duration" className="form-control"
                    value = {userInput.duration} required onChange={(event) => onChange("duration", event.target.value)} />



                </div>


                
            </div>
            
        </div>
       
    </section>
    );
}