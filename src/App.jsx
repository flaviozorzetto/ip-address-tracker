import React from "react";
import SearchBar from "./components/search-bar/SearchBar";
import "./styles.scss"

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main className="app">
                <header className="app__header">
                    <h1>IP Address Tracker</h1>
                    <SearchBar />
                </header>
            </main>
        )
    }
}