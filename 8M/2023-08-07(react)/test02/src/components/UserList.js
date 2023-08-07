import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebaseApi";
import { useEffect, useState } from "react";

function UserList() {
  const [userList, setUserList] = useState([]);
  useEffect(function() {
    async function getUserArray() {
        onSnapshot(query (collection(db, "users")), (querySnapshot) => {
            let newArr = [];
            querySnapshot.forEach((doc) => {
              let user = doc.data();
              user.id = doc.id;
              newArr.push(user);
            });
            setUserList(newArr);
          });
    }
    getUserArray();
  }, []);
  return (
    <>
      <h2>유저 목록</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Born</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.first}</th>
                <th>{user.last}</th>
                <th>{user.born}</th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <address>KCH Full-Stack Development</address>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default UserList;
