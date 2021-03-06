import { FiLinkedin } from 'react-icons/fi';
import IconDocument from './assets/IconDocument';
import IconGithub from './assets/IconGithub';
import IconHome from './assets/IconHome';
import IconSuitcase from './assets/IconSuitcase';

import './BotNav.css';

const BotNav = (props) => {
    const {className, onSelectView} = props;

    return (
        <div className={className}>
            <div className='botnav'>
                <a href='/#' title='Home' onClick={() => onSelectView('home')}>
                    <IconHome className='icon-home' />
                </a>
                <a href='/#' title='Projects' onClick={() => onSelectView('projects')}>
                    <IconSuitcase className='icon-suitcase' />
                </a>
                <a href='https://github.com/' target='none' title='GitHub'>
                    <IconGithub className='icon-github' />
                </a>
                <a href='https://linkedin.com/' target='none' title='LinkedIn'>
                    <FiLinkedin className='icon-linkedin' />
                </a>
                <a href='https://www.google.com/intl/en_us/docs/about/' target='none' title='Resume'>
                    <IconDocument className='icon-resume' />
                </a>
            </div>
        </div>
    )
}

export default BotNav;
