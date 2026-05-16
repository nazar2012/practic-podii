import { Component } from "react"

class Choice extends Component {
    render() {
        const {label} = this.props
        return (
            <p>{label}</p>
        )
    }
}

export default Choice
