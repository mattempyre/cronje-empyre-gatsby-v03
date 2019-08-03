import { Link } from 'gatsby'
import './Header.css'
import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollUp = window.pageYOffset
    if (scrollUp > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={require('../images/CronjeEmpyreWhite.svg')}
              alt="Cronje Empyre Logo"
              width="50"
            />
          </Link>
          <Link to="/bio">Bio</Link>
          <Link to="/music">Music</Link>
          <Link to="/events">Events</Link>
          <Link to="/bookings">
            <button>Book Us</button>
          </Link>
        </div>
      </div>
    )
  }
}
export default Header
