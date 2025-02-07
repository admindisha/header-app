import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { GrAnnounce } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Just<span className="highlight">dial</span></div>
      <nav>
        <ul>
          <li>EN <IoIosArrowDown /></li>
          <li>We are Hiring</li>
          <li>Investor Relations</li>
          <li> <TfiEmail /> Leads</li>
          <li> <GrAnnounce />Advertise</li>
          <li className="business-container">
            <span className="business">BUSINESS</span>
            <span className="free-listing"><FaChartLine /> Free Listing</span>
          </li>
          <li><button className="login">Login / Sign Up</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;