import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseApi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";
import { addUser } from '../firebaseAction';


function UserForm() {
    function onSubmitHandler(e) {
        e.preventDefault();
        addUser ("users", {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        });
    }

    return (<>
        <h2>사용자 정보 입력</h2>
        <Form onSubmit={onSubmitHandler}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="name">Name</InputGroup.Text>
                <Form.Control
                placeholder="name"
                aria-label="name"
                aria-describedby="name"
                name="name"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="email">Email</InputGroup.Text>
                <Form.Control
                placeholder="email"
                aria-label="email"
                aria-describedby="email"
                name="email"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="phone">Phone</InputGroup.Text>
                <Form.Control
                placeholder="phone"
                aria-label="phone"
                aria-describedby="phone"
                name="phone"
                />
            </InputGroup>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    </>);
}

export default UserForm;