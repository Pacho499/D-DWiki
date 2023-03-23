import logo from '../images/logo.jpg'
import { faBook, faMapLocationDot, faPen, faUser, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const NavBar = () => {

    const [translateMenu, setTranslateMenu] = useState(false)

    return (
        <div className="flex justify-around h-[10vh] bg-main">
            <div className='flex items-center'>
                <img className='h-[8vh] rounded-full' src={logo} alt="logo" />
                <h1 className='text-lg ml-6'>D&D fanWiki</h1>
            </div>
            <div className='flex items-center'>
                <div>
                   <FontAwesomeIcon className='p-3' icon={faLanguage} size='2x' onClick={() => setTranslateMenu(!translateMenu)}/> 
                    {translateMenu && 
                        <ul className=' bg-buttons py-2 rounded-md absolute text-center'>
                            <li className='px-4 py-2 hover:bg-buttonsHover'>IT</li>
                            <li className='px-4 py-2 hover:bg-buttonsHover'>EN</li>
                            <li className='px-4 py-2 hover:bg-buttonsHover'>ES</li>
                            <li className='px-4 py-2 hover:bg-buttonsHover'>FR</li>
                        </ul>
                    }
                </div>
                
                <FontAwesomeIcon className='p-3' icon={faBook} size='2x'/>
                <FontAwesomeIcon className='p-3' icon={faMapLocationDot} size='2x'/>
                <FontAwesomeIcon className='p-3' icon={faPen} size='2x'/>
                <FontAwesomeIcon className='p-3' icon={faUser} size='2x'/>
            </div>
        </div>
    )
}

export default NavBar