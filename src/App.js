import React from 'react';
import './style.css';
import CardList from './components/CardList';


class App extends React.Component {
    constructor() {

        super();

        this.state={
        users:[]
        };

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=> {
                this.setState({users:users});
        });

    };

    render(){
        if (this.state.users.length === 0){
            return<h1>Loading...</h1>;
        }
        else{
            return(
                <div>
            <CardList users={this.state.users}/>;
            </div>
            )
        }

    }
};



export default App;