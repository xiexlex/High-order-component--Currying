import React from 'react'

class MovieList extends React.Component {
  render() {
    return (
      <ul>
          {
           this.props.movieData.map((item, index) => {
             if (item.flag && this.props.tabIndex === 0) {
               return <li key={index}>
                 <img 
                  className={item.state ? 'img-border': ''}
                  onClick={this.bindImgEvent.bind(this, index)}
                 src={item.img} alt=''/>
                 {item.name}
               </li>
             } else if (!item.flag && this.props.tabIndex === 1) {
              return <li key={index}>
                  <img 
                  className={item.state ? 'img-border': ''}
                  onClick={this.bindImgEvent.bind(this, index)}
                  src={item.img} alt=''/>
                  {item.name}
                </li>
             }
           }) 
          }
        </ul>
    )
  }

  bindImgEvent(index) {
    this.props.imgEvent(index)
  }
}

export default MovieList;