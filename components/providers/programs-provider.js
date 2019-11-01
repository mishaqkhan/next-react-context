import React from "react";
import {ProgramsContext} from "../contexts/programs-context";

class ProgramsProvider extends React.Component {
    state = {
        id: 7864,
        title: "Spaceship 1",
        speed: '25nm/sec'
    };

    render() {
        return (
            <ProgramsContext.Provider
                value={{
                    state: this.state,
                    actions: {}
                }}
            >
                {this.props.children}
            </ProgramsContext.Provider>
        );
    }
}

export {ProgramsProvider};