import React from "react";
import { uniqueId } from "../../util/todo_util";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        }
        this.updateBody = this.updateBody.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle (e){
        this.setState({
            title: e.target.value
        })
    }


    updateBody(e) {
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const id = uniqueId();
        this.props.receiveTodo({id: id, ...this.state})
        this.setState({
            title: "",
            body: ""
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>

                <label>Title
                    <input
                        type="text" 
                        onChange={this.updateTitle}
                        value={this.state.title}
                    />
                </label>

                <label>Body
                    <input
                        type="text"
                        onChange={this.updateBody}
                        value={this.state.body}
                    />
                </label>

                <input type="submit" value="Create Todo"/>
            </form>
        )
    }
}

export default TodoForm;