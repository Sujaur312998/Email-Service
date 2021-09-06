import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Signup = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <form /* onSubmit={handleSubmit} */>
                            <Row>
                                <div className="form-group mb-3">
                                    <label htmlFor='formBasicName'>Name</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="formBasicName"
                                        name='fullName'
                                        placeholder='Name'
                                        autoComplete='off'
                                    // value={user.fullName}
                                    // onChange={handleInput}
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
                                    // value={user.contactNum}
                                    // onChange={handleInput}
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
                                // value={user.email}
                                // onChange={handleInput}
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
                                // value={user.password}
                                // onChange={handleInput}
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
                                // value={user.cPassword}
                                // onChange={handleInput}
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
