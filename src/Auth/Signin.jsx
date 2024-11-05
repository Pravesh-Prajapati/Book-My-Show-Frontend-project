import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../Firebase-config';

function Signin() {
    let [user, setuser] = useState({})
    let navigate = useNavigate()

    let setinput = (e) => {
        let { name, value } = e.target
        setuser({ ...user, [name]: value })
    }
    let submit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((res) => {
                toast.success("Login Success")
                // localStorage.setItem("loginuser", JSON.stringify(res.user.uid)) || ""
                console.log(res.user.uid);
                let email=res.user.email
                localStorage.setItem("bookmyshowuser" ,JSON.stringify({email}))
                setTimeout(() => {
                    window.location = '/'
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Invalid Emaail Or passsword")
                // toast.error(err)
            })
    }

    return (
        <>
            <div>
                <div classNameName="container mx-auto" style={{ margin: "0px auto", maxWidth: "300px" }}>
                    <div style={{ backgroundColor: "black", color: "white", padding: "10px", borderRadius: "10px" }}>
                        <h2 style={{ color: "white" }}>Create an Account</h2>
                        <form method='post' onSubmit={(e) => { submit(e) }} style={{ padding: "5px" }}>
                            
                            <div className="mb-4" style={{ display: "flex", flexDirection: "column" }}>
                                <label for="email">Email</label>
                                <input type="email" style={{ width: "100%" }} id="email" name="email" onChange={(e) => { setinput(e) }} />
                            </div>
                            <div className="mb-6" style={{ display: "flex", flexDirection: "column" }}>
                                <label for="password">Password</label>
                                <input type="password" style={{ width: "100%" }} id="password" name="password" onChange={(e) => { setinput(e) }} />
                            </div>
                            
                            <button type="submit" style={{ marginTop: "10px" }}>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </>
    )
}

export default Signin