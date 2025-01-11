import { formatter } from "../util/investment";
export default function Result({output}){
    let total = 0;
    let investedCaptial = 0;
    return (
    <table id="result" >
  <thead>
  <tr>
    <th>Year</th>
    <th>Investment Value</th>
    <th>Interest (Year)</th>
    <th>Total Interest</th>
    <th>Invested Capital</th>
  </tr>
</thead>
   <tbody>   
    {  output.map((res) => {
        total += res.interest;
        investedCaptial = res.valueEndOfYear-total;
        return (
        <tr key={res.year}>
       <td>{res.year}</td>
       <td>{formatter.format(res.valueEndOfYear)}</td>
       <td>{formatter.format(res.interest)}</td>
      <td>{formatter.format(total)}</td>
      <td>{formatter.format(investedCaptial)}</td>
      {/* <td>{formatter.format(res.annualInvestment)}</td> */}
      {/* <td>{res.investedCapital}</td> */}
        </tr>
    );
    } ) }
  </tbody> 
</table>
    );
}