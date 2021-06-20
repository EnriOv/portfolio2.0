import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

import './TopNav.css';

const TopNav = (props) => {
    const {className} = props;

    return (
        <header className={className}>
            <div className='topnav'>
                <h1 className='site-name'>Lorem Ipsum</h1>
                <div className='toggle-but'>
                    <HiOutlineSun className='toggle-icons'/>
                    <label className='switch'>
                        <input type='checkbox' />
                        <span className='slider round'></span>
                    </label>
                    <HiOutlineMoon className='toggle-icons'/>
                </div>
            </div>
        </header>
    );
}

export default TopNav;
