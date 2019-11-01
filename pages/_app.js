import App from "next/app";
import {UserProvider} from "../components/providers";
import {ProgramsProvider} from "../components/providers";
import * as Provider from "../components/providers";

console.log('Provider: ', Provider);

class MainApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <UserProvider>
                <ProgramsProvider>
                    <Component {...pageProps} />
                </ProgramsProvider>
            </UserProvider>
        );
    }
}

export default MainApp;