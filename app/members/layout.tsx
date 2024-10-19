import Sheet from "@/app/_components/Sheet"
import Hero from "@/app/_components/Hero";

type Prop={
    children : React.ReactNode ;
}
export default function RootLayout({children}: Prop){
    return (
        <>
        <Hero title="members" sub="メンバー"/>
        <Sheet>{children}</Sheet>
        
        </>
    );
    
}