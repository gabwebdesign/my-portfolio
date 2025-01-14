import './main.css';

export default function Main() {
    return (
        <div className="main bg-gray-100 w-full">
            <div className="w-full item row-span-3 bg-blue"></div>
            <div className="w-full item row-span-7 bg-orange"></div>
            <div className="w-full flex justify-between">
                <div className='brand-colors flex h-full rounded-md overflow-hidden'>
                    <div className='w-12 h-full bg-blue'></div>
                    <div className='w-12 h-full bg-orange'></div>
                    <div className='w-12 h-full bg-background'></div>
                </div>
                <p className='text-5xl text-blue special-font'>gab</p>
            </div>
            <div className="w-full item row-span-6 bg-blue"></div>
            <div className="w-full item row-span-4 bg-blue">
                <nav className='flex flex-col'>
                    <ul className='pl-7 pt-6 text-white'>
                        <li>work</li>
                        <li>contact</li>
                        <li>blog</li>
                    </ul>
                </nav>
            </div>
            <div className="w-full item col-span-2 row-span-6 bg-orange"></div>
            <div className="w-full item row-span-4 bg-blue"></div>
            <div className="w-full item row-span-4 bg-orange"></div>
            <div className="w-full item row-span-2 bg-blue"></div>
            <div className="w-full item row-span-2 bg-blue"></div>
        </div>
    );
}