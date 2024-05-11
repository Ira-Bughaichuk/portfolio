
// import EmailTemplate from '@/components/EmailTemplate/EmailTemplate';
//  import { Resend } from 'resend';
// import * as React from 'react';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     // const body = await request.json();
//     // console.log("body", body);
    
//     const data = await resend.emails.send({
//         from: 'Acme <onboarding@resend.dev>',
//         to: ['irynabugaichuk7@gmail.com'],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
//     });

//     // if (data.status === 'success') {
//     //   return NextResponse.json({ message: 'email seccess!!!' });
//     // }

//     return NextResponse.json({ data });
//   } catch (error) {
//     return NextResponse.json({ error });
//     // console.log('error', error);
    
//   }
// }

