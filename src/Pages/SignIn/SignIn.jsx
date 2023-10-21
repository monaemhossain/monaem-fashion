import { Button, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Divider } from '@mui/material';

export default function SignIn() {
    const { signInUser, signInWithGoogle } = useContext(AuthProvider);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(() => {
                toast.success("Successfully logged in with email and password")
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => toast.error("Invalid email or password"))
    }
    const handleGoogleLogin = (e) => {
        e.preventDefault()
        signInWithGoogle()
            .then((googleUser) => {
                const user = googleUser.user
                const email = user.email;
                const name = user.displayName
                const createdAt = user?.metadata?.creationTime
                const setUserToDB = { email, name, createdAt }
                fetch('https://monaem-backend.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(setUserToDB)
                })
                    .then(res => res.json())
                    .then(() => {
                        toast.success(`${email} added successfully`)
                    })
                toast.success("Successfully logged in with Google")
            })
            .catch(() => toast.error("Something went wrong"))
    }

    return (
        <section className='max-w-sm mx-auto md:py-40 py-20'>
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        placeholder="name@mail.com"
                        required
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        required
                        type="password"
                        placeholder="******"
                    />
                </div>

                <Button type="submit" className='dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black text-black border-2 border-black hover:bg-darkTheme hover:text-white transition-all'>
                    Sign in
                </Button>
                <Divider className='dark:text-white'>or</Divider>
                <div className='grid justify-center items-center'>
                    <button onClick={handleGoogleLogin}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                    </button>
                </div>
                <div className="grid justify-center">

                    <p className='text-right dark:text-white'>Already Have Account? <NavLink to='/sign-up' className='text-blue-500'>Sign Up Here</NavLink></p>
                </div>
            </form>
            <Toaster />
        </section>
    )
}