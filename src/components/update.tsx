import { Button, Form } from 'semantic-ui-react'
import React, { useState } from 'react';

const Update = () => {
    const [username, setUsername] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState(''); 
    const postData = () => {
        console.log(username);
        console.log(oldPassword);
        console.log(newPassword);
        console.log(newPasswordConfirmation);
    }
    return (
        
        <div>
            <h1>Atualização de usuário</h1>
            <Form className = "create-form">
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Old Password</label>
                    <input type = "password" placeholder='Password' onChange={(e) => setOldPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>New Password</label>
                    <input type = "password" placeholder='Password' onChange={(e) => setNewPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input type = "password" placeholder='Password' onChange={(e) => setNewPasswordConfirmation(e.target.value)}/>
                </Form.Field>
                <Button onClick = {postData} type='submit'>Cadastrar</Button>
            </Form>
        </div>
    )
    
}

export default Update;