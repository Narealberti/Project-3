import React, { Component } from 'react'
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment'


export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            orders: [],
            errors: {},

        }

    }




    componentWillMount() {
        axios.get('/api/orders/all')
            .then(res => this.setState({ orders: res.data }))
            .catch(err => this.setState({ errors: err.response.data }))
    }







    render() {

        let final = []
        this.state.orders.map(order => {
            let obj = {}
            obj.person = order.person
            obj.name = order.name
            obj.phone = order.phone
            obj.time = order.time
            obj.date = <Moment format="YYYY/MM/DD">{order.date}</Moment>
            return (final.unshift(obj))

        })



        const LogOut = withRouter(({ history }) => (
            localStorage.getItem('jwt')
                ?
                <button onClick={() => {
                    localStorage.removeItem('jwt')
                    history.push('/')

                }}>Sign Out</button>

                : <p>You are not logged in</p>
        ))
        const data = {
            columns: [
                {
                    label: "Guest Number",
                    field: 'name',
                    sort: 'asc',
                    width: 150
                },

                {
                    label: 'Name',
                    field: 'Name',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Phone Number',
                    field: 'Phone Number',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Time',
                    field: 'Time',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Date',
                    field: 'Date',
                    sort: 'asc',
                    width: 150
                },

            ],
            rows: final
        }


        return (
            <div>
                <LogOut />
                <MDBDataTable style={{ background: 'white' }}
                    striped
                    bordered
                    hover
                    data={data}
                />
            </div>
        )
    }
}
