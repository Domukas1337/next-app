
import { useCallback, useState } from "react";
import Input from "../Login/input";
import LoginMenu from "../Login/LoginMenu";
import useLoginModal from "../../../hooks/useLoginModal";

const LoginModal = () => {

  const loginModal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);


      loginModal.onClose();
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }, [email, password, LoginModal]);

  const onToggle = useCallback(() => {
    loginModal.onClose();
    loginModal.onOpen();
  }, [LoginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}  
      />
      <Input 
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading} 
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>First time using Twitter?
        <span 
          onClick={onToggle} 
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
          > Create an account</span>
      </p>
    </div>
  )

  return (
    <LoginMenu
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;