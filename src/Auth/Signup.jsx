import React, { useState } from 'react'
import { auth } from '../Firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    let [userdata, setuserdata] = useState({})
    let setinput = (e) => {
        let { name, value } = e.target;
        setuserdata({ ...userdata, [name]: value })
    }
    let submit = (e) => {
        e.preventDefault()
        // console.log(userdata);
        console.log(userdata);
        
        if (userdata.password == userdata.confirmpassword) {
            createUserWithEmailAndPassword(auth, userdata.email, userdata.password)
                .then((res) => {
                    toast.success("Register success")
                    setTimeout(() => {
                        window.location = "/signin"
                    }, 1000);
                })
                .catch((err) => {
                    toast.error("Email Already eists")
                })
        }
        else {
            toast.error("Password Must Be same")
        }
    }
    return (
        <>
            <div>
                <div classNameName="container mx-auto" style={{margin:"0px auto", maxWidth:"300px"}}>
                    <div style={{backgroundColor:"black", color:"white", padding:"10px", borderRadius:"10px"}}>
                        <h2 style={{color:"white"}}>Create an Account</h2>
                        <form method='post' onSubmit={(e) => { submit(e) }} style={{padding:"5px"}}>
                            <div className="mb-4" style={{display:"flex", flexDirection:"column"}}>
                                <label for="name" >Name</label>
                                <input type="text" style={{width:"100%"}} id="name" name="name"  onChange={(e) => { setinput(e) }} />
                            </div>
                            <div className="mb-4" style={{display:"flex", flexDirection:"column"}}>
                                <label for="email">Email</label>
                                <input type="email" style={{width:"100%"}}  id="email" name="email"  onChange={(e) => { setinput(e) }} />
                            </div>
                            <div className="mb-6" style={{display:"flex", flexDirection:"column"}}>
                                <label for="password">Password</label>
                                <input type="password" style={{width:"100%"}} id="password" name="password"  onChange={(e) => { setinput(e) }} />
                            </div>
                            <div className="mb-6" style={{display:"flex", flexDirection:"column"}}>
                                <label for="password" >Confirm Password</label>
                                <input type="password" style={{width:"100%"}}  id="cpassword" name="confirmpassword"  onChange={(e) => { setinput(e) }} />
                            </div>
                            <button type="submit" style={{marginTop:"10px"}}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </>
    )
}

export default Signup