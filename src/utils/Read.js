import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'


export default function Read() {

    const [APIData, setAPIData] = useState([])
    useEffect(() => {
        axios.get(`https://reqres.in/api/posts`)
            .then((response) => {
                setAPIData(response.data)
            })
            .catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });
    }, []);

    return (
        <div>
            <Table singleLine>
                {/* <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                    </Table.Row>
                </Table.Header> */}
                <Table.Body>
                    { APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.year}</Table.Cell>
                                <Table.Cell>{data.color}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                
            </Table>
        </div>
    )
}