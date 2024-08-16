import { useContext } from "react";
import { AuthContexts } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { continueWithGoogle, registerWithEmail } = useContext(AuthContexts);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    registerWithEmail(e.target.email.value, e.target.password.value)
    .then(()=>{
        navigate("/")
    })
    .catch(err=>console.log(err))
  }

  const handleGoogle = () => {
    continueWithGoogle()
    .then(() => {
        navigate("/")
    });
  }

  return (
    <div className="flex justify-center items-center p-20">
      <form onSubmit={handleLogin} className="border py-10 px-20">
        <h2 className="text-center text-2xl border py-2 mb-2">Sign Up</h2>
        <div className="mb-2">
          <h4 className="text-xl mb-2">Email:</h4>
          <input
          name="email"
            className="border px-4 py-2 outline-none"
            placeholder="Your email..."
            type="text"
            required
          />
        </div>
        <div className="mb-2">
          <h4 className="text-xl mb-2">Password:</h4>
          <input
          name="password"
            className="border px-4 py-2 outline-none"
            placeholder="Password..."
            type="text"
            required
          />
        </div>
        <button className="w-full mb-6 py-2 bg-blue-400 text-gray-200">
          Register
        </button>
        <p className="mb-4">Dont have an account? <Link className="text-blue-700" to="/signin">Signin</Link></p>
        <button type="button"
          onClick={handleGoogle}
          className="w-full py-2 bg-[#4285F4] text-gray-200">
          Continue With Google
        </button>
      </form>
    </div>
  );
};

export default Register;