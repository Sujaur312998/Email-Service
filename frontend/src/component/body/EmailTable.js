import React, { useState, useEffect } from 'react'
import { host } from '../../const/host'
import axios from 'axios'

const EmailTable = () => {
    const token = window.localStorage.getItem('token')
    const [tableData, setTableData] = useState([])





    useEffect(() => {
        try {
            axios.get(`${host}/tabledata`, { // receive two parameter endpoint url ,form data 
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            })
                .then((res) => setTableData(res.data))
                .catch((err) => console.log(err))

        } catch (e) {
            console.log()
        }
    }, []);
    console.log(tableData)


    return (
        <div className='p-5 '>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th ># ID</th>
                        <th >Email Address</th>
                        <th >Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item) =>
                        (
                            <tr className="table-row" key={item._id}>
                                <td >{item._id}</td>
                                <td >{item.emails}</td>
                                <td >{item.emailSend}</td>
                            </tr>
                        )
                            //console.log(item.emails)

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmailTable