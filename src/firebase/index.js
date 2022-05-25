import { db } from '../firebase-config';
import { collection, getDocs, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';

const holdersRef = collection(db, "holders");

export const getHolders = async () => {
    const data = await getDocs(holdersRef);
    let holders =  data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).sort(function(a, b){return b.pieces_owned-a.pieces_owned});
    return holders;
}

export const createNewHolder = async (address, num, ens) => {
    await addDoc(holdersRef, { address: address, pieces_owned: num, ens_name: ens });
}

export const updateHolder = async (address, num) => {
    const userDoc = doc(db, "holders", address);

    const updatedFields = { pieces_owned: pieces_owned + num };
    await updateDoc(userDoc, updatedFields);
}

export const checkHolderExists = async (address) => {
    const docRef = doc(db, "holders", address);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
}