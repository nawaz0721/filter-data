import { Input, Button } from "@nextui-org/react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    // implement your logic here
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result", result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user", user);
        navigate("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // alert(errorCode, errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignup = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/signin");
        setLoading(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        setLoading(false);
        // ..
      });
  };
  return (
    <div className="my-10 signup-container">
      <form className=" flex flex-col items-center">
        <Input
          isRequired
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          className="w-2/3 sm:w-full self-center my-4"
        />
        <Input
          isRequired
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          className="w-2/3 sm:w-full self-center my-4"
        />
        <Input
          isRequired
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          className="w-2/3 sm:w-full self-center my-4"
        />
        <Button
          onClick={handleSignup}
          color="primary"
          auto
          rounded
          size="lg"
          className="w-1/2"
          style={{ background: "yellow", color: "black" }}
        >
          Sign up
        </Button>
        <h1 className="my-8 text-center">OR</h1>
        <Button
          onClick={handleSignInWithGoogle}
          color="primary"
          auto
          rounded
          size="lg"
          className="w-3/2"
          style={{ background: "yellow", color: "black" }}
        >
          Sign up With Google
        </Button>
      </form>
    </div>
  );
}

export default Signup;
