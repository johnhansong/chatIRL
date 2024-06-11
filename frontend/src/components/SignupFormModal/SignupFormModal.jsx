import { useState, useEffect } from 'react';
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
        if (password === confirmPassword ) {
            setErrors({})
            return dispatch(
                sessionActions.signup({
                    email, username, firstName, lastName, password
                })
            )
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json();
                console.log(data)
                if (data?.errors) {
                    setErrors(data.errors);
                }
            });
        }

        return setErrors({
            confirmPassword: "Password fields must match"
        });
    };

    useEffect(() => {
        const errors = {};

        if (!email || !firstName || !lastName) {
            errors.exist = true;
        } else if (!username || username.length < 4) {
            errors.exist = true;
        } else if (!password || password.length < 6) {
            errors.exist = true;
        }

        setErrors(errors);
    }, [email, username, firstName, lastName, password, confirmPassword])

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="text" value={email} placeholder="Email" onChange={handleEmail} required/>
                </label>
                {errors.email && <p>{errors.email}</p>}

                <label>
                    UserName:
                    <input type="text" value={username} placeholder="Username" onChange={handleUsername} required/>
                </label>
                {errors.username && <p>{errors.username}</p>}

                <label>
                    First Name:
                    <input type="text" value={firstName} placeholder="First Name" onChange={handleFirstName} required/>
                </label>
                {errors.firstName && <p>{errors.firstName}</p>}

                <label>
                    Last Name:
                    <input type="text" value={lastName} placeholder="Last Name" onChange={handleLastName} required/>
                </label>
                {errors.lastName && <p>{errors.lastName}</p>}

                <label>
                    Password:
                    <input type="password" value={password} placeholder="Password" onChange={handlePassword} required/>
                </label>
                {errors.password && <p>{errors.password}</p>}

                <label>
                    Confirm Password:
                    <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={handleConfirmPassword} required/>
                </label>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                <button disabled={Object.values(errors).length} id="signup-button" type="submit">Sign Up</button>
            </form>
        </>
    );
}

export default SignupFormModal;
