import React from "react";


class SearchMovies extends React.Component{

    constructor(props) {
        super(props);
        this.state = {search: ""}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState(
            {search: e.target.value}
        )
    }

    render() {
        /*console.log(this.state.search)*/
        return (
            <form action="">
                <input type="search" value={this.state.search} onChange={this.handleChange} placeholder="Rechercher"/>
                {JSON.stringify(this.state)}
            </form>
        )
    }
}

export default SearchMovies;