import { Button, Label, TextInput, } from 'flowbite-react';
import { Alert } from '@mui/material';
import { useContext, useState } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function SignUp() {
    const { createUser } = useContext(AuthProvider);
    const [successMsg, setSuccessMsg] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const name = `${firstName} ${lastName}`
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photoUrl.value;

        setSuccessMsg('')
        setErrMsg('')

        if (password.length < 6) {
            setErrMsg("Password should be at least 6 characters")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrMsg("Password must have at least one uppercase letter");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrMsg("Password must have at least one lowercase letter");
            return;
        }

        createUser(email, password, name)
            .then((newUser) => {
                updateProfile(newUser.user, {
                    displayName: name,
                    photoURL: photo,
                })
                setSuccessMsg(`Hello ${firstName}, You have successfully created your account`);
                // send data to server
                const createdAt = newUser.user?.metadata?.creationTime
                const user = {email, name, createdAt}
                fetch('https://monaem-backend.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(() => {
                        toast.success(`${email} added successfully`)
                    })
            })
            .catch((error) => {
                if (error.code == "auth/email-already-in-use") {
                    setErrMsg("Your have already created account with this email")
                } else if (error.code == "auth/invalid-email") {
                    setErrMsg("Enter a valid email address")
                }
                else {
                    setErrMsg("We are unable to create your account. Please contact with the administrator")
                    console.log(error.code);
                }
            })
    };

    return (
        <section className='max-w-sm mx-auto md:py-30 py-20'>
            <div className='mb-5'>
                {successMsg ? <Alert severity="success">{successMsg}</Alert> : ''}
                {errMsg ? <Alert severity="error">{errMsg}</Alert> : ''}
            </div>
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="firstName"
                                value="First Name"
                            />
                        </div>
                        <TextInput
                            id="firstName"
                            placeholder="Monaem"
                            required
                            type="text"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="lastName"
                                value="Last Name"
                            />
                        </div>
                        <TextInput
                            id="lastName"
                            placeholder="Hossain"
                            required
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Email Address"
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
                            value="Create password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        required
                        type="password"
                        placeholder="******"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoUrl"
                            value="Your photo url"
                        />
                    </div>
                    <TextInput
                        id="photoUrl"
                        placeholder="https://expample.com/yourphoto.jpg"
                        required
                        type="text"
                    />
                </div>
                <Button type="submit" className='dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black text-black border-2 border-black hover:bg-darkTheme hover:text-white transition-all'>
                    Sign up
                </Button>

                <div className="grid justify-end">
                    <p>Already Have Account? <NavLink to='/sign-in' className='text-blue-500'>Sign In Here</NavLink></p>
                </div>
            </form>
            <Toaster />
        </section>
    )
}