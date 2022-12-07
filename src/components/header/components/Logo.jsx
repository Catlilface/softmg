import { Link } from 'react-router-dom'

const Logo = (props) => (
  <Link className="site-logo" to="/">
    <img className="site-logo-img"  src={ props.src } />
  </Link>
)

export default Logo