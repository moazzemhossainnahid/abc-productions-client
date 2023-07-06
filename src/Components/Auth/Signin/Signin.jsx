import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Signin.css';

import google from '../../../assets/Google-Logo.png';

import { toast } from 'react-toastify';
import Loading from '../../Others/Loading';
import { useForm } from 'react-hook-form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { GiCancel } from "react-icons/gi";
import UseToken from '../../../Hooks/useToken';

const Signin = () => {
  const [signInWithEmailAndPassword, suser, sloading, serror] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [token] = UseToken();
  const { register, handleSubmit, reset, errors } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef()
  //////////
  let someErrorMessages;
  const getFirebaseErrorMessages = (firebaseMessage) => {
    const messages = firebaseMessage?.split("/")[1].split(")")[0]
    someErrorMessages = messages;
  }

  if (serror || gerror) {

    if (serror) getFirebaseErrorMessages(serror?.message)
    if (gerror) getFirebaseErrorMessages(gerror?.message)
  } else {
    someErrorMessages = null
  }
  ///////


  const from = location.state?.from?.pathname || '/';




  if (sloading || gloading) {
    return <Loading />
  }

  // if (serror || gerror || giterror || ferror) {
  //     signinError = <p className="text-red-700">{serror?.message || gerror?.message || giterror?.message || ferror?.message}</p>
  // }

console.log(token);

  if (token) {
    navigate(from, { replace: true });
    toast.success("Signin User Successfully")
  }

  const handleSigninform = async (data) => {
    const email = data.email;
    const password = data.password;
    await signInWithEmailAndPassword(email, password)
      .then(() => {
        reset();
      })
  }


  const handleGoogleSignin = async () => {
    await signInWithGoogle()
  }

  const handleReset = async () => {
    const email = emailRef.current.value
    await sendPasswordResetEmail(email)
    toast.success(`Email Sent to ${email}!`);
  }


  return (
    <div className="w-full bg-slate-300 py-10 ">
      <div className="w-5/6 md:w-2/4 mx-auto bg-white text-center rounded">
        <h2 className="font-bold text-black text-2xl py-5">Sign In</h2>
        {/* start some error message  */}
        {
          someErrorMessages &&
          <div className="some-error-message p-4 m-4 w-2/3 mx-auto bg-red-100  text-red-600 border rounded-lg text-sm  flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {someErrorMessages}
          </div>
        }
        {/* end  */}

        <div className="py-5 w-4/5 md:w-2/5 mx-auto">
          <div
            onClick={handleGoogleSignin}
            className="flex items-center justify-center border rounded py-2 my-2 cursor-pointer hover:bg-gray-300"
          >
            <img className="w-6" src={google} alt="" />
            <span className="pl-2">Continue With Google</span>
          </div>
        </div>
        <span className="text-gray-500">or use your account</span>
        <form
          onSubmit={handleSubmit(handleSigninform)}
          action=""
          className="py-3"
        >
          <input
            {...register("email", {
              required: { value: true, message: "Email is Required" },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Provide a Valid Email",
              },
            })}
            required
            type="email"
            placeholder="Enter Your Email"
            className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs"
          />
          <label htmlhtmlFor="email">
            {errors?.email?.type === "required" && (
              <span className="text-red-700">{errors.email?.message}</span>
            )}
          </label>
          <label htmlhtmlFor="email">
            {errors?.email?.type === "pattern" && (
              <span className="text-red-700">{errors.email?.message}</span>
            )}
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Enter Your Password"
            required
            className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs"
          />
          <span className="text-gray-400 hover:text-accent">
            <label for="reset-pass-modal" className="btn text-xs modal-button capitalize btn-link btn-xs p-0">
              forgot Your Password?
            </label>
          </span>
          {/* {signinError} */}
          <input
            className="btn btn-outline px-7 btn-natural my-5 block mx-auto"
            type="submit"
            value="SIGN IN"
          />
        </form>
        <p className="text-gray-800 mt-1 text-center pb-5">Not an Account? <Link to="/signup"
          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Sign Up</Link>
        </p>
        <>
          <input type="checkbox" id="reset-pass-modal" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box relative">
              <label for="reset-pass-modal" className="absolute right-4 top-4">
                <GiCancel className="text-2xl" />
              </label>
              <h3 className="font-bold text-lg">Reset Your Password</h3>
              <div className="form-control">
                <input
                  required
                  type="email"
                  name="rsemail"
                  placeholder="Enter Your Email Address"
                  className="input input-bordered input-icon text-base mb-1 focus:outline-none mt-4"
                />
              </div>
              <div className="form-control">
                <button onClick={handleReset} className="btn btn-neutral text-white">Reset</button>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Signin;