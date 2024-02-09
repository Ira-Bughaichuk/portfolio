// import { sendEmail }   from '../../app/api/send/route';

export default function FormContact() {
  // const sendData = async (formData)=>{
  //   'use server';
  //   const data = await formData.get('name');
  //   sendEmail(data)
  // }
  return (
    <form>
      <input name="name" type="text" required placeholder="Enter Your name" />
      <input name="company" type="text" required placeholder="Enter Company name" />
      <input name="email" type="email" required placeholder="Enter E-mail" />
      <input name="phone" type="number" required placeholder="Enter Phone number" />
      <textarea name="description" required placeholder="Enter project Description"></textarea>
      <button type="submit" className="font-roboto text-color-secondary px-5 py-4 w-full flex gap-4 md:w-[198px] xl:w-[281px] xl:px-[40px] xl:gap-[26px] justify-center  bg-color-btn-primary outline-none border-none rounded-[8px] text-xl font-bold leading-6 xl:text-2xl xl:leading-[28.8px]">Submit order</button>
    </form>
  );
}
