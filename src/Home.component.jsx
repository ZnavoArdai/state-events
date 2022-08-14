import { Component } from "react";
import AddUser from "./AddUser.component";
import Edit from "./Edit.component";
import UserTable from "./UsersTable.component";


class Home extends Component{
constructor(){
    super();
}



render(){
    return(
        <>
        <div id="display">

        {/* <AddUser/> */}

        </div>
        {/* <Edit fname="znavo" lname="ardai" age={28} email="znavo@gmail.com" password={123456}/> */}
        {/* <button onClick={this.editOrAdd} id="btn">add</button> */}

        <UserTable/>
    </>
    )
}

}
export default Home;