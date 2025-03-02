import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer bg-white text-dark py-5">
  <div className="container">
    <div className="row">
      {/* Footer Left - Info Section */}
      <div className="col-md-4">
        <h5 className="text-uppercase font-weight-bold">About ContactHub</h5>
        <p>ContactHub helps you stay organized by keeping your important contacts in one place. Whether it's for personal or professional use, we're here to make sure you never lose touch with your most important people.</p>
        <p>&copy; {new Date().getFullYear()} ContactHub. All rights reserved.</p>
      </div>

      {/* Footer Center - Quick Links */}
      <div className="col-md-4 text-center">
        <h5 className="text-uppercase font-weight-bold">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="/" className="text-dark">Home</a></li>
          <li><a href="/about" className="text-dark">About Us</a></li>
          <li><a href="/contact" className="text-dark">Contact</a></li>
          <li><a href="/privacy" className="text-dark">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Footer Right - Social Media Icons */}
      <div className="col-md-4 text-center">
        <h5 className="text-uppercase font-weight-bold">Follow Us</h5>
        <div>
          <a href="#" className="text-dark mx-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-dark mx-3">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-dark mx-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-dark mx-3">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Footer