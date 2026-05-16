import { Component } from "react";
import Stiker from "../Stiker/Stiker";


class StikerList extends Component {
    render() {
        const { stikers, handleLabel } = this.props
        return (
            <ul className="list">{
                stikers.map(({ img, label }) => (
                    <Stiker
                        key={label}
                        handleLabel={handleLabel}
                        img={img}
                        label={label}
                    />))}
            </ul>
        )
    }
}

export default StikerList