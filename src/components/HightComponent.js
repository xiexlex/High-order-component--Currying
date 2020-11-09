import React from 'react';

const withCom = (WrapperComponent) => (options) => {
  console.log(options, 'options')
  return class extends React.Component {

    state = {
      data: '',
    }

    UNSAFE_componentWillMount() {
      // 复用逻辑. 就是取出本地存储中的数据，并且传递给传进来的组件
      let data = localStorage.getItem(options.key);
      this.setState({
        data: data
      })
    }

    render() {
      return <WrapperComponent {...options} data={this.state.data} {...this.props} />
    }
    
  }
}



// function WithComponent(WrapperComponent) {
//   return function(options) {
//     return class extends React.Component {
//       state = {
//         data: '',
//       }
  
//       UNSAFE_componentWillMount() {
//         let data = localStorage.getItem(options);
//         this.setState({
//           data: data
//         })
//       }
  
//       render() {
//         return <WrapperComponent data={this.state.data} {...this.props} />
//       }
      
//     }
//   }
// }

export default withCom;