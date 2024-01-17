import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home,Notifications,Tables } from "@/pages/dashboard";
import useAPI from "@/utils/useAPI";
import { headers } from "@/base_url";
import axios from "axios";

export function Dashboard() {  
  const axiosInstance = axios.create()
    let endpoint = `/manage/get_object_counts`;
    const [StoredTokens,CallAPI] = useAPI()    
  useEffect(() => {    
    CallAPI(StoredTokens,axiosInstance,endpoint,'get',headers).then(responseObj => {
      console.log(responseObj);
    })
  }, [])

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      {/* <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      /> */}
      <div className="p-4 xl:ml-80">
        {/* <DashboardNavbar /> */}
        {/* <Configurator /> */}
        {/* <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton> */}
        {/* <Home/> */}
        {/* <Tables/> */}
        {/* <Notifications/> */}
        <div className="fixed bottom-2 text-blue-gray-600">
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
