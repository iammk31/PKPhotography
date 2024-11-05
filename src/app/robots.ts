import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots{
    return{
        rules:[
            {
                userAgent: "*",
                allow: "/",
                disallow:["/admin", "/privacy"]
            }
        ],
        sitemap: 'https://pkphotography.vercel.app/sitemap.xml'
    }
}