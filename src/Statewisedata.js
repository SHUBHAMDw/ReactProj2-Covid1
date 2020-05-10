import React,{Component} from 'react'

class Statewisedata extends Component
{
  state={listofstate:[],selectedstate :''}

handlesubmit()
  {
      
       console.log('State selected function me hai' ,this.props.statew)
       console.log('State selected function me hai' ,this.state.selectedstate)
        const stateparticular=((this.props.statew).filter(x=>x.state===(this.state.selectedstate)))
    
       this.stateveiwleft=(
           <div>
               <table>
                  <tr><td>State</td><td>{stateparticular.map(s=>s.state)[0]}</td></tr>
                  <tr><td>Active</td><td>{stateparticular.map(s=>s.active)[0] }</td></tr>
                  <tr><td>Confirmed</td>{stateparticular.map(s=>s.Confirmed)[0] }<td></td></tr>
                  <tr><td>Deaths</td><td>{stateparticular.map(s=>s.deaths)[0] }</td></tr>
                  <tr><td>Deltaconfirmed</td><td>{stateparticular.map(s=>s.deltaconfirmed)[0] }</td></tr>
                  <tr><td>Deltadeaths</td><td>{stateparticular.map(s=>s.deltadeaths)[0] }</td></tr>
                  <tr><td>Deltarecovered</td><td>{stateparticular.map(s=>s.deltarecovered)[0] }</td></tr>
                  <tr><td>Lastupdatedtime</td><td>{stateparticular.map(s=>s.lastupdatedtime)[0] }</td></tr>
                  <tr><td>Recovered</td><td>{stateparticular.map(s=>s.recovered)[0] }</td></tr>
                  <tr><td>Statenotes</td><td>{ stateparticular.map(s=>s.statenotes)[0]}</td></tr>
                  
               </table>
           </div>
       )
       if(stateparticular===null){
       console.log('State selected ---->',stateparticular.deltarecovered)
       }
       else{
           let s=stateparticular.map(s=>s)
           console.log('State selected  null s',s.active)
       console.log('State selected  null s',s.map(s=>s.active)[0])
       
       console.log('State selected 2---->',((this.props.statew).filter(x=>x.state===(this.state.selectedstate))))
       }
       
  }

render()
{

   
    let l=(this.props.statew).map(x=>x.state)
    
    return(

         (
                

            <div>
                
                {console.log('selected state' ,this.state.selectedstate)}
    
            <table>
                <tr>
                <div>
                    <form onChange={this.handlesubmit()}> 
                    <select value={l}  
                        onChange={(e) => this.setState({selectedstate: e.target.value})}>   
                       {l.map((team) => <option key={team} value={team}>{team}</option>)}
                        </select>
                        <input type="submit" value="Fetch Details"/>
                     </form>
                </div>
                </tr>
                <tr>
                    <td>
                        {this.stateveiwleft}
                    </td>
                </tr>
            </table>



            </div>




          )
        
          

    )


}











}
export default Statewisedata;