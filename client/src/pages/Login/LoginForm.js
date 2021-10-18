import { Input } from '@mui/material'
import React from 'react'

export default function LoginForm() {
    return (
      <div>
        <Input placeholder="Email" />
        <br />
        <Input placeholder="Password" type="password" />
      </div>
    );
}
