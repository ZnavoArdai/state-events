import { Component } from "react";


class UserTable extends Component{

    constructor(){
        super();

        this.state={myarray:[
            {fname:"znavo",lname:"aradi",age:28,email:"zan@gaail",passwor:879},
            {fname:"avi",lname:"cohen",age:42,email:"sad@gaail",passwor:4512},
            {fname:"haim",lname:"rada",age:12,email:"aa@gaail",passwor:3215},
            {fname:"natan",lname:"belay",age:56,email:"gg@gaail",passwor:123}]
    }
}

chaeckIfChange= () => {
    {document.querySelectorAll("button").forEach((btn,i)=>{

   const prv= this.state.fname[i];
   
    })}

  };


    render(){
        return(
            <>
          
            <table>
<thead>
  <th>first name </th>
  <th>last name</th>
  <th>age</th>
  <th>email</th>
  <th>password</th>
  <th>chack bnt</th>

</thead>
<tbody>
{this.state.myarray.map(item=>

    <tr>
        <td>{item.fname}</td>
        <td>{item.lname}</td>
        <td>{item.age}</td>
        <td>{item.email}</td>
        <td>{item.passwor}</td>
        <td><button onClick={this.chaeckIfChange}>cheack</button></td>
    </tr>


)}
</tbody>
</table>
            
            </>
        )
    }

}


export default UserTable;