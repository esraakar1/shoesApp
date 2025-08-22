import type { FC } from "react";
import Header from "../header";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Loader from "../loader";

interface ProtectedProps {
    allowedRoles?: string[];
}


const Protected: FC<ProtectedProps> = ({allowedRoles}) => {
    // oturumu açık kullanıcı verisine eriş
     const { user, isLoading, error } = useUser();

    // oturum kapalıysa login sayfasına yönlendir
     if (isLoading) return <Loader />;

    //  eğer rolü yetersizse login sayfasına yönlendir
    if (allowedRoles && !allowedRoles.includes(user?.role))
        return <Navigate to="/login" />;

     
    // oturumu açıksa sayfayı göster
 if (user)     
    return (
      <div>
        <Header />

        <Outlet />
      </div>
  );

//  kullanıcı verisi yüklenmediğinde logine yönlendir
if (error) return <Navigate to="/login"/>
};

export default Protected;  