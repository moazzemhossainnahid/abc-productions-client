import { signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from "../../../firebase.init";

const useFirebase = () => { 
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passError, setPassError] = useState('');
const [conPassError, setConPassError] = useState('');
const [errorElement, setErrorElement] = useState('');

const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
const [signInWithGoogle, error] = useSignInWithGoogle(auth);
const [signInWithGithub] = useSignInWithGithub(auth);
const [user, loading] = useAuthState(auth);
const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || "/";


const handleEmailInput = (event) => {
    setEmail(event.target.value);
}
    
const handlePasswordInput = (event) => {
    setPassword(event.target.value);
}
    
const handleConfirmPasswordInput = (event) => {
    setConfirmPassword(event.target.value);
}

const handleSignUpForm = (event) => {
    event.preventDefault();


    if(password !== confirmPassword){
        setConPassError('Password & Confirm Password Not Matched!')
        return;
    }if(password.length < 8){
        setPassError('Password must be at least 8 Charecters')
        return;
    }else{
        setPassError("");
        setConPassError("");
    }

    if(error){
        setErrorElement(error.message);
    }

    createUserWithEmailAndPassword(email, password)
    .then( () => {
        navigate(from, {replace:true})
    })
}

const handleSignInForm = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
    .then(() => {
        navigate(from, {replace:true})
    })
}

const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(() => {
        navigate(from, {replace:true})
    })
}

const handleGithubSignIn = () => {
    signInWithGithub()
    .then(() => {
        navigate(from, {replace:true})
    })
    
}

const handleSignOut= () => {
    signOut(auth)
    navigate('/')
}

const handlePasswordReset = async () => {
    await sendPasswordResetEmail(email)
    toast('Password Reset Email Sent')
}



    return {
        user,
        loading,
        error,
        emailError,
        passError,
        conPassError,
        handleEmailInput,
        handlePasswordInput,
        handleConfirmPasswordInput,
        handleSignUpForm,
        handleSignInForm,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignOut,
        handlePasswordReset,
    };
};

export default useFirebase;