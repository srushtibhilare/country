
import { MdLocationOn } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';
import "./Footers.css"; // Ensure this path is correct

const footerItems = [
  {
    icon: <MdLocationOn />,
    title: "Find us",
    details: "Pune, Maharashtra"
  },
  {
    icon: <IoCallSharp />,
    title: "Call us",
    details: "9579905285"
  },
  { 
    icon: <TbMailPlus />,
    title: "Mail us",
    details: "country@gmail.com"
  },
];

const Footers = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {footerItems.map((item, index) => (
          <div key={index} className="footer-item">
            <div className="footer-icon">{item.icon}</div>
            <h3 className="footer-title">{item.title}</h3>
            <p className="footer-details">{item.details}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footers;
