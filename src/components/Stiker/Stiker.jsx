import { Component } from "react"

class Stiker extends Component {
    render() {
        const {handleLabel, label, img} = this.props
        return (
            <li key={label}>
                <img src={img} alt={label} onClick={() => handleLabel(label)} />
            </li>
        )
    }
}

export default Stiker
