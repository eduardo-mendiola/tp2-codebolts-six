import '@/components/Header/Header.css';

const Header = ({name, lastName, city, age}) => {
    return (
        <header className="header-information">
            <div className="header-left">
                <p className="name_edu">{name}</p>
                <p className="lastname_edu">{lastName}</p>
            </div>
            <div className="header-right">
                <div className="city-container">
                    <p className="city_edu">{city}</p>
                    <div className="sun_icon" id="sun_icon"></div>
                </div>
                <p className="age_number">{age}<span className="age_years">años</span></p>
            </div>
        </header>
    );
}

export default Header;