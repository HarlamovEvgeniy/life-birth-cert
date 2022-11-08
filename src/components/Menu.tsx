import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Menu = () => {
    const { pathname } = useRouter();
    const pathnames = pathname.split('/').filter((x) => x);
    
    return (
        <nav>
            <ul>
                <li className={(pathnames[0] === 'certificates' && pathnames[1] !== 'create-new') ? 'sidebar__menu--item sidebar__menu--parrent active' : 'sidebar__menu--item sidebar__menu--parrent'}>
                    <Link legacyBehavior href={'/certificates/all-issued'}>
                        <a>
                            <Image src={'/menu-cert.svg'} width={24} height={24} alt='Certificate List'/>
                            <span>Certificates</span>
                        </a>
                    </Link>
                    <ul className="sidebar__menu--supmenu">
                        <li>
                            <Link legacyBehavior href={'/certificates/all-issued'}>
                                <a>All Issued</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href={'/certificates/drafted'}>
                                <a>Drafted</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href={'/certificates/unsigned'}>
                                <a>Unsigned</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={pathnames[1] === 'create-new' ? 'sidebar__menu--item active' : 'sidebar__menu--item'}>
                    <Link legacyBehavior href={'/certificates/create-new'}>
                        <a>
                            <Image src={'/menu-user.svg'} width={24} height={24} alt='Create New'/>
                            <span>Create New</span>
                        </a>
                    </Link>
                </li>
                <li className={pathnames[0] === 'users' ? 'sidebar__menu--item active' : 'sidebar__menu--item'}>
                    <Link legacyBehavior href={'/users/all-users'}>
                        <a>
                            <Image src={'/menu-users.svg'} width={24} height={24} alt='Users'/>
                            <span>Users</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;