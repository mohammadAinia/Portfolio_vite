import './topbar.scss';
import { Person, Mail, Download, WhatsApp, LinkedIn, GitHub } from '@mui/icons-material';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen ? 'active' : '')} id='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Mohammad Ainia</a>

                    <a href="https://wa.me/966532218805" className="itemContainer" target="_blank" rel="noopener noreferrer">
                        <WhatsApp className="icon" />
                    </a>

                    <a href="mailto:mohammadaymanainia@gmail.com" className="itemContainer">
                        <Mail className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-ainia-342501289" className="itemContainer" target="_blank" rel="noopener noreferrer">
                        <LinkedIn className="icon" />
                    </a>

                    <a href="https://github.com/mohammadAinia" className="itemContainer" target="_blank" rel="noopener noreferrer">
                        <GitHub className="icon" />
                    </a>



                    <a href="/Mohammad_Ainia.pdf" download className="resumeBtn">
                        <Download className="icon" />
                        <span>Resume</span>
                    </a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
