
import { useLocation, useNavigate } from "react-router-dom";

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useForm } from "react-hook-form";
import UseToken from "../../../Hooks/useToken";
import Loading from "../../Others/Loading";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Signup = () => {
  const [createUserWithEmailAndPassword, cuser, cloading, cerror] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  let signupError;

  const [token] = UseToken(cuser || guser);

  if (cloading || gloading) {
    return <Loading />
  };

  if (cerror || gerror) {
    signupError = <p className="text-red-700">{cerror?.message || gerror?.message}</p>
  };


  if (token) {
    navigate(from, { replace: true });
    toast.success("Signin User Successfully")
  };


  const handleSignupform = async (data) => {
    const displayName = data.displayName;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password)
    verifyEmail()
    await updateProfile({ displayName: displayName })
      .then(() => {
        reset();
      })
  }


  const handleGoogleSignin = async () => {
    await signInWithGoogle()
  }


  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        toast.success('email sent')
      })
  }



  return (
    <div className="w-full bg-slate-300 py-10">
    <div className="w-5/6 md:w-2/4 bg-white mx-auto text-center rounded">
      <h2 className="font-bold text-black text-2xl py-5">Create Account</h2>
      <div className="py-5">
        <button onClick={handleGoogleSignin}>
          <FaGoogle
            className="mx-3 w-12 h-12 p-2 rounded-full border hover:bg-green-700 hover:text-white"
            size="1x"
            color="gray"
          />
        </button>

      </div>
      <span className="text-gray-400">or use your account</span>
      <form
        onSubmit={handleSubmit(handleSignupform)}
        action=""
        className="py-3"
      >
        <input
          {...register("displayName")}
          type="text"
          placeholder="Enter Your Name"
          required
          className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Enter Your Email"
          required
          className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Enter Your Password"
          required
          className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
        />
        {signupError}
        <input
          className="btn btn-outline px-7 btn-natural my-5 block mx-auto"
          type="submit"
          value="SIGN UP"
        />
      </form>
    </div>
    </div>
  );
};

export default Signup;