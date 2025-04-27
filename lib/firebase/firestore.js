import { PRODUCTS } from '../utils/mockData';
import {db} from './index'

import { collection, getDocs, addDoc, doc, getDoc, query, orderBy, where,onSnapshot, and, or, serverTimestamp, limit, setDoc} from "firebase/firestore";



export const initFirebaseFirestore = async () =>{
   // Add a new document with a generated id.
//    PRODUCTS.forEach(async (product)=>{
//     const docRef = await addDoc(collection(db, "products"), product);
//     console.log("Document written with ID: ", docRef.id);
//    })
        console.log("La taille du tableau est ", PRODUCTS.length)
}



function applyQueryFilters(q, { category, city, price, sort }) {
    if (category) {
            q = query(q, where("category", "==", category));
    }
    if (city) {
            q = query(q, where("city", "==", city));
    }
    if (price) {
            q = query(q, where("price", "==", price.length));
    }
    if (sort === "Rating" || !sort) {
            q = query(q, orderBy("avgRating", "desc"));
    } else if (sort === "Review") {
            q = query(q, orderBy("numRatings", "desc"));
    }
    return q;
}

export const getProducts = async () =>{
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}


export function getProductsSnapshot(callback, filters = {}) {
    if (typeof callback !== "function") {
            console.log("Error: The callback parameter is not a function");
            return;
    }

    let q = query(collection(db, "products"));
    q = applyQueryFilters(q, filters);

    const unsubscribe = onSnapshot(q, querySnapshot => {
            const results = querySnapshot.docs.map(doc => {
                    return {
                            id: doc.id,
                            ...doc.data(),
                            // Only plain objects can be passed to Client Components from Server Components
                            timestamp: doc.data().timestamp.toDate(),
                    };
            });

            callback(results);
    });

    return unsubscribe;
}


export async function getProductsDoc(callback, filters={}){
        console.log("Filters applied ", filters)
        const products = []
        let q = query(collection(db, "products"));
        if(filters?.min_price){
                const minPrice = Number(filters.min_price)
                const maxPrice = Number(filters.max_price)
                q = query(q, and (where("price" , ">=" , minPrice), and (where("price" , "<=" , maxPrice))))
        }
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
                const ref = doc.id
                const product = doc.data()
            products.push({
                ...product,
                ref
            })
        });

        callback(products)

}


export async function saveUser (user) {
    const docRef = await addDoc(collection(db, "users"), {...user, timestamp: serverTimestamp()});
    console.log("Document written with ID: ", docRef.id);
    return docRef.id
}

export async function saveUserPayment (user, paymentInfos) {
        let payload = {
                ...paymentInfos,
                uid: user.uid,
                status: -1 
        }
        const docRef = await addDoc(collection(db, "payments"), {...payload, timestamp: serverTimestamp()});
        console.log("Document written with ID: ", docRef.id);
        return docRef.id
}

export async function updateUserPayment(ref, status, callback){
        const q = query(collection(db, "payments"),  where('ref', '==', ref), limit(1));
        const querySnapshot = await getDocs(q);
        const doc = querySnapshot.docs[0]
        let data =  doc.data()
        const docRef = doc.id

        let payment = {
                ...data,
                status: status
        }
        const paymentRef = doc(db, "payments", docRef);
        const docSnap = await setDoc(paymentRef, payment);
        callback(docSnap)
}


export async function getLatestProducts(callback){
        const products = []
        const q = query(collection(db, "products"), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
                const ref = doc.id
                const product = doc.data()
                products.push({
                        ...product,
                        ref
                })
        });

        callback(products.slice(0, 5))

}

export async function getFeaturedProducts(callback){
        const products = []
        const q = query(collection(db, "products"), where("is_featured", "==", true));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
                const ref = doc.id
                const product = doc.data()
                products.push({
                        ...product,
                        ref
                })
        });

        callback(products)

}

export async function getCategories(callback, filters={}){
        const categories = []
        let q = query(collection(db, "categories"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const ref = doc.id
            const cats = doc.data()
            categories.push({
                ...cats,
                ref,
            })

        });

        callback(categories)
    }

export async function getProductById(ref, callback){

        const docRef = doc(db, "products", ref);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
                const product = docSnap.data()
                callback({...product, ref})
        } else {
                // docSnap.data() will be undefined in this case
               callback({})
        }

}

export async function getUserByUID(uid, callback){
        const q = query(collection(db, "users"),  where('uid', '==', uid), limit(1));
        const querySnapshot = await getDocs(q);
        const doc = querySnapshot.docs[0]
        let data =  doc.data()
        const ref = doc.id
        let user = {
                ...data, ref
        }
        callback(user)

}

export async function updateUserDetails(ref, userDetails, callback){
        const docRef = doc(db, "users", ref);
        const docSnap = await setDoc(docRef, userDetails);
        callback(userDetails)
}
    


// export async function getCurrentUser (){

//         const user = auth.CurrentUser;
// if (user != null) {
//         name = user.DisplayName;
//         email = user.Email;
//         // System.Uri photo_url = user.PhotoUrl;
//         // The user's Id, unique to the Firebase project.
//         // Do NOT use this value to authenticate with your backend server, if you
//         // have one; use User.TokenAsync() instead.
//         // uid = user.UserId;
// }

// }

export async function getCurrentUser(){


}


