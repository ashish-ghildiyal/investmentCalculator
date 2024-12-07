export function CalculateInvest({initialValue,annualValue,expectedRate,duration}){
    const annualData=[];
    let initial = initialValue;

    for(let i=0; i<duration; i++){
        const interestEarnedInYear = initial*(expectedRate/100);
        initial += interestEarnedInYear + annualValue;

        annualData.push({
            yearly: i+1,
            interest:interestEarnedInYear,
            valueEndOfYear:initial,
            annualInvestment:annualValue
        })
    }
    return annualData;


}


export const formatter =  new Intl.NumberFormat('en-Us',{ 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0, 
})

