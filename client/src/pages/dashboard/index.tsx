
import { type FC } from 'react'
import useShoes from '../../hooks/useShoes';
import Loader from '../../components/loader';
import Error from '../../components/error';
import { Link } from 'react-router-dom';

const Dashboard: FC = () => {
  const {shoes, remove} = useShoes();
  const {isLoading, error, data} = shoes();

  if (isLoading) return <Loader/>;

  if (error) return <Error message={error.message} />;

  return (
    <div>
      <div className='flex justify-between mb-5 items-center'>
        <h1 className='text-2xl md:text-3xl font-semibold'>Ürünler</h1>

        <Link className='bg-my-blue px-4 py-1 md:px-6 md:py-2 rounded-md text-white hover:bg-my-blue/90 transition cursor-pointer ' to="/admin/create">
          Ürün Ekle
        </Link>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='text-xs text-gray-700 bg-gray-50 uppercase'>
            <tr>
              <th className='px-16 py-3'></th>
              <th className='px-16 py-3'>İSİM</th>
              <th className='px-16 py-3'>Fİyat</th>
              <th className='px-16 py-3 text-nowrap'>İNDİRİM (%)</th>
              <th className='px-16 py-3'>Eylemler</th>
            </tr>
          </thead>

          <tbody>
             {data?.map((item) => (
              <tr key={item._id} className='bg-white border-b border-gray-200 hover:bg-gray-50'>
                <td className='px-6 py-4'>
                  <img src={item.picture[0]} alt={item.name} className='w-16 md:w-28 max-w-full max-h-full rounded-xl'/>
                </td>
                <td className='px-6 py-4 text-center text-gray-900 font-semibold'>{item.name} </td>
                <td className='px-6 py-4 text-center text-gray-900 font-semibold'>${item.price} </td>
                <td className='px-6 py-4 text-center text-black font-semibold'>{item.discount > 0 ? `${item.discount}%` : "yok" } </td>
                <td className='px-6 py-4 text-center'>
                  <Link to={`/admin/edit/${item._id}`} className=' text-my-blue/90 pe-3 transition hover:underline'>
                  Düzenle
                  </Link>

                  <button onClick={() => remove.mutate(item._id)} className=' text-red-600 hover:underline cursor-pointer'>Sil</button>
                </td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard;