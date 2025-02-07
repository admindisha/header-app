import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { GrAnnounce } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { LiaLanguageSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Just<span className="highlight">dial</span></div>
      <nav>
        <ul>
          <li> <div style={{color:"blue"}}> <LiaLanguageSolid />EN <IoIosArrowDown /></div></li>
          <li>We are Hiring</li>
          <li>Investor Relations</li>
          <li> <TfiEmail /> Leads</li>
          <li> <GrAnnounce />Advertise</li>
          <li className="business-container">
            <span className="business">BUSINESS</span>
            <span className="free-listing"><FaChartLine /> Free Listing</span>
          </li>
          <li> <HiOutlineBellAlert /> <button className="login">Login / Sign Up</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;