'use client';
// import { sendEmail }   from '../../app/api/send/route';
import Square from '../../../public/icons/square.svg';
import BtnPrimary from '../BtnPrimary/BtnPrimary';

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
    <form>
      <input name="name" type="text" required placeholder="Enter Your name" />
      <input name="company" type="text" required placeholder="Enter Company name" />
      <input name="email" type="email" required placeholder="Enter E-mail" />
      <input name="phone" type="number" required placeholder="Enter Phone number" />
      <textarea name="description" required placeholder="Enter project Description"></textarea>
      <BtnPrimary title={'Submit order'}  typeBtn={'submit'} onClick={handleSubmit}><Square width={24} height={24} /></BtnPrimary>
    </form>
  );
}