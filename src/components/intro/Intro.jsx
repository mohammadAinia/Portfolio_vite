import { useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';

export default function Intro() {
    const textRef = useRef();
    const initialized = useRef(false);

    useEffect(() => {
        if (textRef.current && !initialized.current) {
            init(textRef.current, {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: [
                    "Full Stack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                    "AI Enthusiast"
                ],
            });
            initialized.current = true;
        }
    }, []);

    return (
        <section className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img 
                        src='assets/man.png' 
                        alt='Portrait of Mohammad Ainia' 
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="right">
                <header className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Mohammad Ainia</h1>
                    <h3>
                        <span className="static-title">Software Engineer</span> <br />
                        <span ref={textRef}></span>
                    </h3>
                </header>
                <a href='#projects' aria-label="Scroll to Portfolio Section">
                    <img src='assets/down.png' alt="Scroll Down" />
                </a>
            </div>
        </section>
    );
}
