import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
dotenv.config();

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
    tls: {
        rejectUnauthorized: false, // Bypass self-signed certificate verification
    },
});

export async function POST(request: NextRequest) {
    const data = await request.json();

    const { name, email, message } = data;
    console.log("FFF", name, email, message);
    // const { name, email, message } = request.body;

    // Create a transporter using your email service provider's credentials
    // Send the email
    try {
        await transporter.sendMail({
            from: email,
            // to: process.env.USER, // Your email
            to: "jbvhert2002@gmail.com", // Your email
            subject: `Message from ${name}`,
            text: message,
        });
        console.log("Email sent successfully");

        return NextResponse.json(
            { message: "Email sent successfully" },
            {
                status: 200,
            }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            // Handle the error if it is an instance of Error

            console.log("Error sending email:", error.message);

            return NextResponse.json(
                { error: error.message }, // Send the error message in the response body
                { status: 500, statusText: error.message } // Internal Server Error
            );
        }
        // If it's not an instance of Error, respond with a generic message
        return NextResponse.json(
            { error: "An unknown error occurred" },
            { status: 500, statusText: "Internal Server Error" }
        );
    }
}

// export default function handler(req, res) {
//   // Handle different HTTP methods
//   if (req.method === 'GET') {
//     res.status(200).json({ message: 'Hello World!' })
//   } else {
//     // Handle other methods
//     res.setHeader('Allow', ['GET'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }
