import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/sidebar';
import './layout.scss';

export const Layout: React.FC = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />           
        </div>
    )
}