export default function Footer() {
    return (
        <footer>
            <div>
                <img className="logo" src="/Logo.svg" alt="logo" />
            </div>
            <p>Email: nikoletaogoryalkova@gmail.com</p>
            <a
                className="linkedin-mail-icon"
                href="https://www.linkedin.com/in/nikoleta-ogoryalkova-662a70125/"
                rel="noopener noreferrer"
                title="Message me on LinkedIn"
                target="_blank"
            >
                <img
                    src="/Linkedin-icon.svg"
                    alt="linkedin-icon"
                />
            </a>
            <a
                className="email-icon"
                href="mailto:nikoletaogoryalkova@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Send me an email"
            >
                <img
                    src="/Mail-icon.svg"
                    alt="mail-icon"
                />
            </a>
            <div className="footer-text">
                <p>&copy; 2025 by Nikoleta Ogoryalkova.</p>
            </div>
        </footer>
    );
}