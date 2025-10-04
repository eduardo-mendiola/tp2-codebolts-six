const Header = () => {
    return (
        <header className="header-information">F
            <div class="header-left">
                <p class="name_edu">Eduardo</p>
                <p class="lastname_edu">Mendiola</p>
            </div>
            <div class="header-right">
                <div class="city-container">
                    <p class="city_edu">Mar del Plata</p>
                    <div class="sun_icon" id="sun_icon"></div>
                </div>
                <p class="age_number">44<span class="age_years">años</span></p>
            </div>
        </header>
    );
}

export default Header;