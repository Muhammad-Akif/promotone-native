import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAto3Pn_2x6t4jBvkGZAnEZZbEybz6Ue8",
  authDomain: "promotone-97133.firebaseapp.com",
  projectId: "promotone-97133",
  storageBucket: "promotone-97133.appspot.com",
  messagingSenderId: "371813555707",
  appId: "1:371813555707:web:e7aa0b86ff0a004b66bf5e",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}

const auth = firebase.auth();
const firestore = firebase.firestore();

const createUserDocument = async (user: any, additionalData: any) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName } = additionalData;

    try {
      userRef.set({
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (e) {
      console.log("error creating user", e);
    }
  } else {
    try {
      userRef.update({ ...additionalData });
    } catch (e) {
      console.log("error modifying user", e);
    }
  }
};
const getPosts = async () => {
  try {
    const postRef = firestore.collection(`posts`);
    const postSnapshot = await postRef.get();

    let posts = await Promise.all(
      postSnapshot.docs.map(async (doc) => {
        let indivDoc: any = doc.data();
        const brandRef = firestore.doc(`brand/${indivDoc.brandId}`);
        const brandSnapshot = await brandRef.get();
        let indivBrand: any = brandSnapshot.data();
        const userRef = firestore.doc(`users/${indivDoc.assignedToUserId}`);
        const userSnapshot = await userRef.get();
        let indivUser: any = userSnapshot.data();
        let payload = { ...indivBrand, ...indivDoc, id: doc.id, ...indivUser };

        return payload;
      })
    );
    console.log("all posts", posts);

    return posts;
  } catch (err) {
    console.log("Error on getting posts", err);
  }
};
const updatePostState = async (post: any, state: number) => {
  const postRef = firestore.doc(`posts/${post.id}`);
  const snapshot = await postRef.get();
  let data = snapshot.data();
  data = { ...data, state };
  console.log(data);
  if (snapshot.exists) {
    try {
      await postRef.update({ ...data });
    } catch (e) {
      console.log("error modifying post state", e);
    }
  }
};

export { auth, createUserDocument, getPosts, updatePostState };
