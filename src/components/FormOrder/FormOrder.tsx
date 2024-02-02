export default function FormOrder() {
  return (
    <form>
      <input name="name" type="text" id="" placeholder="Enter Your name" />
      <input name="company" type="text" id="" placeholder="Enter Company name" />
      <input name="email" type="email" id="" placeholder="Enter E-mail" />
      <input name="phone" type="number" id="" placeholder="Enter Phone number" />
      <textarea name="description" id="" placeholder="Enter project Description"></textarea>
      <button type="submit" className="font-roboto text-color-secondary px-5 py-4 w-full flex gap-4 md:w-[198px] xl:w-[281px] xl:px-[40px] xl:gap-[26px] justify-center  bg-color-btn-primary outline-none border-none rounded-[8px] text-xl font-bold leading-6 xl:text-2xl xl:leading-[28.8px]">Submit order</button>
    </form>
  );
}
