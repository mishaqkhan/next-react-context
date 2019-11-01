import {UserContext} from "../contexts/user-context";

function UserInfo() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    stateData => {
                        const {id, username, age} = stateData.state;
                        return (
                            <div>
                                <text>ID: {id}</text>
                                <text>Username: {username}</text>
                                <text>Age: {age}</text>
                            </div>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default UserInfo;