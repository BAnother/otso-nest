import { Children } from "react"

export default function AuthLayout({
    children,
}:  Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-orange-200 w-screen h-screen overlow-hidden grid">
            <div className="place-content-center place-self-center place-items-center text-center">
               <div className="flex flex-col items-center bottom-10 relative">
                <Image 
                src="/Oxxo_Logo.svg" 
                alt="Logo Otso"  
                width={200} 
                height={0}
                />
               </div> 
                {children}
            </div>
        </div>
    );
}