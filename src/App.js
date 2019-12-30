import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';


const customer =[{
  'name': '홍길동',
  'birthday': '931201'

},
{
  'name': '김민준',
  'birthday': '941201'

}]

class App extends Component {
 render(){
   return(
     <div className="gray-backgroud">
       {
         customer.map(c =>{
           return( <Customer
              key={c.id}
              name={c.name}
              birthday={c.birthday}


           />);
         })
       }
     </div>
   );
 }
}

export default App;
