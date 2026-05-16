import { Component } from "react"
import Choice from "./components/Choice/Choice"
import stikers from "./stikers.json"
import './App.css'
import StikerList from "./components/StikerList/StikerList"

class App extends Component {
  state = {
    labelImg: "",
  }

  handleLabel = (label) => {
    this.setState({
      labelImg: label
    })
  }

  render() {
    const { labelImg } = this.state
    return (
      <>
        <StikerList stikers={stikers} handleLabel={this.handleLabel} />
        {labelImg ? <Choice label={labelImg} /> : "Оберiть картинку"}
      </>
    )
  }
}

export default App
