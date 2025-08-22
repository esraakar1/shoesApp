import type { FC } from "react";



const Heading: FC = () => {
  return (
    <div className=" flex justify-between items-center my-[24px] md:mt-[36px] lg:mt-[50px] xl:mt-[90px] xl:mb-[32px]">
      <h1 className="uppercase font-semibold text-[24px] md:text-[36px] leading-[96%] lg:text-[60px] xl:text-[74px]">Yeni Ürünleri <br/> Kaçırma</h1>

      <button className="bg-my-blue text-white py-[8px] px-[12px] lg:py-[12px] lg:px-[28px] hover:brightness-90 transition rounded-[8px] cursor-pointer">Alışverişe Başla</button>
    </div>
  )
}

export default Heading;