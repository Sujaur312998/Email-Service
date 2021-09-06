import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { host } from '../../const/host'
import { useHistory } from "react-router-dom"

const Signup = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name: '',
        contactNum: '',
        email: '',
        password: '',
        cPassword: ''
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

        const { name, email, password, cPassword, contactNum } = user
        //code for submit data to backend
        if (name === '' || email === '' || password === "" || cPassword === "" || contactNum === "") {
            window.alert('Please fill all fileds')
        } else {
            if (password === cPassword) {
                try {
                    const res = await fetch(`${host}/signup`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name, email, password, cPassword, contactNum 
                        })
                    })
                    const data = await res.json()
                        console.log(res);

                    if(res.status===201){
                        history.push('/signin')
                        window.alert(data.message)
                    }else{

                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
        }



        setUser({
            name: '',
            contactNum: '',
            email: '',
            password: '',
            cPassword: ''
        })
    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="form-group mb-3">
                                    <label htmlFor='formBasicName'>Name</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="formBasicName"
                                        name='name'
                                        placeholder='Name'
                                        autoComplete='off'
                                        value={user.name}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor='formBasicContactNum'>Contact Number</label>
                                    <input
                                        type='number'
                                        className="form-control"
                                        id="formBasicContactNum"
                                        name='contactNum'
                                        placeholder='+8801 ... ... ...'
                                        autoComplete='off'
                                        value={user.contactNum}
                                        onChange={handleInput}
                                    />
                                </div>

                            </Row>
                            <div className="form-group mb-3">
                                <label htmlFor='formBasicEmail'>Email address</label>
                                <input
                                    type='email'
                                    className="form-control"
                                    id="formBasicEmail"
                                    name='email'
                                    placeholder='Enter email'
                                    autoComplete='off'
                                    value={user.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor='formBasiPassword'>Password</label>
                                <input
                                    type='password'
                                    className="form-control"
                                    id="formBasiPassword"
                                    name='password'
                                    placeholder='Password'
                                    autoComplete='off'
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor='formBasicCPassword'>Confirm Password</label>
                                <input
                                    type='password'
                                    className="form-control"
                                    id="formBasicCPassword"
                                    name='cPassword'
                                    placeholder='Confirm password'
                                    autoComplete='off'
                                    value={user.cPassword}
                                    onChange={handleInput}
                                />
                            </div>

                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Signup
