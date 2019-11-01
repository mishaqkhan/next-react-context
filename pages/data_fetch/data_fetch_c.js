import React from 'react'
import NavBar from '../../components/navbar/Navbar';
import fetch from 'isomorphic-unfetch'

class DataFetchC extends React.Component {
    static async getInitialProps() {
        console.log('DataFetchC fetching data');
        const res = await fetch('https://api.github.com/repos/zeit/next.js')
        const json = await res.json()
        return { subscribers_count: json.subscribers_count }
    }
    componentDidMount() {
        console.log('DataFetchC mounted');
    }

    render() {
        return <div>
            <NavBar />
            Subscribers count: {this.props.subscribers_count}
        </div>
    }
}

export default DataFetchC