import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Signin = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <main className="form-signin">
                            <form /* onSubmit={handleSubmit} */>
                                <h1 className="h3 mb-3 fw-normal mt-5 pt-5" style={{ textAlign: 'center' }}>Please sign in</h1>

                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        autoComplete='off'
                                    //value={email}
                                    //onChange={e => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <br />
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        autoComplete='off'
                                    //value={password}
                                    // onChange={e => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                <p className="mt-5 mb-3 text-muted" style={{ textAlign: 'center' }}>&copy; 2021</p>
                            </form>
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signin
