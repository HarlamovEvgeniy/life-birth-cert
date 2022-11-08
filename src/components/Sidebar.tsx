import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { mockData } from "../const/mock";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar__logo">
                    <Image src={'/Logo.svg'} width={150} height={50} alt='Live Birth Registrar'/>
                </div>
                <div className="sidebar__location">
                    <h5>{mockData.location.name}</h5>
                    <span>
                        {
                            mockData.location.street + ', ' +
                            mockData.location.city + ', ' +
                            mockData.location.country
                        }
                    </span>
                </div>
                <div className="sidebar__menu">
                    <Menu/>
                </div>
                <div className="sidebar__footer">
                    <Link legacyBehavior href={'/CertificateList'}>
                        <a>
                            <Image src={'/menu-logout.svg'} width={24} height={24} alt='Certificate List'/>
                            <span>Log Out</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;