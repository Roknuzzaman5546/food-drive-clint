import logo from '../../../assets/logo.jpg'
const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer p-10 bg-gray-700 text-pink-600 font-bold font-parmanent">
                <aside className=' flex flex-col items-center'>
                    <img className='w-20 h-20 border-2 border-blue-400 rounded-full bg-gray-200' src={logo} alt="" />
                    <div><p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p></div>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;