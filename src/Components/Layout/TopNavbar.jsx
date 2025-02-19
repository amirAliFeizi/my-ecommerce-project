import React from 'react';
import NavBarInfo from '../ui/NavBarInfo';
import NavbarContactInfo from '../ui/NavbarContactInfo';
import SearchBox from '../ui/SearchBox';
export default function TopNavbar() {
    return (
        <div className="mx-20 mt-10 flex justify-between items-center">
            <div className="flex gap-x-8 items-center">
                <NavBarInfo />
                <SearchBox />
            </div>

            <div className="flex gap-x-10 items-center">
                <NavbarContactInfo />
            </div>
        </div>
    );
}
