import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Displaytables = () => {

    const [studentData, setStudentData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4002/students")
            .then(res => setStudentData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handlesubmit = () => {
        navigate('/Selection')
    }

    return (
        <div>
            <div>
                <h2 style={{ textAlign: 'center' }}>student details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>maths</th>
                            <th>science</th>
                            <th>english</th>
                            <th>total</th>
                            <th>average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentData.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.id} </td>
                                        <td>{user.name} </td>
                                        <td>{user.marks.maths} </td>
                                        <td>{user.marks.science} </td>
                                        <td>{user.marks.english} </td>
                                        <td>{user.marks.maths + user.marks.science + user.marks.science} </td>
                                        <td>{((user.marks.maths + user.marks.science + user.marks.science) / 3).toFixed(1)} </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={() => handlesubmit()} >Filter</button>
        </div>
    )
}
export default Displaytables