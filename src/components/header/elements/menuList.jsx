import Link from "next/link";
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";
const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">
          Home
          {/* <FaPlus /> */}
        </Link>
        {/* <ul className="sub-menu menu-pages-img-show">
          <li>
            <Link href="/">Home Style 01</Link>
            <img src="/img/home-demos/home-1.jpg" alt="#" />
          </li>
          <li>
            <Link href="/home/page-two">Home Style 02</Link>
            <img src="/img/home-demos/home-2.jpg" alt="#" />
          </li>
        </ul> */}
      </li>
      <li className="menu-icon">
        <Link href="/about">
          About
        </Link>
        {/* <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/history">History</Link>
          </li>

          <li>
            <Link href="/team">Team</Link>
          </li>
        </ul> */}
      </li>
      <li className="menu-icon">
        <Link href="/properties">Properties</Link>
      </li>
      <li className="menu-icon">
        <Link href="/faq">FAQs</Link>
      </li>
      {/* <li className="menu-icon mega-menu-parent">
        <Link href="#">
          Pages <FaPlus />
        </Link>
        <ul className="mega-menu mega-menu column-4">
          <li>
            <Link href="#">Inner Pages</Link>
            <ul>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/portfolio/page-two">Portfolio - 02</Link>
              </li>

              <li>
                <Link href="/team">Team</Link>
              </li>

              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">Inner Pages</Link>
            <ul>
              <li>
                <Link href="/history">History</Link>
              </li>
              <li>
                <Link href="/add-listing">Add Listing</Link>
              </li>
              <li>
                <Link href="/locations">Google Map Locations</Link>
              </li>
              <li>
                <Link href="/404">404</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/coming-soon">Coming Soon</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">Property Pages</Link>
            <ul>
              <li>
                <Link href="/shop">Property</Link>
              </li>
              <li>
                <Link href="/shop/left-sidebar">Property Left sidebar</Link>
              </li>
              <li>
                <Link href="/shop/right-sidebar">Property right sidebar</Link>
              </li>
              <li>
                <Link href="/shop/grid">Property Grid</Link>
              </li>
              <li>
                <Link href="/shop/list">Property List</Link>
              </li>

              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/shop">
              <img src="/img/banner/menu-banner-1.jpg" alt="#" />
            </Link>
          </li>
        </ul>
      </li> */}
      <li>
        <Link href="/contact">Contact</Link>
      </li>

      {addListing ? (
        <li className="special-link">
          <Link href="/add-listing">Add Listing</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default MenuList;
