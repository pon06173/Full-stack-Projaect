import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseApi";


export async function addUser(collectionName, userData) {
    try {
        const docRef = await addDoc (collection (db, collectionName, ), userData);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}