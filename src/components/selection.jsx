import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const subjects = {
    maths: "maths",
    science: "science",
    english: "english"
}

const Selection = () => {

    const [mark, SetMark] = useState("");
    const [subject, SetSubject] = useState("");

    const [filterstudents, setFilterstudents] = useState([]);

    const handleChangemark = (e) => {
        const newvalue = (e.target.value)
        SetMark(newvalue);
    }

    const handleChangesub = (e) => {
        SetSubject(e)
    }

    const onSubmit = async () => {
        try {
            var url = 'http://localhost:4002/filterstudents/' + mark + '/' + subject;

            const response = await fetch(url);
            const jsonData = await response.json();
            debugger
            setFilterstudents(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div>
            <label>
                Enter Mark
            </label>
            <input
                type="number"
                value={mark}
                onChange={(e) => handleChangemark(e)}
            />
            <div>
                <Dropdown value={subject} onSelect={(e) => handleChangesub(e)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {subject ? subject : "Subject"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey={subjects.maths}>{subjects.maths}</Dropdown.Item>
                        <Dropdown.Item eventKey={subjects.science}>{subjects.science}</Dropdown.Item>
                        <Dropdown.Item eventKey={subjects.english}>{subjects.english}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                <button onClick={() => onSubmit()}>Ok</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterstudents.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.id} </td>
                                        <td>{user.name} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Selection