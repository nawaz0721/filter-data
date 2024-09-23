import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="my-10">
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
        <Button color="primary" auto rounded size="lg" className="w-1/2">
          Sign up
        </Button>
        <h1 className="my-8 text-center">OR</h1>
        <Button color="primary" auto rounded size="lg" className="w-1/2">
          Sign up With Google
        </Button>
      </form>
    </div>
  );
}

export default Signup;
