import type { FC } from "react";
import { FaHeart } from "react-icons/fa";
import  DOMPurify  from "dompurify"

interface Props {
     description: string;      
}

const Foot: FC<Props> = ({description}) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
          <div className="flex gap-2">
             <button className="flex-1 p-4 bg-black rounded-lg cursor-pointer">Sepete Ekle</button>
             <button className="bg-black rounded-lg p-4 cursor-pointer">
                <FaHeart />      
             </button>
           </div> 

           <button className="bg-my-blue p-4 rounded-lg cursor-pointer">Hemen Satın Al</button>
      </div>
      <div>
           <h2 className="fonr-semibold mt-8 mb-2 text-[24px] text-grey-dark">Bu Ürün Hakkında</h2>

           <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}></p>
      </div>
    </div>
  )
}

export default Foot;