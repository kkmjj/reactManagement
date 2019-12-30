import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';





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
         customer.map(c =>{
           return( <Customer
              key={c.id}
              name={c.name}
              birthday={c.birthday}


           />);
         })
       }
         </TableBody>
       </Table>
       
     </div>
   );
 }
}

export default App;
