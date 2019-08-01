import React, { Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        // console.log(event.target)
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if(description && imageLink){
            this.props.addPost(post)
            this.props.onHistory.push('/')
        }
        
    }
    render(){
        return (
        
        <div>
           
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="link" placeholder="Link" />
                    <input type="text" placeholder="Description" name="description"/>
                    <button className="">Post</button>
                </form>
            </div>
        </div>
        )
    }
}

export default AddPhoto