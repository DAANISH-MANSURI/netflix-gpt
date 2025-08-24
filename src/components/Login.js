import {useState, useRef} from 'react' 
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import inflixcover from "../images/INFLIX_COVER1.jpg";
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [passMatch, setPassMatch] = useState(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    const message = checkValidData(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(message);
    console.log(message);
    if(isSignIn===false){
      if(passwordRef.current.value !== confirmPasswordRef.current.value) {
        setPassMatch("Passwords do not match");
      }
    }
    if(message) return;
    if(!isSignIn){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });

    }
    else{
      //Sign In Logic
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

    }

  };

  return (
    <div className="w-screen h-screen relative flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
  <img
    className="w-full h-full object-cover"
    src={inflixcover}
    alt="netflix-background-image"
  />
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/50"></div>
</div>
     {/* Header always clear */}
  <div className="relative z-10">
    <Header />
  </div>

      
      
{/* Form Centered */}
<div className="flex flex-1 items-center justify-center text-white  overflow-y-auto p-8">
  <div className="p-8 bg-black/60 rounded-lg w-[450px] max-h-[800px] flex flex-col justify-between mt-auto">

    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full space-y-4">
      <h1 className="login_name text-3xl font-bold text-[red]">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      {isSignIn===false && 
      <div className='input-wrapper rounded'>
      <input
        type="text"
        placeholder="Enter Full Name"
        className="w-full p-3 rounded bg-zinc-800/80 
                   text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-red-600"
      /></div> }
      <div className="input-wrapper rounded">
      <input
        ref={emailRef}
        type="email"
        placeholder="Email or mobile number"
        className=" w-full p-3 rounded bg-zinc-800/80 
                   text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-red-600"
        onChange={() => setErrorMessage(null)}
      />
      </div>
      <p className='text-red-600 font-bold text-lg'>{isSignIn===false? errorMessage : null}</p>
      <div className='input-wrapper rounded'>
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="w-full p-3 rounded bg-zinc-800/80 
                   text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-red-600"
        onChange={() => {
                 setErrorMessage(null);
                 setPassMatch(null);
  }}
      /></div>
        {isSignIn===false && <div className='input-wrapper rounded'>
        <input
        ref={confirmPasswordRef}
        type="password"
        placeholder="Confirm Password"
        className="w-full p-3 rounded bg-zinc-800/80 
                   text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-red-600"
        onChange={() => setPassMatch(null)}
      /></div>}
      <p className='text-red-600 font-bold text-lg'>{isSignIn? errorMessage : passMatch}</p>

      <button onClick={handleButtonClick} className="w-full bg-red-700 p-3 rounded font-semibold hover:bg-[#FF001E] transition">
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>

      <h1 className="text-center text-lg">OR</h1>

      <button className="w-full bg-zinc-800/80 p-3 rounded hover:bg-zinc-700 transition">
        Use a sign-in code
      </button>

      <button className="w-full text-center">
        <span className="border-b border-white">Forgot Password</span>
      </button>
    </form>

    {/* Checkbox + Signup link same alignment */}
    <div className="flex flex-col w-full space-y-4 mt-6">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="
            appearance-none relative h-5 w-5 
            border border-white/30 bg-black/60 
            hover:border-white hover:cursor-pointer
            checked:bg-white checked:border-white 
            transition duration-200
            flex items-center justify-center
            after:content-['✓'] after:absolute after:text-black after:opacity-0
            checked:after:opacity-100
          "
        />
        <span className="text-white">Remember me</span>
      </label>

      <span>

        {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
        <button onClick={toggleSignIn} className="text-red-600 font-bold hover:underline">
          {isSignIn ? "Sign up now" : "Sign in now"}
        </button>
      </span>
    </div>
  </div>
</div>


    </div>
  );
};


export default Login