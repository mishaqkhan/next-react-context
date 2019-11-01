import {UserContext} from "../contexts/user-context";

function UserAvatar() {
    return <UserContext.Consumer>
        {
            stateData => {
                const {username} = stateData.state;
                if (username)
                    return (
                        <button onClick={() => stateData.actions.logout()}>{username}</button>
                    )
                else
                    return (
                        <button onClick={() => stateData.actions.login(getRandomString(5))}>Login</button>
                    )
            }
        }
    </UserContext.Consumer>
}

export default UserAvatar;

function getRandomString(length) {
    let text = "",
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}