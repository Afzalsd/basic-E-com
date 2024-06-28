import './Footer.css';
import { IoMdContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <div className='d-flex felx-wrap justify-content-around bg-dark text-center text-white p-5 fs-4'>
      <div>
        <p className='text-info display-4'><IoMdContact /></p>
        <p>PVP SIT : 1234567</p>
        
      </div>
      <div>
      <p className='text-info display-4'><IoMdMail /></p>
        <p>pvp@mail.com</p>
      </div>
    </div>
  )
}

export default Footer