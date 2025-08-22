import type { FC } from "react";
import { useParams } from "react-router-dom";
import useShoes from "../../hooks/useShoes";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Images from "./images";
import Head from "./head";
import Color from "./color";
import Size from "./size";
import Foot from "./foot";

const Detail: FC = () => {

  const { id } = useParams();
  const { shoe } = useShoes();
  const { isLoading, error, data } = shoe(id as string);

  if ( isLoading) return <Loader />

  if (error) return <Error message={error.message}/>

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 xl:gap-15 justify-center ">
      <div className="xl:col-span-2 flex ">
        <Images pictures={data?.picture!} />
      </div>

      <div className="flex flex-col gap-8">
        <Head item={data!}/>
        <Color colors={data?.color!}  />
        <Size sizes={data?.size!} />
        <Foot description={data?.description!} />
      </div>
    </div>
  )
}

export default Detail;