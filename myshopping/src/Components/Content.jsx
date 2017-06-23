import React from 'react';
import About from '../Page/About';
import Homepage from '../Components/Homepage';
import Ariehomepage from '../Page/Ariehomepage';
import {Switch,Route} from 'react-router-dom';
export default class Content extends React.Component {
 
    render() {
      
        return (
           <Switch>
             {/*<Route exact path="/slide" component={Homepage}/>*/}
             <Route path="/About" component={About}/>
             <Route path="/" component={Ariehomepage}/>
             {/*<Route path ="/Protico" component={Protico}/>*/}
             {/*<Route path ="/Pricing" component={Pricing}/>
             {/*<Route path ="/Service" component={Service}/>*/}
             <Route path ="/Homepage"  component={Homepage}/>}


         </Switch> 
        );
    }
}