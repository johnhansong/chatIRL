import { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './LoginForm.css'

function LoginFormModal() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();

    const handleCredential = (e) => {setCredential(e.target.value)}
    const handlePassword = (e) => {setPassword(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({});
        return dispatch(sessionActions.login({credential, password}))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json();
                if (data?.errors) setErrors(data.errors);
            }
        )
    };

    useEffect(() => {
        const errors = {};

        if (credential.length < 4 || password.length < 6) {
            errors.exist = true;
        }

        setErrors(errors)
    }, [credential, password])


    const demo = (e) => {
        e.preventDefault();
        setErrors({})
        dispatch(sessionActions.login({ credential: 'FakeUser1', password: "password2" }))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json();
                if (data?.errors) setErrors(data.errors)
            })
    }

    const errorExists = Object.values(errors).length

    return (
        <div className="modal-box">
            <h1>Log In</h1>
            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-box-input-section">
                    <label>
                        <input
                            className="modal-box-input"
                            type="text"
                            value={credential}
                            onChange={handleCredential}
                            placeholder="Username or Email"
                            required
                        />
                    </label>
                </div>

                <div className="modal-box-input-section">
                    <label>
                        <input
                            className="modal-box-input"
                            type="password"
                            value={password}
                            onChange={handlePassword}
                            placeholder="Password"
                            required
                        />
                    </label>
                </div>
                {errors.credential && <p>{errors.credential}</p>}

                <button
                    className={errorExists ? "modal-btn-disabled" : "modal-btn"}
                    disabled={errorExists}
                    type="submit"
                >Log In</button>
            </form>

            <button
                className="demo-user"
                onClick={demo}
            >Demo User</button>
        </div>
    );
}

export default LoginFormModal;
