import React, { Component,Fragment } from 'react'

class NavList extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.navList.map((item, index) => {
            return <h1 
              key={index}
              className={index === this.props.tabIndex ? 'active app-tag': 'app-tag'}
              onClick={this.bindTabEvent.bind(this, index)}
            > {item} 
            </h1>
          })
        }
      </Fragment>
    )
  }

  bindTabEvent(index) {
    // console.log(index, 'index')
    // console.log(this.props.navEvent, '-----')
    this.props.navEvent(index)
  }
}

export default NavList