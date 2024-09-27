/* eslint-disable react/prop-types */

import Button from "./Button";
import Heading from "./Heading";

const WelcomeRightRow = ({
  welcomeText = "Welcome to Brainstake Eschools",
  ...props
}) => {
  return (
    <div {...props} className={`${props?.className} relative`}>
      <div className="absolute bottom-px left-0 my-auto ml-auto mr-8 flex flex-1  rounded-[20px] px-[54px] py-[42px] md:p-5">
        <div className="w-[272px] h-[114px] top-[180px] left-[815px]">
          <Heading
            size="headinglg"
            as={"h4"}
            className="w-[74%] text-[15px] text-left font-bold leading-[37px] text-black-900_01"
          >
            {welcomeText}
          </Heading>
        </div>
      </div>
      <Button className="w-[282px] h-[40px] top-[314px] left-[815px] rounded-[20px]">
        Enrol your school today
      </Button>
      {/*  <div className="absolute right-[-1px] bottom-0 m-auto h-[60px] w-[60px] rounded-[30px] bg-[#000]" /> */}
    </div>
  );
};

export default WelcomeRightRow;
