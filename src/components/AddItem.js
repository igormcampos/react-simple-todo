import React from 'react'

class AddItem extends React.Component {
    state = {
        text: null
    };

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.text)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input id="text" type="text" onChange={this.handleChange}/>
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default AddItem