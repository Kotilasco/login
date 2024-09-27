import { Helmet } from "react-helmet";
import Img from "../../components/Img";
import Header from "../../components/Header";
import LoginSection from "../../components/Login/LoginSection";
import Footer from "../../components/layout/Footer";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login - Access Your Brainstake eSchools Account</title>
        <meta
          name="description"
          content="Sif=gn in to Brainstake eSchools to manege your account"
        />
      </Helmet>

      <div className="relative min-h-screen dark:bg-gray-900 font-appFont enrol_your_school_container">
        <Img
          src={"images/bg.png"}
          alt={"BackgroundImage"}
          className={
            "absolute right-0 top-0 m-auto h-[1424px] w-[86%] rounded-[50px] object-contain"
          }
        />
        <div className="absolute left-0 right-0 top-[5px] m-auto h-[1246px] flex-1 px-[50px] md:px-5">
          <div className="absolute left-0 right-0 top-0 h-[1094px] w-full max-w-[1096px] rounded-[20px] bg-gray-50 md:px-5" />
          <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-9 mr-auto flex h-[1242px] w-full max-w-[1132px] flex-1 flex-col items-center bg-[url(/public/images/bg.png)] bg-cover bg-no-repeat p-11 md:ml-0 md:h-auto md:p-5">
            <div className="mb-[1px] flex w-[84%] flex-col gap-[68px] md:w-full sm:gap-[34px]">
              <Header />
              <LoginSection />
              {/* <Footer /> */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
