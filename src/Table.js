import React from "react";
import "./index.css";

export default class Table extends React.Component {
    constructor(prop){
        super(prop);
        this.state = {

        };
    }
    render() {
        console.log(this.props.listUser);
        const listUser = this.props.listUser.map((item,index)=>{
            return <tr>
                <td>{index}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.email}</td>
            <td>Delete</td>
        </tr>
        })
        return(
            <table>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Optional</th>
                </tr>
               {listUser}
            </table>
        );
    }
}