import './styles/Navbar.scss';

function Navbar() {
  return (
    <div className='navBar'>
      <div className='navHero'>
        <h2>Eklavya Singh</h2>
      </div>

      <div className='navMenu' data-aos='fade-down' data-aos-duration='800'>
        <ul>
          <div className='navItem'>
            <li>
              Home
              <div className='underline'></div>
            </li>
          </div>
          <div className='navItem'>
            <li>
              About
              <div className='underline'></div>
            </li>
          </div>
          <div className='navItem'>
            <li>
              Projects
              <div className='underline'></div>
            </li>
          </div>
          <div className='navItem'>
            <li>
              Contact
              <div className='underline'></div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
