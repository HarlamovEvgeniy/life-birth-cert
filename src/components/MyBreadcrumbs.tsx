import {FC} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

type LinkRouterProps = {
    to: string,
    open?: boolean
}

export const MyBreadcrumbs = () => {
    const router = useRouter();
    const pathnames = router.pathname.split('/').filter((x) => x);

    const breadcrumbNameMap: {[key: string]: string} = {
        '/certificates': 'Certificates',
        '/all-issued': 'All Issued',
        '/drafted': 'Drafted',
        '/unsigned': 'Unsigned',
        '/users': 'Users',
        '/all-users': 'All Users',
        '/create-new': 'New Child',
        '/[id]': 'Certificate #',
    }

    const LinkRouter: FC<LinkRouterProps> = ({to, open}) => {
        const primary = breadcrumbNameMap[to];
        return(
            <Link className="breadcrumbs__link" href={to}>
                {primary}
            </Link>
        )
    }

    return (
        <Breadcrumbs>   
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const isId = pathnames[index] === '[id]';
                const to = `/${pathnames[index]}`;
                
                return(
                    last ? (
                        isId ? (<Typography className="breadcrumbs__text" key={to}>
                            {breadcrumbNameMap[to] + router.query?.id}
                            </Typography>) 
                        : (<Typography className="breadcrumbs__text" key={to}>
                            {breadcrumbNameMap[to]}
                        </Typography> 
                    )) : ( <LinkRouter to={to} key={to}/> )
                );
            })}
        </Breadcrumbs>
    )
}

export default MyBreadcrumbs;