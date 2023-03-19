import { Button, Form } from 'semantic-ui-react'
import React, { useState } from 'react';
//comment
const Create = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState(''); 
    const postData = () => {
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(passwordConfirmation);
    }
    return (
        <div>
            <Form className = "create-form">
                <h1>Cadastro de usuário</h1>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>E-mail</label>
                    <input placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type = "password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input type = "password" placeholder='Password' onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                </Form.Field>
                <Button onClick = {postData} type='submit'>Cadastrar</Button>
            </Form>
        </div>
    )
    
}

export default Create;