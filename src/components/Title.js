import React from 'react';

class Title extends React.Component {
    getTitle = (e) => {
        const currentFont = e.target.value;
        this.props.changeFont(currentFont);
    }
    getText = (e) => {
        const currentInput = e.target.value;
        this.props.titleInput(currentInput);
    }
    render() {

        const pStyle = {
            fontFamily: this.props.fontFamily,
        };
        return (
            <div className="title">
                <p>Count down title: </p>
                <input type="text" placeholder="enter title" onChange={this.getText} />

                <select name="font 1" id="" onChange={this.getTitle}>
                    <option value="Montserrat">Montserrat </option>
                    <option value="Gugi">Gugi </option>
                    <option value="Cormorant Unicase">Cormorant Unicase</option>
                    <option value="Wendy One">Wendy One</option>
                    <option value="Open Sans Condensed">Open Sans Condensed</option>

                </select>

                <div className="title__example">
                    <p style={pStyle} >{this.props.title}</p>
                </div>

            </div>
        )
    }
}

export default Title