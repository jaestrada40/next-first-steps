import type { Metadata } from "next";




export const metadata:Metadata = {
 title: 'SEO About',
 description: 'SEO About Description',
 keywords: ['Keywords', 'About']
};


export default function AboutPage(){
    return(
        <>
            <span className="text-7xl">About Page</span>
        </>
    )

}