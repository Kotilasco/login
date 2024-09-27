import Heading from "./Heading";
import Img from "./Img";
import Text from "./Text";

const Footer = () => {
  return (
    <div className="mr-9 flex flex-col items-center gap-[78px] bg-gray-200_01 p-1 md:mr-0 md:gap-[58px] sm:gap-[39px]">
      <div className="mt-4 flex w-[92%] items-center justify-center md:w-full md:flex-col">
        <Img
          src={"images/logo_container.png"}
          alt={"Logo Image"}
          className={
            "mb-7 h-[52px] w-[22%] self-end object-contain md:w-full md:self-auto"
          }
        />
        <div className="flex flex-1 items-center justify-center md:self-stretch sm:flex-col">
          <div className="flex flex-col items-start">
            <Heading
              as={"h2"}
              className="text-[18px] font-bold text-black-900_01"
            >
              What we do
            </Heading>
            <a href="#">
              <Text
                as={"p"}
                className="text-[16px] font-normal text-black-900_01"
              >
                Student Information System
              </Text>
            </a>
            <a href="#">
              <Text
                as={"p"}
                className="text-[16px] font-normal text-black-900_01"
              >
                Institute Administration
              </Text>
            </a>

            <Text
              as={"p"}
              className="text-[16px] font-normal text-black-900_01"
            >
              Student Perfomance Management
            </Text>
            <a href="#">
              <Text
                as={"p"}
                className="text-[16px] font-normal text-black-900_01"
              >
                Communication
              </Text>
            </a>
          </div>
          <div className="flex flex-col items-start ml-20">
            <Heading
              as={"h3"}
              className="text-[18px] font-bold text-black-900_01"
            >
              Company
            </Heading>
            <a href="#">
              <Text
                as={"p"}
                className="text-[16px] font-normal text-black-900_01"
              >
                About us
              </Text>
            </a>
            <a href="#">
              <Text
                as={"p"}
                className="text-[16px] font-normal text-black-900_01"
              >
                Privacy policy
              </Text>
            </a>
            <Text
              as={"p"}
              className="text-[16px] font-normal text-black-900_01"
            >
              Terms of Service
            </Text>
            <a href="#">
              <Text
                as={"p"}
                className="text-[16px] font-normal text-black-900_01"
              >
                Contact Us
              </Text>
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-[92%] flex-col items-start gap-2 md:w-full">
        <div className="h-[0.97px] self-stretch bg-black-900_7f" />
        <Text
          size="textmd"
          as={"p"}
          className="text-[18px] font-normal text-black-900"
        >
          Brainstake eSchools © 2024 | All rights reserved
        </Text>
      </div>
    </div>
  );
};

export default Footer;
