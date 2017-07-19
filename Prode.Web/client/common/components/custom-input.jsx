import React from "react";

let ctrlKeyVWasPressed = false;
let regExp;

export class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onPaste = this.onPaste.bind(this);
    }

    onChange(event) {
        this.setState({ value: event.target.value });

        if (this.props.onParentChange) {
            this.props.onParentChange(event);
        } else {
            console.warn("CustomInput no tiene configurado un evento asociado al padre");
        }
    }

    onKeyPress(event) {
        let key = event.key;

        if (this.props.onlyNumbers) {
            regExp = /[0-9]/g;
            if (!regExp.test(key)) {
                event.preventDefault();
            }
        }
    }

    onPaste(event) {
        let value = event.clipboardData.getData("text/plain");
        if (this.props.onlyNumbers) {
            regExp = /[0-9]/g;
            if (!regExp.test(value)) {
                event.preventDefault();
            }
        }
    }

    render() {
        return <input className="form-control" maxLength={this.props.maxLength}
            name={this.props.name} value={this.state.value}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            onPaste={this.onPaste} />;
    }
}