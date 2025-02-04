import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { PiTiktokLogo } from "react-icons/pi";

const Footer = () => {
    return ( 
        <div className="w-full h-auto bg-zinc-900 p-3">  
            

                <div className="flex flex-col gap-7 md:flex md:flex-row md:justify-between md:px-16">

                    <div className="flex flex-col gap-1">
                        <h2 className="text-sm font-semibold uppercase text-primary">Visão Imóveis</h2>
                        <p className="text-xs">Rua Grécia, qd. 54, lt 01, lojas 09 e 10, Parque Esplanada 3</p>
                        <p className="text-xs">Valparaíso de Goiás - GO</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-semibold text-primary">Site</h2>
                        <Link href="/">
                            <p className="text-xs hover:text-primary">Home</p>
                        </Link>
                        <Link href="/enterprise/recommended">
                            <p className="text-xs hover:text-primary">Imóveis</p>
                        </Link>
                        <Link href="/about">
                            <p className="text-xs hover:text-primary">Quem Somos</p>
                        </Link>
                        <Link href="/contact">
                            <p className="text-xs hover:text-primary">Contato</p>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-semibold text-primary">Redes Sociais</h2>
                        <div className="flex items-center gap-1 hover:text-primary">
                            <InstagramIcon size={15} />
                            <Link href="https://www.instagram.com/_visaoimoveis/">
                                <p className="text-xs">Instagram</p>
                            </Link>
                        </div>
                        <div className="flex items-center gap-1 hover:text-primary">
                            <FacebookIcon size={15} />
                            <Link href="https://www.facebook.com/profile.php?id=100071623339976&locale=pt_BR">
                                <p className="text-xs">Facebook</p> 
                            </Link>
                        </div>
                        <div className="flex items-center gap-1 hover:text-primary">
                            <YoutubeIcon size={15} />
                            <Link href="https://youtube.com/@visaoimoveis7431?si=q6p4Ydo8EJkvvuna">
                                <p className="text-xs">YouTube</p> 
                            </Link>
                        </div>
                        <div className="flex items-center gap-1 hover:text-primary">
                            <PiTiktokLogo size={15} />
                            <Link href="https://www.tiktok.com/@visaoimoveis.mkt?_t=8oTtXEeYeGL&_r=1">
                                <p className="text-xs">TikTok</p> 
                            </Link>
                        </div>                       
                       
                    </div>
                </div>

                <div className="py-6">
                    <Separator />
                </div>

                <div className="flex justify-between items-center pb-5">
                    <p className="text-xs">Copyright © 2024 Desenvolvido por Luiz Felipe</p>
                    <p className="text-xs">(61) 98664-9103</p>
                </div>

            



        </div>
     );
}
 
export default Footer;