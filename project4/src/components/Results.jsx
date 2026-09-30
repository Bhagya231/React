import { calculateInvestmentResults, formatter } from "../js/investment";

export default function Results({input})
{
    const resultsData = calculateInvestmentResults(input);
    // const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    const initialInvestment =  input.initialInvestment;

    console.log(input);
    return (
        <section className="card shadow-sm border-0">
            <div className="card-cody p-4">
                <h2 className="h4 mb-4">Investment Results</h2>

                <div className="table-responsive">

                    <table className="table table-striped table-hover align-middle mb-0">
                        <thead className="table-dark">
                            <tr>
                                <th>Year</th>
                                <th>Investment Value</th>
                                <th>Interest (Year)</th>
                                <th>Total Interest</th>
                                <th>Invested Capital</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultsData.map(yearData => {
                                const totalAmountInvested = initialInvestment +yearData.annualInvestment * yearData.year;
                                const totalInterest = yearData.valueEndOfYear - totalAmountInvested;

                                return (
                                    <tr key={yearData.year}>
                                        <td>{yearData.year}</td>
                                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                        <td>{formatter.format(yearData.interest)}</td>
                                        <td>{formatter.format(totalInterest)}</td>
                                        <td>{formatter.format(totalAmountInvested)}</td>
                                    </tr>
                                )
                            })}

                        </tbody>


                    </table>
                    

                </div>
            </div>

        </section>
       
                

                 
        
    );
}