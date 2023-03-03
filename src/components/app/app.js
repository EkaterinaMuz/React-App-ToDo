import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import SearchStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "I need a break...", important: false, like: false, id: 0},
                {label: "It's awesome!", important: false, like: false, id: 1},
                {label: "Going to the gym", important: false, like: false, id: 2}   
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateTerm = this.onUpdateTerm.bind(this);
        this.onFilterState= this.onFilterState.bind(this);
       
    }

    deleteItem(id) {
       this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
          } 


       })
    };

    addItem(text) {
        this.setState(({data}) => {
            if(text === '') {
                return data
            }
            const dataItem = {
                label: text,
                important: false,
                id: this.maxId++
            };
            const newArr = [...data, dataItem]
            return {
                data: newArr
            }
        })
    };

    onToggleImportant(id) {
        this.setState(({data}) => {
            return {
                data: data.map(item => item.id === id ? {...item, important: !item.important} : item)
              }
            
         })
        
    };

    onToggleLiked(id) {
        this.setState(({data}) => {
            return {
                data: data.map(item => item.id === id ? {...item, like: !item.like} : item)
              }
           
        })
    }

    onSearchPost(data, term) {
        if(term.length === 0) {
            return data
        }
        return data.filter(item => {
            return (item.label.indexOf(term) > -1)
           })
        
    };

    onFilterPosts(data, filter) {
        if(filter === 'like') {
           return data.filter(item => 
            item.like) 
        } else {
            return data;
        }
    };

    onFilterState(filter) {
        this.setState({
            filter: filter
        })
    }

    onUpdateTerm(term) {
        this.setState({
            term: term
        })
    }
    
    
    render() {
        const {data, term, filter} = this.state
        const allLikes = this.state.data.filter(item => item.like).length;
        const allPosts = this.state.data.length;
        const visiblePosts = this.onFilterPosts(this.onSearchPost(data, term), filter);
        
        return (
            <div className="app">
                <AppHeader
                allLikes={allLikes}
                allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateTerm={this.onUpdateTerm}/>
                    <SearchStatusFilter
                    filter={filter}
                    onFilterState={this.onFilterState}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                onAdd={this.addItem}/>
        
            </div>
            )
    };

};

