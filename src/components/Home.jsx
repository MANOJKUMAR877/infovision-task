import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Link to="/chart">
                <button className="button">Take Me to chart Page</button>
                </Link>
            </div>
        )
    }
}
