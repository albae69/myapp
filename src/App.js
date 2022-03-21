import React, { Component } from 'react'
import Header from './Header'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 0,
                    title: 'Naruto Shippuden',
                    category: 'book',
                },
                {
                    id: 1,
                    title: 'One Piece',
                    category: 'book',
                },
            ],
        }
    }

    render() {
        return (
            <div>
                {this.state.data.map((item) => (
                    <Header key={item.id} title={item.title} />
                ))}
            </div>
        )
    }
}
