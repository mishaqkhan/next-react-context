import { ProgramsContext } from "../../components/contexts/programs-context";
import NavBar from '../../components/navbar/Navbar';
import UserInfo from '../../components/user/UserInfo';

function ReactContext() {
    return (
        <div>
            <NavBar />
            <UserInfo />
            <ProgramsContext.Consumer>
                {stateData => {
                    const {title} = stateData.state;
                    return (
                        <div>
                            <em>Program title: {title}</em>
                        </div>
                    );
                }}
            </ProgramsContext.Consumer>
        </div>
    )
}

export default ReactContext