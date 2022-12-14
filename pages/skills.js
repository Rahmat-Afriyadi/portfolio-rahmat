import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false })  ;
const SkillsSection = dynamic(() => import("../components/SkillsSection"), { ssr: false })  ;

export default function skills(){
    return (
        <>
            <Navbar heroHeight={0} notHome={false} />
            <SkillsSection />
            <footer className="text-sm tracking-wider text-gray-300 font-semibold text-center bg-[#2d253a] py-6">
                DESIGN BY RAHMAT
            </footer>
        </>
    )
}