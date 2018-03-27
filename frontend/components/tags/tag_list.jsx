import React from 'react'
import { Link, withRouter } from 'react-router-dom';


class TagList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {tagname: ''}
    this.handleClick = this.handleClick.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleClick(e) {
    e.preventDefault()
    this.props.createTag(this.state.tagname, this.props.photoId)
  }

  deleteClick() {

  }

  render() {
    if (this.props.tags) {
    return (
      <main className='taglist-wrapper'>
        <form>
          <input onChange={this.update('tagname')} value={this.state.tagname} placeholder='New Tag' className='new-tag-input'></input>
          <button type='submit' onClick={this.handleClick} className='tag-submit'>Create Tag</button>
        </form>
        <div className='tag-list-area'>
          <h3 className='tag-title'>Tags:</h3>
          {this.props.tags.map((tag) => {
            if (tag) {
              return <Link to={`/tags/${tag.tagname}`}><div className='tag-item'><div onClick={this.props.deleteClick} className='delete-tag'>x </div>{tag.tagname}</div></Link>
            }
          })}
        </div>
      </main>
    )
  }
  else {
    return "LOADING"
  }
  }
}

export default TagList;
