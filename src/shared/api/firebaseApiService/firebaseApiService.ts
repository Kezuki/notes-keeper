import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    doc,
    getDoc,
    getFirestore,
    setDoc,
    updateDoc,
} from "firebase/firestore";

export const FirebaseApiService = {
    signUpWithEmail(email: any, password: any) {
        localStorage.setItem("login", "email");
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    },

    loginWithEmail(email: any, password: any) {
        localStorage.setItem("login", "email");
        signInWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    },

    loginWithGoogle() {
        localStorage.setItem("login", "google");
        signInWithPopup(getAuth(), new GoogleAuthProvider())
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    },

    singOut() {
        localStorage.removeItem("login");
        signOut(getAuth())
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    },

    async getData(collection: any, document: any, callback: any) {
        const db = getFirestore();
        const dataRef = doc(db, collection, document);
        const docSnap = await getDoc(dataRef);

        await callback(docSnap.data());
    },

    setData(collection: any, document: any, data: any) {
        const db = getFirestore();
        setDoc(doc(db, collection, document), data);
    },

    updateData(collection: any, document: any, data: any) {
        const db = getFirestore();
        const dataRef = doc(db, collection, document);

        updateDoc(dataRef, data);
    },
};
