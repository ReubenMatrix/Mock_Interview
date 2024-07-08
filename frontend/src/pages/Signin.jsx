import React, { useState } from 'react';
import AuthenticationHeader from '../components/AuthenticationHeader';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { auth } from '../components/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <div className="max-w-md w-full space-y-4 px-4">
                <AuthenticationHeader title="Sign In" content="Sign in to your account." />
                <form className="bg-white shadow-md rounded-lg p-6" onSubmit={handleSignin}>
                    <div className="space-y-4">
                        <InputField id="email" type="email" label="Email" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)} />
                        <InputField id="password" type="password" label="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mt-6">
                        <Button title="Sign In" />
                    </div>
                </form>
            </div>
        </div>
    );
}
