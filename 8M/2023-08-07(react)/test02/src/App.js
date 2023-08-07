import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {

  return (
    <div>
      <h1>회원 정보 Firestore 예제</h1>
      <UserForm />
      <UserList />
    </div>
  );
}



export default App;
