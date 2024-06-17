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
                if (data?.errors) {
                    setErrors(data.errors);
                }
            });
        }

        return setErrors({
            confirmPassword: "Password fields must match"
        });
    };

    const errorExists = Object.values(errors).length

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
        <div className="modal-box">
            <h1>Sign Up</h1>
            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-box-input-section">
                    <label>
                        <input
                            className="modal-box-input"
                            type="text" value={email}
                            placeholder="Email"
                            onChange={handleEmail}
                            required
                        />
                    </label>
                </div>
                {errors.email && <p className='errors' >{errors.email}</p>}

                <div className="modal-box-input-section">
                    <label>
                        <input
                            className="modal-box-input"
                            type="text"
                            value={username}
                            placeholder="Username"
                            onChange={handleUsername}
                            required
                        />
                    </label>
                </div>
                {errors.username && <p className='errors'>{errors.username}</p>}

                <div className="modal-box-input-section">
                    <label>
                        <input
                            className ="modal-box-input"
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            onChange={handleFirstName}
                            required
                        />
                    </label>
                </div>
                    {errors.firstName && <p className='errors'>{errors.firstName}</p>}

                <div className="modal-box-input-section">
                    <label>
                        <input
                            className ="modal-box-input"
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={handleLastName}
                            required
                        />
                    </label>
                </div>
                {errors.lastName && <p className='errors'>{errors.lastName}</p>}

                <div className="modal-box-input-section">
                    <label>
                        <input
                            className ="modal-box-input"
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={handlePassword}
                            required
                        />
                    </label>
                </div>
                {errors.password && <p className='errors'>{errors.password}</p>}

                <div className="modal-box-input-section">
                    <label>
                        <input
                            className ="modal-box-input"
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={handleConfirmPassword}
                            required
                        />
                    </label>
                </div>
                {errors.confirmPassword && <p className='errors'>{errors.confirmPassword}</p>}

                <button className={errorExists ? "modal-btn-disabled" : "modal-btn"}
                    disabled={errorExists} id="signup-button" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupFormModal;
