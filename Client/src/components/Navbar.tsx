import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav>
          <ul>
              <Link to='/'>Home</Link> | {" "}
              <Link to='/chats'>Chats</Link>
          </ul>
    </nav>
  )
}

export default Navbar