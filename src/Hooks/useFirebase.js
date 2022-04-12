// import { useState } from "react";
// import auth from "../firebase.init";
// import {
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithPopup,
// } from "firebase/auth";

// const useFirebase = () => {
//   const [user, setUser] = useState({});
//   const googleProvider = new GoogleAuthProvider();

//   const handleGoogle = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       setUser(user);
//     } else {
//       setUser({});
//     }
//   });

//   return { user, handleGoogle };
// };

// export default useFirebase;
