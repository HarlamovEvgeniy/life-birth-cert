import {ReactNode, FC} from 'react';
import MyBreadcrumbs from './MyBreadcrumbs';

type HeaderProps = { 
    title: string,
    supportControll?: ReactNode
}

export const Header: FC<HeaderProps> = ({title, supportControll}) => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__left">
                    <h1 className="title">{title}</h1>
                    <div className="breadcrumbs">
                        <MyBreadcrumbs/>
                    </div>
                </div>
                <div className="header__right">
                    {supportControll}
                </div>
            </div>
        </div>
    );
}