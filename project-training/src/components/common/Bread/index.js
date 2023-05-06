import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BreadCrumb({ props }) {
  return (
    <div className="text-lg mt-3 ">
      <ul className="flex ">
        <li className="mr-2"><a href='/' className="no-underline"><FontAwesomeIcon className="text-[#949191] hover:text-[#0a58ca]" icon={faHouse} /> <FontAwesomeIcon icon={faChevronRight} className="text-[#71767f]" /> </a></li>
        <li>{props}</li>
      </ul>
    </div>
  )
}