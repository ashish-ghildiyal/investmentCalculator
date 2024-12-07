import React from 'react'
import {CalculateInvest, formatter} from '../util/invest'
const Result = ({resultInput}) => {
   const resultData = CalculateInvest(resultInput);
   const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest -resultData[0].annualInvestment;
  return (
    <table id="result" cellPadding={6} cellSpacing={6}>
        <thead>
            <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>interest (Year)</th>
            <th>Total interest</th>
            <th>Investment capital</th>
            </tr>
        </thead>
            <tbody>
                {resultData.map((data)=>{
                    const totalInterest = data.valueEndOfYear - data.annualInvestment *data.yearly - initialInvestment;
                    console.log(totalInterest)
                    const totalInvestment =  data.valueEndOfYear - totalInterest; 
                    return(
                        <tr key={data.yearly}>
                         <td>{data.yearly}</td>
                         <td>{formatter.format(data.valueEndOfYear)}</td>
                         <td>{formatter.format(data.interest)}</td>
                         <td>{formatter.format(totalInterest)}</td>
                         <td>{formatter.format(totalInvestment)}</td>
                         </tr>
                    )
                })}
               
            </tbody>
       
    </table>
  )
}

export default Result