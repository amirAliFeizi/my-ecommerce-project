import React from 'react';
import { PHONE_NUMBER } from '../../config/constants';
import { CallCalling } from 'iconsax-react';

export default function NavbarContactInfo() {
    return (
        <div className="flex gap-x-4 items-center">
            <div className="flex flex-col">
                <span dir="ltr" className="font-IRANSansXBold text-Neutral-10">
                    {PHONE_NUMBER}
                </span>
                <span className="font-IRANSansX text-Neutral-50 text-sm">تماس با مجموعــــــه</span>
            </div>
            <div className="bg-Primary-main px-1.5 py-3 rounded-md cursor-pointer">
                <CallCalling className="stroke-Neutral-100 w-6 h-6" />
            </div>
        </div>
    );
}
