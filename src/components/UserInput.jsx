export default function UserInput({changeInitialInvestment, changeAnnualInvestment, changeExpectedReturn , changeDuration }){
    return (
        <section id="user-input">
        <div  className="input-group">
             <p>
          <label>INITIAL INVESTMENT</label>
          <input type="number" defaultValue={10000} required onChange={changeInitialInvestment}/>
          </p>
          <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" defaultValue={1200} required onChange={changeAnnualInvestment}/>
          </p>
          </div>


          <div  className="input-group">
          <p>
          <label>EXPECTED RETURN</label>
          <input type="number" defaultValue={6} required onChange={changeExpectedReturn} />
          </p>
          <p>
          <label>DURATION</label>
          <input type="number" defaultValue={10} required onChange={changeDuration} />
          </p>
       </div>


       </section>
        
    );
}