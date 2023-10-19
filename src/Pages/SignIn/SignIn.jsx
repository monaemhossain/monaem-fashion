
'use client';


import { Button, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const { signInUser } = useContext(AuthProvider);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((user) => {
                console.log(user.user);
                navigate(location?.state?location.state : '/');
            })
            .catch(error => {
                console.log(error)
            })
    };

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
                <div className="grid justify-end">
                    <p className='text-right'>Already Have Account? <NavLink to='/sign-up' className='text-blue-500'>Sign Up Here</NavLink></p>
                </div>
            </form>
        </section>
    )
}