import './style.css';
import NavMenu from './NavMenu';
import { menus as data } from './data'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useCallback, useState, useRef, useEffect } from 'react';


function TreeView() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleMenuClose = (e) => {
      !menuRef?.current?.contains(e.target) && setIsMenuOpen(false);
    }
    document.addEventListener('mousedown', handleMenuClose)

    return (() => document.removeEventListener('mousedown', handleMenuClose))
  })

  useEffect(() => {
    isMenuOpen ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")
  }, [isMenuOpen])

  return (
    <section className='TreeView'>
      <div className="menu" ref={menuRef}>
        <button onClick={handleMenuClick}>
          {isMenuOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
        <div className="menuItems">
          {/* <h2>Tree-View / hamburger menu</h2> */}
          <NavMenu data={data} open={isMenuOpen} />
        </div>
      </div>
    </section>
  )
}

export default TreeView