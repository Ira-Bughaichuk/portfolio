// 'use client';
// // import { useFormStatus } from "react-dom";
// import BtnForm from '../BtnForm/BtnForm';

// import Square from '../../../public/icons/square.svg';
// import { sendEmail } from '@/actions/sendEmail';


// import s from './FormContact.module.css';

// export default function FormContact() {
//   // const { pending } = useFormStatus();
  
//   return (
//     <form  action={ async (formData) => {
//       const { error } = await sendEmail(formData);

//       if (error) {
//         alert(error);
//         //alert("This data don't sent.")
//         return;
//       }
//       alert("Email sent successfully!")
//     }} className='flex flex-col items-center gap-5 mm:gap-[30px] xl:gap-[40px]'>
//       <div className='w-full flex flex-col mm:flex-row gap-5 mm:gap-6 xl:gap-0 xl:justify-between'>
//         <div className='w-full xl:w-4/12 flex flex-col gap-5'>
//           <input className={s.input_item} name="usernName" type="text" required placeholder="Enter Your name" />
//           <input className={s.input_item} name="companyName" type="text" required placeholder="Enter Company name" />
//           <input className={s.input_item} name="senderEmail" type="email" required placeholder="Enter E-mail" />
//           <input className={s.input_item} name="phone" type="text" required placeholder="Enter Phone number" />
//         </div>
//         <textarea className={s.textarea_item} name="message" required placeholder="Enter project Description"></textarea>
//       </div>
//       <BtnForm title={'Submit order'} typeBtn={'submit'}><Square width={24} height={24} aria-label="Square"/></BtnForm>
//     </form>
//   );
// }