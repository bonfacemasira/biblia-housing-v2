import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="mailto:info@bibliahousing.com">
              <FaEnvelope />
              <i></i>info@bibliahousing.com
            </Link>
          </li>
          <li>
            <Link href="/locations">
              <FaMapMarkerAlt />
              Block I, Kamirembe Place, Nairobi
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
