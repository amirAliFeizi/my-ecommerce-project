import { Link, NavLink } from 'react-router-dom';

import React from 'react';
import { ArrowDown2, Profile, ShoppingCart } from 'iconsax-react';

export default function NavbarBottom() {
    return (
        <div className="mx-20 flex items-center justify-between mt-10">
            <div className="font-IRANSansX text-lg flex items-center gap-x-8  text-Neutral-40 child-hover:text-Primary-main child:tracking-tight">
                <NavLink to="/" className="text-Primary-main font-bold">
                    صفحه اصلی
                </NavLink>
                <NavLink to="/products" className=" flex gap-x-1 items-center">
                    محصولات
                    <ArrowDown2 className="w-[18px] h-[18px] stroke-Neutral-40" />
                </NavLink>
                <NavLink to="/blog">بلاگ</NavLink>
                <NavLink to="/faq">سوالات متداول</NavLink>
                <NavLink to="/contact">ارتباط باما</NavLink>
            </div>

            <div className="stroke-Neutral-10 flex items-center gap-x-3 ">
                <div className="relative p-[13px]">
                    <ShoppingCart className="w-6 h-6 cursor-pointer " />
                    <div className="absolute top-1 right-1">
                        <span className=" text-Neutral-100 bg-Primary-shopIcon w-5 h-5 rounded-full flex justify-center items-center font-IRANSansXDemiBold text-sm line-clamp-1">۲</span>
                    </div>
                </div>
                <div className="p-[13px]">
                    <Profile className="w-6 h-6 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
