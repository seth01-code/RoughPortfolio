import { TbMenuDeep } from "react-icons/tb";
import './Header.css'

function Header() {
  return (
    <>
      <section className="Header-container">
        <div className="spacing">
            <h2>Prideof_All</h2>
            <p>sethikhielea@gmail.com</p>
            <span>
            <TbMenuDeep/>
            </span>
        </div>
      </section>
    </>
  )
}

export default Header
