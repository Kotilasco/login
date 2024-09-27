import { Link } from "react-router-dom";
import Header from "../Header";
import LoginSection from "./LoginSection";

const Login = () => {
  return (
    <div className="flex w-full flex-col items-center bg-gray-900_03 p-1">
      <div className="relative mx-auto mb-1 h-[1246px] w-full max-w-[1136px]">
        <div className="absolute left-0 right-0 top-0 m-auto h-[1094px] w-[1096px] rounded-[20px] bg-gray-50" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[1242px] flex-1 flex-col items-center bg-cover bg-[url(/public/images/bg.png)] bg-no-repeat p-11 md:h-auto md:p-5">
          <div className="mb-[106px] flex w-[84%] flex-col gap-[68px] md:w-full sm:gap-[34px]">
            <Header />
            <LoginSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
