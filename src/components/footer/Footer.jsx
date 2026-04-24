import "./footer.css";
import logo from "../../images/svg/logo.svg";
import instagram from "../../images/svg/instagramIcon.svg";
import facebook from "../../images/svg/facebookIcon.svg";
import watsapp from "../../images/svg/whatsappIcon.svg";

export const Footer = () => {
  return (
    <section className="footer">
      <img className="footer-logo" src={logo} alt="logo" />

      <div className="footer-box-address">
        <h3 className="footer-title-address">Address</h3>
        <p className="footer-text-address">
          Svobody str. 35 <br /> Kyiv <br /> Ukraine
        </p>
      </div>
      <div className="footer-box-contacts">
        <h3 className="footer-title-contacts">Contact us</h3>
        <div className="footer-boxIcon-contacts">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={watsapp} alt="watsapp" />
        </div>
      </div>
    </section>
  );
};
