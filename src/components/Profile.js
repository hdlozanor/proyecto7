import '../css/Profile.css';
import BarraMenu from './Menu';
import Products from './Products';

function Profile(){
    
    return (
        <div className='root'>
            <BarraMenu />
            <Products />
        </div>
    )
}

export default Profile