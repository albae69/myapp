import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Header } from '../components'

const Home = () => {
    document.title = 'Dashboard'
    const [user, setUser] = React.useState({})

    const history = useHistory()

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setUser(user)
            localStorage.setItem('isLogin', JSON.stringify(true))
        } else {
            history.push('/login')
        }
    }, [])

    const onLogout = () => {
        localStorage.clear()
        history.push('/login')
    }

    return (
        <>
            <Header />
            <div style={{ padding: 16 }}>
                <h1>Halo {user?.name}</h1>
                <Button title='Log Out' onClick={onLogout} />
            </div>
        </>
    )
}

export default Home
