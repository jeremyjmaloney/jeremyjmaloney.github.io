class App extends React.Component {
  handleScroll = (event) => {
    let scrollAmount = event.deltaY;
    let count = 0;
    console.log('I scrolled');
    count++;
    console.log(count);
    }
  }
  render() {
    return (
      <div className="content-container" onWheel={this.handleScroll}>
        <p>lsdkfaj dsfaj sdlfajfljsdlf jasfljsdfljopweifpoweiufpoweifu pawoeifu apoeifua apsodifu pasodiuf paodsiuf poasudf poaidsuf posiduf poausd pfoiasdufpo isudpfoiasud fpoisdufpoiw eurpoqiweurpoqewi rupqoweiruer uqpeowirupeowiru eowiru eow roi euwproiu qweoiru qoweiur pwoeqi r</p>
        <p>lsdkfaj dsfaj sdlfajfljsdlf jasfljsdfljopweifpoweiufpoweifu pawoeifu apoeifua apsodifu pasodiuf paodsiuf poasudf poaidsuf posiduf poausd pfoiasdufpo isudpfoiasud fpoisdufpoiw eurpoqiweurpoqewi rupqoweiruer uqpeowirupeowiru eowiru eow roi euwproiu qweoiru qoweiur pwoeqi r</p>
        <p>lsdkfaj dsfaj sdlfajfljsdlf jasfljsdfljopweifpoweiufpoweifu pawoeifu apoeifua apsodifu pasodiuf paodsiuf poasudf poaidsuf posiduf poausd pfoiasdufpo isudpfoiasud fpoisdufpoiw eurpoqiweurpoqewi rupqoweiruer uqpeowirupeowiru eowiru eow roi euwproiu qweoiru qoweiur pwoeqi r</p>
        <p>lsdkfaj dsfaj sdlfajfljsdlf jasfljsdfljopweifpoweiufpoweifu pawoeifu apoeifua apsodifu pasodiuf paodsiuf poasudf poaidsuf posiduf poausd pfoiasdufpo isudpfoiasud fpoisdufpoiw eurpoqiweurpoqewi rupqoweiruer uqpeowirupeowiru eowiru eow roi euwproiu qweoiru qoweiur pwoeqi r</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
