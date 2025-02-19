import React from 'react';
import { SHOP_NAME, SHOP_TAGLINE } from '../../config/constants';
export default function NavBarInfo() {
    return (
        <div className="flex gap-x-4 items-center">
            <div className="w-12.5 h-12.5 bg-Neutral-60"></div>
            <div className="font-sfUIRegular flex flex-col items-start gap-y-px">
                <h1 className="text-2xl text-Neutral-10">{SHOP_NAME}</h1>
                <span className="text-sm text-Neutral-40 tracking-[0.17em]">{SHOP_TAGLINE}</span>
            </div>
        </div>
    );
}
