import image from "../starter-code/assets/shared/logo.svg";

function Navigation() {
    return (



        <div className='Navbar'>
            <div>
                <img className='logo'  src={image}/>
            </div>

            

<div className='line'></div>
            <div>
                <ul>
                    <li><a href="./00 Home">00 Home</a></li>
                    <li><a href="./01 Destination">01 Destination</a></li>
                    <li> <a href="./02 Crew">02 Crew</a></li>
                    <li> <a href="./03 technology">03 technology</a></li>
                </ul>

            </div>
        </div>

    
    )
}
export default Navigation;