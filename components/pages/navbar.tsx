import { Phone, Clock10Icon, Menu } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/logo.jpeg';
import { Button } from '../ui/button';

export default function Nav() {
  return (
    <nav className="flex bg-white flex-col items-center w-full">
      <div className='flex justify-between items-center w-full  py-4 px-8'>
        <p>Save a Child&apos;s Future</p>

        <div className='flex gap-4 items-center'>
          <div className='flex gap-4'>
            <p className="flex items-center gap-2">
              <Clock10Icon className="h-4 w-4" />
              <span>Mon - Sat 9.00 - 18.00</span>
            </p>

            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(251) 235-3256</span>
            </p>
          </div>
          <Button className='rounded-none '>Donate Now</Button>
        </div>
      </div>

      <div className='flex justify-around gap-16 border-2 items-center w-full '>
        <div className='border-r-2 p-4'>
          <Image src={logo} alt="Logo" className="h-20 w-20" />
        </div>

        <div className='flex gap-6 px-24'>
          <p className='text-lg  '>Home</p>
          <p className='text-lg  '>About</p>
          <p className='text-lg  '>Contact</p>
          <p className='text-lg  '>Donate</p>
          <p className='text-lg  '>Services</p>
        </div>

        <div className="self-stretch flex items-center border-l-2 px-4">
          <Menu className='h-8 w-8'/>
        </div>
      </div>
    </nav>
  );
}
