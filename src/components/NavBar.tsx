import logo from '../images/logo.jpg'
import { faBook, faMapLocationDot, faPen, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
    return (
        <div className="flex justify-around h-[10vh] bg-main">
            <div className='flex items-center'>
                <img className='h-[8vh] rounded-full' src={logo} alt="logo" />
                <h1 className='text-lg ml-6'>D&D fanWiki</h1>
            </div>
            <div className='flex items-center'>
                <FontAwesomeIcon className='p-4' icon={faBook} size='2x'/>
                <FontAwesomeIcon className='p-4' icon={faMapLocationDot} size='2x'/>
                <FontAwesomeIcon className='p-4' icon={faPen} size='2x'/>
                <FontAwesomeIcon className='p-4' icon={faUser} size='2x'/>
            </div>
        </div>
    )
}

export default NavBar