import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';







class App extends Component {

state ={
  customers: ""
}

// api서버에 접근하여 데이터를 받아옴 
componentDidMount(){
  this.callApi().then(res => this.setState({customers: res}))
  .catch(err => console.log(err));
}
callApi = async () =>{
  const response = await fetch('/api/customers');
  const body =await response.json();

  return body;
}

 render(){
   return(
     <div>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell>이름</TableCell>
             <TableCell>생년월일</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
         {
           // 배열형식을 map으로 다루기 
         this.state.customers  ? this.state.customers.map(c =>{
           return( <Customer
              key={c.id}
              name={c.name}
              birthday={c.birthday}


           />);
         }) : ""}
       }
         </TableBody>
       </Table>
       
     </div>
   );
 }
}

export default App;
