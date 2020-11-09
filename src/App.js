import React from 'react';
import './App.scss';
import axios from 'axios'
import './mock/index'
import Hoc from './components/HightComponent'

function Wrapper(props) {
  console.log(props, 'props')
  return <div style={{background: props.bgColor}}> {props.data} </div>
}

function Wrapper1(props) {
  return <div style={{background: props.bgColor}}>{props.data} </div>
}

class  App extends React.Component {
   
  constructor(props) {
    super(props)
      this.state = {
        list: [],
        musicUrl: '',
        msg: '',
      }

      this.hoc =  Hoc(Wrapper)({
        bgColor: 'red',
        key: 'a'
      });
      this.hoc1 =  Hoc(Wrapper1)({
        bgColor: 'blue',
        key: 'b'
      });
  }



  render() {
    return (
      <div className="App">
        <this.hoc />
        <this.hoc1 />
        <audio id='audioDom' src={this.state.musicUrl}></audio>  
        <div className='left'>
          {
            this.state.list.map((item, index) => {
              return <span key={index}
               onClick={ (e) => this.handleBtnEvent(e, item) }
              >{item.keyTrigger}</span>
            })
          }
        </div>
        <div className='right'>
           <button onClick={ () => { this.setState({msg: '',url: ''}) } }>togler</button>
           <span> {this.state.msg} </span>
        </div>
      </div>
    );
  }


  handleBtnEvent = (e, item) => {
    console.log(e, 'e') 
    this.setState(() => ({
      musicUrl: item.url,
      msg: item.id
    }), () => {// 操作dom play()
      console.log('play')
       const audioDom = document.querySelector('#audioDom');
       audioDom.play()
    })
  }

  componentDidMount() {
    axios.get('/api/music').then(res => {
      console.log(res, 'res')
      this.setState({
        list: res.data
      })
    })
  }
}

export default App;
