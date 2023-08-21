// components/UserList.js
import { collection, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseApi";
import { Table } from "react-bootstrap";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const q = query(collection(db, "users"));
        onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                let user = doc.data();
                user.id = doc.id;
                users.push(user);
            });
            setUsers(users);
        });
    }, []);

    return (<>
        <h2>User List</h2>
        <Table responsive striped bordered>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
            </tr>
            {
                users.map((user)=> {
                    return ( <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>);
                })
            }
        </Table>
    </>);
}

export default UserList;