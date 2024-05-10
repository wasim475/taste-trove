

import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img className="h-14 w-14 rounded-full" src={logo}/>
    <p>Taste Trove Restaurant Ltd.<br/>Providing healthy and delicious food since 2020</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Culinary Creations</a>
    <a className="link link-hover">Dining Experience</a>
    <a className="link link-hover">Event Catering</a>
    <a className="link link-hover">Culinary Workshops</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;