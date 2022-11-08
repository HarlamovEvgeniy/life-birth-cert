import {ReactNode, FC} from 'react';
import MyHead from '../components/MyHead';
import Sidebar from '../components/Sidebar';

type Props = { children: ReactNode }

const Layout: FC<Props> = ({ children }) => {
    return (
        <main className='main'>
            <MyHead />
            <Sidebar/>
            <div className='content'>
                <div className="content__wrapper">
                    {children}
                </div>
            </div>
        </main>
    );
}

export default Layout;