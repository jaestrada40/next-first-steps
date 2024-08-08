import { Metadata } from "next";



export const metadata: Metadata = {
 title: 'SEO Contact',
 description: 'SEO Contact Description',
 keywords: ['Keywords', 'Contact']
};


export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}