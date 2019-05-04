import React from 'react';

// Class-based component that displays the search bar to the user.
class SearchBar extends React.Component {
    state = { term: this.props.defaultTerm };

    // HELPER FUNCTIONS ////

    // Sets state onChange for every keystroke the user enters into the input box.
    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    // When a user clicks on the input box, any text present will be cleared.
    onInputClick = () => {
        this.setState({
            term: ''
        });
    };

    // When the user presses 'enter' the onTermSubmit function is called (via props) from app.js 
    onTermSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term)
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form
                    onSubmit={this.onTermSubmit}
                    className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            onClick={this.onInputClick}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;