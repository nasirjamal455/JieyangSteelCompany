import "./Footer.css"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="bg-dark text-light p-5">
      <div className="container-fluid">
        <div className="row">
          
          {/* Build With Section */}
          <div className="col-md-3 mb-4 p-5">
            <h5 className="fw-bold">Jieyang Steel Company</h5>
            {/* <img 
              src="/images/logo.png" // Replace with your logo path
              alt="Hatimi Steel Traders Logo"
              className="img-fluid my-3"
              style={{ maxWidth: '200px' }}
            /> */}
            <p>
              Jieyang Steel Traders is China’s leading exporter and stockist of Stainless Steel Seamless and Welded Pipes, MS/Carbon Steel Pipes, Pipe Fittings, Dairy Tubes & Fittings 316L, Structural Items, Sheets, Coils, Valves, and much more.
            </p>
          </div>

          {/* Head Office Section */}
          <div className="col-md-3 mb-4 p-5">
            <h5 className="fw-bold">Head Office</h5>
            <p><FaMapMarkerAlt/> <strong> Location:</strong><br />
             11-1-5 Dongfang Commercial Street, Jinghai District Tianjin China, Tianjin, China
            </p>
            <p><FaPhoneAlt/><strong> Phone:</strong><br />
              +8613302117758
            </p>
            <p><FaEnvelope/><strong> Email:</strong><br />
         rongshengjames@gmail.com
            </p>
          </div>

          {/* Our Products Section */}
          <div className="col-md-2 mb-4 p-5">
            <h5 className="fw-bold">Our Products</h5>
            <ul className="list-unstyled">
              <li>SS/MS Sheets</li>
              <li>SS/CS Pipes</li>
              <li>SS/CS Fittings</li>
              <li>SS Valves</li>
              <li>SS Tubes</li>
              <li>SS/MS Flanges</li>
              <li>Dairy Tubes/Fittings 316L</li>
              <li>SS/MS Structural Items</li>
            </ul>
          </div>

          {/* Page Links Section */}
          <div className="col-md-3 mb-4 p-5">
            <h5 className="fw-bold">Page Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">Hatimi Steel Traders</a></li>
              <li><a href="/al-maimoon" className="text-light text-decoration-none">Al Maimoon Trading</a></li>
              <li><a href="/ams-traders" className="text-light text-decoration-none">AMS Traders</a></li>
              <li><a href="/blogs" className="text-light text-decoration-none">Blogs</a></li>
              <li><a href="/projects" className="text-light text-decoration-none">Projects</a></li>
              <li><a href="/gallery" className="text-light text-decoration-none">Gallery</a></li>
              <li><a href="/certificates" className="text-light text-decoration-none">Certificates</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
