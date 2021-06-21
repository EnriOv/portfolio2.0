import { FiLinkedin } from 'react-icons/fi';
import IconHome from './assets/IconHome';
import IconSuitcase from './assets/IconSuitcase';
import IconGithub from './assets/IconGithub';
import IconDocument from './assets/IconDocument';

import './BotNav.css';

const BotNav = (props) => {
    const {className} = props;

    return (
        <div className={className}>
            <div className='botnav'>
                <a href='blank' title='Home'><IconHome className='icon-home' /></a>
                <a href='blank' title='Projects'><IconSuitcase className='icon-suitcase' /></a>
                <a href='blank' title='GitHub'><IconGithub className='icon-github' /></a>
                <a href='blank' title='LinkedIn'><FiLinkedin className='icon-linkedin' /></a>
                <a href='blank' title='Resume'><IconDocument className='icon-resume' /></a>
            </div>
        </div>
    )
}

export default BotNav;
