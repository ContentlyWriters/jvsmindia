"use client";

import { Fragment, useEffect } from "react";
import { useRouter } from "next/navigation";

import LoadingSpinner from "../components/ui/loading";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useUserContext();

 

  return (
    <Fragment>
      
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-10 bg-white">
          <LoadingSpinner />
        </div>
   
      {children}
    </Fragment>
  );
};

export default ProtectedRoute;
