'use client';
// import { sendEmail }   from '../../app/api/send/route';
import Square from '../../../public/icons/square.svg';
import BtnPrimary from '../BtnPrimary/BtnPrimary';
import s from './FormContact.module.css';

export default function FormContact() {
  // const sendData = async (formData)=>{
  //   'use server';
  //   const data = await formData.get('name');
  //   sendEmail(data)
  // }
  const handleSubmit =()=>{
    console.log('click');
    
  }

  return (
    <form className='flex flex-col items-center gap-5 mm:gap-[30px] xl:gap-[40px]'>
      <div className='w-full flex flex-col mm:flex-row gap-5 mm:gap-6 xl:gap-0 xl:justify-between'>
        <div className='w-full xl:w-4/12 flex flex-col gap-5'>
          <input className={s.input_item} name="name" type="text" required placeholder="Enter Your name" />
          <input className={s.input_item} name="company" type="text" required placeholder="Enter Company name" />
          <input className={s.input_item} name="email" type="email" required placeholder="Enter E-mail" />
          <input className={s.input_item} name="phone" type="number" required placeholder="Enter Phone number" />
        </div>
        <textarea className={s.textarea_item} name="description" required placeholder="Enter project Description"></textarea>
      </div>
      <BtnPrimary title={'Submit order'}  typeBtn={'submit'} onClick={handleSubmit}><Square width={24} height={24} /></BtnPrimary>
    </form>
  );
}