import { IconType } from "react-icons/lib";
import Link from 'next/link'

type MenuItems = {
    title: string;
    address: string;
    Icon: IconType;
}


export const MenuItems = ({title,address,Icon}:MenuItems) => {
  return (
    <>
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
    <Icon className="text-2xl sm:inline mx-4"/>
    <p className="hidden sm:inline my-2 text-sm">{title}</p>
    </Link>
    
    </>
  )
}