import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { API_URL } from '../api';

export function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const postData = async () => {
        setSaving(true);
        setError('');
        try {
            await axios.post(API_URL, { firstName, lastName, checkbox });
            navigate('/read');
        } catch (err) {
            setError('Could not save: ' + err.message);
            setSaving(false);
        }
    };

    return (
        <div>
            <Form className="create-form" onSubmit={postData} error={!!error}>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e, data) => setCheckbox(data.checked)} />
                </Form.Field>
                <Message error content={error} />
                <Button type='submit' loading={saving} disabled={saving}>Submit</Button>
            </Form>
        </div>
    );
}

export default Create;
