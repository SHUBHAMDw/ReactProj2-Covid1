import React,{Component} from 'react';
import CovidLatestStat from './CovidLatestStat'

class App extends Component 
{
    
    constructor()
    {
        super();
        this.state={displayMessage: false};
        this.toggleDisplayContacts=this.toggleDisplayContacts.bind(this);
    }
    toggleDisplayContacts()
    {
       
        this.setState({displayMessage :!this.state.displayMessage})
    
    }

    
render()
{
   
    let bio =(

        <div>
        <p>Don't panic. With time you will also become powerfull to overcome this virus</p>
        <p>It's a time given by god to retrospect and setup the pavement for the future. </p>
        <p>But don't forget to spread the awareness.</p>

    </div>

    );
   if(!this.state.displayMessage)
   {
       bio=(

            <button onClick ={this.toggleDisplayContacts} >CONTACTS</button>

       )}
    else
    {
        bio =(

            <div>
            <p>Don't panic. With time you will also become powerfull to overcome this virus</p>
            <p>It's a time given by god to retrospect and setup the pavement for the future. </p>
            <p>But don't forget to spread the awareness.</p>

            <button onClick ={this.toggleDisplayContacts} >CONTACTS -Hide </button>
    
        </div>
    
        );
    }

  
    return(
    
        <div>
            <h1>Hello !!</h1>
            <p>This page is basically based on the readily available data which is open-sourced</p>
            <p>Always looking foward for suggestions.</p>
            {bio}
            <hr></hr>
            <CovidLatestStat/>
        </div>
        

    )
}

}
export default App;