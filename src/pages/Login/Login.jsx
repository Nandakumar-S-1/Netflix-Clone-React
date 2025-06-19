import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import { toast } from "react-toastify"; 

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


const user_auth = async (event) => {
  event.preventDefault();

  if (!email || !password || (signState === "Sign Up" && !name)) {
    toast.error("Please fill in all required fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters.");
    return;
  }

  setLoading(true);
  
  // Clear previous toast messages
  toast.dismiss();
  
  try {
    if (signState === "Sign In") {
      await login(email, password);
      //  small delay to ensure Firebase auth state is updated
      setTimeout(() => {
        toast.success("Login successful!");
      }, 100);
    } else {
      await signup(name, email, password);
      setTimeout(() => {
        toast.success("Account created successfully!");
      }, 100);
    }
  } catch (error) {
    console.log("Firebase Error:", error);
    const errorCode = error.code || "";
    const errorMessage = error.message || "";
    
    if (errorCode === "auth/user-not-found") {
      toast.error("No account found with this email address");
    } else if (errorCode === "auth/wrong-password" || errorCode === "auth/invalid-credential") {
      toast.error("Incorrect password. Please try again.");
    } else if (errorCode === "auth/email-already-in-use") {
      toast.error("This email is already registered. Please sign in instead.");
    } else if (errorCode === "auth/weak-password") {
      toast.error("Password is too weak. Please choose a stronger password.");
    } else if (errorCode === "auth/invalid-email") {
      toast.error("Please enter a valid email address.");
    } else if (errorCode === "auth/too-many-requests") {
      toast.error("Too many failed attempts. Please try again later.");
    } else if (errorCode === "auth/network-request-failed") {
      toast.error("Network error. Please check your connection.");
    } else {
      toast.error("Authentication failed. Please try again.");
    }
  } finally {
    setLoading(false); 
  }
};

  // const user_auth = async (event) => {
  //   event.preventDefault();

  //   if (!email || !password || (signState === "Sign Up" && !name)) {
  //     toast.error("Please fill in all required fields.");
  //     return;
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     toast.error("Please enter a valid email address.");
  //     return;
  //   }

  //   if (password.length < 6) {
  //     toast.error("Password must be at least 6 characters.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     if (signState === "Sign In") {
  //       await login(email, password);
  //       toast.success("Login successful!");
  //     } else {
  //       await signup(name, email, password);
  //       toast.success("Account created successfully!");
  //     }
  //   } catch (error) {
  //     toast.error(error.message || "Authentication failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return loading ? (
    <div className="login-spinner">
      <img src={netflix_spinner} alt="Loading..." />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-from">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
          />
          <button type="submit">{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label> Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
