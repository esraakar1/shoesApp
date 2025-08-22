
import { type FC } from 'react'
import Form from '../../components/form';
import type { ShoeFormValues } from '../../types';
import { useParams } from 'react-router-dom';
import useShoes from '../../hooks/useShoes';

const Edit: FC = () => {
  const {id } = useParams();
  const { shoe, update } = useShoes();
  const { isLoading, data } = shoe(id as string);

  const onSubmit = (value: ShoeFormValues) => {
    update.mutate({ id: id as string, data: value});
  };

  if (isLoading) {
    return (
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-my-blue mx-auto"></div>
          <p className="mt-4 text-grey-main">Ürün yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center py-10">
          <p className="text-red-500">Ürün bulunamadı</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Ürün Düzenle</h1> 
      <Form onSubmit={onSubmit} data={data} />  
    </div>
  )
}

export default Edit;