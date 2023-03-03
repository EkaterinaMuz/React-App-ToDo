import React, {Component} from "react";
import "./search-panel.css"

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateValue = this.onUpdateValue.bind(this);
    }
    

    onUpdateValue(e) {
        const term = e.target.value
        this.setState({
            term: term
        })
        this.props.onUpdateTerm(term)
    }

    render () {
        return (
            <input
                className="form-control search-panel"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateValue}
                
            />
        )
    }

};

