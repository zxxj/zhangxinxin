import { useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close} from "../assets"

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      
      {/* 左侧logo与描述 */}
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
          }}
        > 
          <img className='object-contain w-9 h-9'  src={logo} alt="logo" />

          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            zhangxinxin &nbsp;
            <span className='hidden sm:block'>|&nbsp; JavaScript Mastery</span>
          </p>
        </Link>

        {/* PC端右侧导航栏 */}
        <ul className='flex-row hidden gap-10 list-none sm:flex'>
          {navLinks.map((nav) => (
            <li 
              key={nav.id}
              className={`${active === nav.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* 移动端右侧导航栏 */}
        <div className='flex items-center justify-end flex-1 sm:hidden'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='flex flex-col items-start justify-end flex-1 gap-4 list-none'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar