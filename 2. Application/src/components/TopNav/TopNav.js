import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

import './TopNav.css';

const TopNav = (props) => {
    const {className} = props;

    return (
        <header className={className}>
            <div className='topnav'>
                <h1 className='site-name'>Lorem Ipsum</h1>
                <div className='toggle-but'>
                    <div>
                    <HiOutlineSun className='toggle-icons'/>
                    </div>
                    <label className='switch'>
                        <input type='checkbox' />
                        <span className='slider round'></span>
                    </label>
                    <div>
                        <HiOutlineMoon className='toggle-icons'/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopNav;
