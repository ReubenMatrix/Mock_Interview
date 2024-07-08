import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from '../components/Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthenticationHeader from '../components/AuthenticationHeader';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    name: name,
                    email: user.email,
                    createdAt: new Date()
                });
            }
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <div className="max-w-md w-full space-y-4 px-4">
                <AuthenticationHeader title="Sign Up" content="Create your account to get started." />
                <form className="bg-white shadow-md rounded-lg p-6" onSubmit={handleRegister}>
                    <div className="space-y-4">
                        <InputField id="name" label="Name" placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
                        <InputField id="email" type="email" label="Email" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)} />
                        <InputField id="password" type="password" label="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mt-6">
                        <Button title="Sign Up" />
                    </div>
                </form>
            </div>
        </div>
    );
}
