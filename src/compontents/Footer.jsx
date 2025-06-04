export default function Footer() {
    return (
        <footer>
            <div>
                <img className="logo" src="/Logo.svg" alt="logo" />
            </div>
            <div className="footer-text">
                <p><strong>&copy; 2025 by Nikoleta Ogoryalkova</strong></p>
            </div>
            <div className="social-media">
                <a
                    className="email-icon"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nikoletaogoryalkova@gmail.com&su=Let%27s%20Work%20Together"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Send me an email"
                >
                    <img
                        src="/Mail-icon.svg"
                        alt="mail-icon"
                    />
                </a>
                <a
                    className="linkedin-mail-icon"
                    href="https://www.linkedin.com/in/nikoleta-ogoryalkova-662a70125/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Message me on LinkedIn"
                >
                    <img
                        src="/Linkedin-icon.svg"
                        alt="linkedin-icon"
                    />
                </a>
                <a
                    className="github-icon"
                    href="https://github.com/nikoletaogoryalkova"
                    rel="noopener noreferrer"
                    title="View my GitHub"
                    target="_blank"
                >
                    <img
                        src="/Github-icon.svg"
                        alt="Github-icon"
                    />
                </a>
            </div>

        </footer>
    );
}