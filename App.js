class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleScroll = event => {
    let element = event.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count);
    }
  }
  render() {
    return (
      <div className="content" onWheel={this.handleScroll}>
        <p>lsdkfaj dsfaj sdlfajfljsdlf jasfljsdfljopweifpoweiufpoweifu pawoeifu apoeifua apsodifu pasodiuf paodsiuf poasudf poaidsuf posiduf poausd pfoiasdufpo isudpfoiasud fpoisdufpoiw eurpoqiweurpoqewi rupqoweiruer uqpeowirupeowiru eowiru eow roi euwproiu qweoiru qoweiur pwoeqi r</p>
        <p>lsdkfaj dsfaj sdlfajfljsdlf jasfljsdfljopweifpoweiufpoweifu pawoeifu apoeifua apsodifu pasodiuf paodsiuf poasudf poaidsuf posiduf poausd pfoiasdufpo isudpfoiasud fpoisdufpoiw eurpoqiweurpoqewi rupqoweiruer uqpeowirupeowiru eowiru eow roi euwproiu qweoiru qoweiur pwoeqi r</p>
        <p>lsdkfaj dsfaj sdlfajfljsdlf jasfljsdfljopweifpoweiufpoweifu pawoeifu apoeifua apsodifu pasodiuf paodsiuf poasudf poaidsuf posiduf poausd pfoiasdufpo isudpfoiasud fpoisdufpoiw eurpoqiweurpoqewi rupqoweiruer uqpeowirupeowiru eowiru eow roi euwproiu qweoiru qoweiur pwoeqi r</p>
        <p>lsdkfaj dsfaj sdlfajfljsdlf jasfljsdfljopweifpoweiufpoweifu pawoeifu apoeifua apsodifu pasodiuf paodsiuf poasudf poaidsuf posiduf poausd pfoiasdufpo isudpfoiasud fpoisdufpoiw eurpoqiweurpoqewi rupqoweiruer uqpeowirupeowiru eowiru eow roi euwproiu qweoiru qoweiur pwoeqi r</p>
        <h3>Progress... {this.state.count}%</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
