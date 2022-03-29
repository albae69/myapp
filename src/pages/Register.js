import React from 'react'
import { Header, Input, Button } from '../components'
import '../styles/register.css'
import { useHistory } from 'react-router-dom'

const Register = () => {
    document.title = 'Register'

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [show, setShow] = React.useState(false)

    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        if (name && email && password) {
            const data = {
                name,
                email,
                password,
            }
            console.log(data)
            localStorage.setItem('user', JSON.stringify(data))
            history.push('/login')
        }
    }

    return (
        <div>
            <Header />
            <div className='login'>
                <form onSubmit={onSubmit}>
                    <Input
                        label='name'
                        type='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label='password'
                        type={show ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button title='Register' onClick={onSubmit} type='submit' />
                </form>
            </div>
        </div>
    )
}

export default Register
