import image from "../starter-code/assets/shared/logo.svg";

function Navigation() {
    return (



        <div className='Navbar'>
            <div>
                <img src={image} className='logo' />
            </div>

            

<div className='line'></div>
            <div>
                <ul>
                    <li><a href="">00 Home</a></li>
                    <li><a href="">01 Destination</a></li>
                    <li> <a href="">02 Crew</a></li>
                    <li> <a href="">03 technology</a></li>
                </ul>
            </div>
        </div>

    )
}
export default Navigation;