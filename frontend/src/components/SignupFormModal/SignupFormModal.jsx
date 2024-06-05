import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal'
import './SignupForm.css'

function SignupFormModal() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();

    const handleEmail = (e) => {setEmail(e.target.value)}
    const handleUsername = (e) => {setUsername(e.target.value)}
    const handleFirstName = (e) => {setFirstName(e.target.value)}
    const handleLastName = (e) => {setLastName(e.target.value)}
    const handlePassword = (e) => {setPassword(e.target.value)}
    const handleConfirmPassword = (e) => {setConfirmPassword(e.target.value)}

    // if (sessionUser) return <Navigate to="/" replace={true} />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors({})
            return dispatch(
                sessionActions.signup({
                    email, username, firstName, lastName, password
                })
            )
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json();
                if (data?.errors) {
                    setErrors(data.errors);
                }
            });
        }
        return setErrors({
            confirmPassword: "Password fields must match"
        });
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="text" value={email} onChange={handleEmail} required/>
                </label>
                {errors.email && <p>{errors.email}</p>}

                <label>
                    UserName
                    <input type="text" value={username} onChange={handleUsername} required/>
                </label>
                {errors.userName && <p>{errors.userName}</p>}

                <label>
                    First Name
                    <input type="text" value={firstName} onChange={handleFirstName} required/>
                </label>
                {errors.firstName && <p>{errors.firstName}</p>}

                <label>
                    Last Name
                    <input type="text" value={lastName} onChange={handleLastName} required/>
                </label>
                {errors.lastName && <p>{errors.lastName}</p>}

                <label>
                    Password
                    <input type="password" value={password} onChange={handlePassword} required/>
                </label>
                {errors.password && <p>{errors.password}</p>}

                <label>
                    Confirm Password
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword} required/>
                </label>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                <button type="submit">Sign Up</button>
            </form>
        </>
    );
}

export default SignupFormModal;
