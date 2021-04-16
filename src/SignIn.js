import 'font-awesome/css/font-awesome.min.css';
import { auth } from "./firebase";
import firebase from "firebase";


const sighInWithGoogle = () =>
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn = () => (
    <div className='signInDiv'>
    <button className="signInButton"onClick={sighInWithGoogle}>Sign In With Google</button>
    </div>
);

export default SignIn