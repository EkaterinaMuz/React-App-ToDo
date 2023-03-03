import React, {Component} from "react";
import "./post-status-filter.css"


export default class SearchStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {filter: 'all', label: 'Все'},
            {filter: 'like', label: 'Понравилось'}
        ];
    }

    render() {
        
        const buttons = this.buttons.map(({filter, label}) => {
            const active = this.props.filter === filter;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                key={filter}
                type="button"
                className={`btn ${clazz}`}
                onClick={() => this.props.onFilterState(filter)}
                >{label}</button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
            
        )
            

    }
 
   

};

