import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Booking.css'
import { useNavigate } from 'react-router-dom'

function Bookings() {
    let [data, setdata] = useState([])
    let navigate= useNavigate()
    const [loginuser, setloginuser] = useState("")
    // useEffect(() => {
    //     let getmovie = JSON.parse(localStorage.getItem(""))
    // }, [])

    useEffect(() => {
        let getuser =JSON.parse(localStorage.getItem("bookmyshowuser"))
         console.log(getuser);
        setloginuser(getuser)
        // axios.get("http://localhost:3000/booking")
        {getuser &&
            axios.get("http://localhost:3000/booking/?loginuser="+getuser.email)
            .then((res) => {
                console.log(res.data);
                setdata(res.data)
            })
        }
        // axios.get("http://localhost:3000/booking/?loginuser="+getuser.email)
        //     .then((res) => {
        //         console.log(res.data);
        //         setdata(res.data)
        //     })
    }, [])
    if (!loginuser) {
       navigate("/signin")
    }
    

    
    

    return (
        <>
            <div>
                <div className="table-container">
                    Your History
                    <div style={{ marginTop: "10px" }}>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Movie Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Seat</th>
                                    <th>Theater Name</th>
                                </tr>
                            </thead>
                            {data.map((val) => {
                                return (
                                    <>
                                        {/* <tr style={{ alignItems: "center" }}>
                                            <td>{val.movieName}</td>
                                            <td>{val.date}</td>
                                            <td>{val.movietime}</td>
                                        </tr> */}
                                        <tr>
                                            <td>
                                                <span class="movie-name">{val.movieName}</span>
                                                {/* <span class="theater">INOX, Mumbai</span> */}
                                            </td>
                                            <td class="date-column">
                                                <span class="date">{val.date}</span>
                                                {/* <span class="time">4:30 PM</span> */}
                                            </td>
                                            <td>
                                                <span class="seats">{val.movietime}</span>
                                            </td>
                                            <td>
                                                <span class="seats">{val.seats}</span>
                                            </td>
                                            <td>
                                                <span class="amount">{val.theaterName}</span>
                                            </td>
                                            {/* <td>
                                                <span class="status status-cancelled">{val.theaterName}</span>
                                            </td> */}
                                        </tr>


                                    </>
                                )
                            })

                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookings