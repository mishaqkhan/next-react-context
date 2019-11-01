import React from "react";
import {UserContext} from "../contexts/user-context";

class UserProvider extends React.Component {
    state = {
        id: 4433,
        username: "mishaq",
        age: 25
    };
    changeUsername = (username) => {
        this.setState({
            username: username
        })
    }
    login = (username) => {
        this.setState({
            username: username
        })
    }
    logout = () => {
        this.setState({
            username: ''
        })
    }
    render() {
        return (
            <UserContext.Provider
                value={{
                    state: this.state,
                    actions: {
                        changeUsername: this.changeUsername,
                        login: this.login,
                        logout: this.logout
                    }
                }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export {UserProvider};