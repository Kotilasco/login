/* eslint-disable react/prop-types */

import Heading from "./Heading";

const WelcomeRow = ({
  welcomeText = "Welcome to Brainstake Eschools",
  ...props
}) => {
  return (
    <div {...props} className={`${props?.className} relative`}>
      <div className="absolute bottom-px left-0 my-auto ml-auto mr-8 flex flex-1 rounded-[20px] bg-black-900_01 px-[54px] py-[42px] md:p-5">
        <Heading
          size="headinglg"
          as={"h3"}
          className="w-[74%] text-[30px] font-bold leading-[45px] text-white-a700"
        >
          {welcomeText}
        </Heading>
      </div>
      <div className="absolute right-[-1px] top-0 m-auto h-[60px] w-[60px] rounded-[30px] bg-[#efefef]" />
    </div>
  );
};

export default WelcomeRow;


