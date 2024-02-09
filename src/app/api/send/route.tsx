'use server';

// // import FormContact from '@/components/FormContact/FormContact';
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
// // const fromEmail = process.env.FROM_EMAIL;

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: 'Iren <webdecodedtutorials@resend.dev>',
//       to: ['irynabugaichuk7@gmail.com'],
//       subject: 'Hello world',
//       react:(<>
//         <p>Form Body</p>
//       </>),
//     });

//     // return NextResponse.json(data);
//     console.log(data);
    
//   } catch (error) {
//     // return NextResponse.json({ error });
//     console.log(error);
    
//   }
// }


// // export async function POST() {
// //     try {
// //       const data = await resend.emails.send({
// //         from: 'Acme <onboarding@resend.dev>',
// //         to: ['delivered@resend.dev'],
// //         subject: 'Hello world',
// //         react: EmailTemplate({ firstName: 'John' }),
// //       });
  
// //       return NextResponse.json(data);
// //     } catch (error) {
// //       return NextResponse.json({ error });
// //     }
// //   }


// // export const sendEmail = async (formData: FormData)=>{
// //     console.log(formData.get("sendEmail"));
// //     console.log(formData.get("message"));

// //     resend.emails.send({
// //         from:"onboarding@resend.dev",
// //         to:"irynabugaichuk7@gmail.com",
// //         subject:"message from contact form",
// //         text:"hello world"
// //     })  
// // }

