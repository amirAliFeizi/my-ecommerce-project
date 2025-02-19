import React from 'react';
import { SearchNormal } from 'iconsax-react';


export default function SearchBox() {
    return (
        <div>
            <div className="flex items-center bg-Neutral-93 rounded-md p-2 w-[300px]">
                <input type="text" placeholder="جستجوی محصول ..." className="bg-transparent h-[34px] w-full text-sm  font-IRANSansX outline-none text-Neutral-10 placeholder-Neutral-60 " />
                <SearchNormal className="w-6 h-6 stroke-Neutral-10 cursor-pointer" />
            </div>
        </div>
    );
}
