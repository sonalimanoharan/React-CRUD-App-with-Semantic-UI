import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Message } from 'semantic-ui-react';
import { API_URL } from '../api';

// Read gets its data from the API (where Create saved it), not from the Create component.
function Read() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => setRows(response.data))
            .catch((err) => setError('Could not load data: ' + err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <Message negative content={error} />;

    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {rows.map((row) => (
                    <Table.Row key={row.id}>
                        <Table.Cell>{row.firstName}</Table.Cell>
                        <Table.Cell>{row.lastName}</Table.Cell>
                        <Table.Cell>{row.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default Read;
