import React, { useState,useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import {host} from '../../const/host'

const HomePage = () => {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
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

    const handleSubmit =async (e) => {
        e.preventDefault()
        //console.log(user)
        const { to, cc, bcc, subject, text } = user
        //send data to backend
        const res = await fetch(`${host}/sendEmail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Barear ${token}`
            },
            body: JSON.stringify({
                to, cc, bcc, subject, text 
            })
        })
        const data = await res.json()
            window.alert('Email Send Succesfully!!!')

        setUser({
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            text: ''
        })
    }

    useEffect(() => {
        const token=window.localStorage.getItem('token')
        if(!token){
            history.push('/signin')
        }
    }, [])


    return (
        <div className='container mt-5'>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <form onSubmit={handleSubmit}>
                        <Row>
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
                                <label for="exampleFormControlTextarea1">Compose text</label>
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
