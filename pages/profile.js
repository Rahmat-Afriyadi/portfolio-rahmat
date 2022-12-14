import dynamic from 'next/dynamic';

const ProfileSeciton = dynamic(() => import("../components/ProfileSection"), { ssr: false })  ;
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false })  ;

export default function profile(){
    return (
        <>
            <Navbar heroHeight={0} />
            <ProfileSeciton />
            <footer className="text-sm tracking-wider text-gray-300 font-semibold text-center bg-[#2d253a] py-6">
                DESIGN BY RAHMAT
            </footer>
        </>
    )
}