import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { host } from '../../const/host'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const HomePage = () => {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    const [csvfile, setCsvFile] = useState(null)
    const [value, onChange] = useState(new Date());

    const [user, setUser] = useState({
        to: '',
        cc: '',
        bcc: '',
        subject: '',
        text: ''
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(user)
        const { to, cc, bcc, subject, text } = user

        console.log(to, cc, bcc, subject, text, csvfile, value)

        //send data to backend
        try {
            if (csvfile !== null) {
                const datas = new FormData()
                datas.append('file', csvfile)

                axios.post(`${host}/upload`, datas, { // receive two parameter endpoint url ,form data 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'JWT fefege...'
                    }
                })
                    .then(res => { // then print response status
                        console.log(res)
                    })
                    .catch(err => console.log(err))
            }


            const res = await fetch(`${host}/sendEmail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                },
                body: JSON.stringify({
                    to, cc, bcc, subject, csvfile, text, value
                })
            })
            const data = await res.json()

            console.log(res, data)
            if (res.status === 200) {
                window.alert("Email Send!!!")
            } else {
                window.alert('Server Error!!!')
            }
            setUser({
                to: '',
                cc: '',
                bcc: '',
                subject: '',
                text: ''
            })
            setCsvFile(null)
            onChange(new Date())


        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (!token) {
            history.push('/signin')
        }
    }, [token])


    return (
        <div className='container mt-5'>
            <Row>
                <Col md={6}>
                    <div className='mt-5'>
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <div className="mb-3">
                                <label htmlFor="formFileSm" className="form-label">to(CSV file)</label>
                                <input
                                    className="form-control form-control-sm"
                                    id="formFileSm"
                                    type="file"
                                    name="csvfile"
                                    onChange={e => setCsvFile(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group mb-1">
                                <label htmlFor='formBasicto'>to</label>
                                <input
                                    type='text'
                                    className="form-control"
                                    id="formBasicto"
                                    name='to'
                                    placeholder='Recipients'
                                    autoComplete='off'
                                    value={user.to}
                                    onChange={handleInput}
                                />
                            </div>

                            <Col md={6}>
                                <div className="form-group mb-1">
                                    <label htmlFor='formBasicc'>cc</label>
                                    <input
                                        type='email'
                                        className="form-control"
                                        id="formBasicc"
                                        name='cc'
                                        autoComplete='off'
                                        value={user.cc}
                                        onChange={handleInput}
                                    />
                                </div>
                            </Col>
                            <Col md={6} className=''>
                                <div className="form-group mb-1">
                                    <label htmlFor='formBasicNamebcc'>bcc</label>
                                    <input
                                        type='email'
                                        className="form-control"
                                        id="formBasicNamebcc"
                                        name='bcc'
                                        autoComplete='off'
                                        value={user.bcc}
                                        onChange={handleInput}
                                    />
                                </div>
                            </Col>
                            <div className="form-group mb-1">
                                <label htmlFor='formBasicsubject'>Subject</label>
                                <input
                                    type='text'
                                    className="form-control"
                                    id="formBasicsubject"
                                    name='subject'
                                    placeholder='Subject'
                                    autoComplete='off'
                                    value={user.subject}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleFormControlTextarea1">Compose text</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="4"
                                    name="text"
                                    value={user.text}
                                    onChange={handleInput}
                                />
                            </div>
                        </Row>

                        <button type="submit" className="btn btn-success">send</button>
                    </form>
                </Col>

            </Row>
        </div>
    )
}

export default HomePage
