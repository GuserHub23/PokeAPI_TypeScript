
const Footer = () => {
    return (
        <footer className="bg-dark min-vw-100">
            <h4 className="text-center text-light m-auto h3 py-3">Contact</h4>
            <div className="d-flex justify-content-center gap-5 text-center m-auto">
                <a 
                    href="https://github.com/GuserHub23/PokeAPI_TypeScript"
                    className="text-light text-decoration-none my-4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fas fa-search d-flex flex-column text-center h3"></i>
                    <p className="h6">View code</p>
                </a>

                <a 
                    href="https://github.com/GuserHub23"
                    target="_blank"
                    className="text-light text-decoration-none my-4"
                    rel="noreferrer"
                >
                    <i className="fab fa-github d-flex flex-column text-center display-6"></i>
                    <p className="h6">GitHub</p>
                </a>

                <a 
                    href="https://www.linkedin.com/in/juan-pablo-g%C3%B3mez-837a3321a/"
                    target="_blank"
                    className="text-light text-decoration-none my-4"
                    rel="noreferrer"
                >
                    <i className="fab fa-linkedin d-flex flex-column text-center display-6"></i>
                    <p className="h6">LinkedIn</p>
                </a>

            </div>
        </footer>
    );
}

export default Footer;
