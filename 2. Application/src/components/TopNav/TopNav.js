import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

import './TopNav.css';

const TopNav = () => {
    return (
        <header className='top-nav'>
            <h1 className='site-name'>Lorem Ipsum</h1>
            <div className='toggle-but'>
                <HiOutlineSun className='toggle-icons'/>
                <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider round'></span>
                </label>
                <HiOutlineMoon className='toggle-icons'/>
            </div>
        </header>
    );
}

export default TopNav;
