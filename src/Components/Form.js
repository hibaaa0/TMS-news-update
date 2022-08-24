import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            cover: "",
            category: "",
            title: "",
            authorName: "",
            authorImage: "",
            time: "",
            desc: "",
            details: "",
            date: "",
            comments: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    idhandler = (event) => {
        this.setState({
            id: event.target.value
        })
    }
    coverhandler = (event) => {
        this.setState({
            cover: event.target.value
        })
    }
    categoryhandler = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    titlehandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    authorNamehandler = (event) => {
        this.setState({
            authorName: event.target.value
        })
    }

    authorImagehandler = (event) => {
        this.setState({
            authorImage: event.target.value
        })
    }

    timehandler = (event) => {
        this.setState({
            time: event.target.value
        })
    }

    deschandler = (event) => {
        this.setState({
            desc: event.target.value
        })
    }

    detailshandler = (event) => {
        this.setState({
            details: event.target.value
        })
    }

    datehandler = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    commentshandler = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.id} ${this.state.title}  News Updated !!!!`)
        console.log(this.state);
        this.setState({
            id: "",
            cover: "",
            category: '',
            title: "",
            authorName: "",
            authorImage: "",
            time: "",
            desc: "",
            details: "",
            date: "",
            comments: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>News Section Update</h1>
                    <label>ID: </label> <input type="text" value={this.state.id} onChange={this.idhandler} placeholder="Enter ID..." /><br />
                    <label>Cover: </label> <input type="file" value={this.state.cover} onChange={this.coverhandler} placeholder="Add Cover photo..." /><br />
                    <label>Category: </label> <input type="text" value={this.state.category} onChange={this.categoryhandler} placeholder="Category..." /><br />
                    <label>Title: </label><input type="text" value={this.state.title} onChange={this.titlehandler} placeholder="Title..." /><br />
                    <label>AuthorName: </label><input type="text" value={this.state.authorName} onChange={this.authorNamehandler} placeholder="Enter Author Name..." /><br />
                    <label>Author-Img: </label><input type="file" value={this.state.authorImage} onChange={this.authorImagehandler} placeholder="Enter Author Image..." /><br />
                    <label>Time: </label><input type="text" value={this.state.time} onChange={this.timehandler} placeholder="Time..." /><br />
                    <label>Desc: </label><input type="text" value={this.state.desc} onChange={this.deschandler} placeholder="Description..." /><br />
                    <label>Details: </label><input type="text" value={this.state.details} onChange={this.detailshandler} placeholder="Enter Details..." /><br />
                    <label>Date: </label><input type="text" value={this.state.date} onChange={this.datehandler} placeholder="Enter Date..." /><br />
                    <label>Comments: </label><input type="text" value={this.state.comments} onChange={this.commentshandler} placeholder="Enter Comments..." /><br />
                        
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form