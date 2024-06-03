import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './SignupFormPage.css'

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleEmail = (e) => {setEmail(e.target.value)}
    const handleUsername = (e) => {setUsername(e.target.value)}
    const handleFirstName = (e) => {setFirstName(e.target.value)}
    const handleLastName = (e) => {setLastName(e.target.value)}
    const handlePassword = (e) => {setPassword(e.target.value)}
    const handleConfirmPassword = (e) => {setConfirmPassword(e.target.value)}

    if (sessionUser) return <Navigate to="/" replace={true} />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors({})
            return dispatch(
                sessionActions.signup({
                    email, username, firstName, lastName, password
                })
            ).catch(async (res) => {
                const data = await res.json();
                if (data?.errors) {
                    setErrors(data.errors);
                }
            });
        }
        return setErrors({
            confirmPassword: "Password fields should match"
        });
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="text" value={email} onChange={handleEmail}/>
                </label>
                {errors.email && <p>{errors.email}</p>}

                <label>
                    UserName
                    <input type="text" value={username} onChange={handleUsername} />
                </label>
                {errors.userName && <p>{errors.userName}</p>}

                <label>
                    First Name
                    <input type="text" value={firstName} onChange={handleFirstName} />
                </label>
                {errors.firstName && <p>{errors.firstName}</p>}

                <label>
                    Last Name
                    <input type="text" value={lastName} onChange={handleLastName} />
                </label>
                {errors.lastName && <p>{errors.lastName}</p>}

                <label>
                    Password
                    <input type="password" value={password} onChange={handlePassword} />
                </label>
                {errors.password && <p>{errors.password}</p>}

                <label>
                    Confirm Password
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword} />
                </label>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                <button type="submit">Sign Up</button>
            </form>
        </>
    );
}

export default SignupFormPage;
