import {NextResponse} from "next/server";

export async function GET (){
    try {
        const greeting = "Hello World!!"
        const json = {
            greeting
        };
        
        return NextResponse.json(json);
    
    } catch (error) {
        console.log(error)
    }
}