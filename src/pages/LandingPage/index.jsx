import React, { useState } from "react";
import { Helmet } from "react-helmet";
import IntroductionSection from "./IntroductionSection";
import LandingPageOverviewSection from "./LandingPageOverviewSection";
import Heading from "../../components/Heading";
import Img from "../../components/Img";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WelcomeRow from "../../components/WelcomeRow";
import ChipView from "../../components/ChipView";
import ClientTestimonialsSection from "./ClientTestimonialsSection";
import TextArea from "../../components/TextArea";
import WelcomeRightRow from "../../components/WelcomeRightRow";

const LandingPage = () => {
  const [chipOptions, setChipOptions] = useState(() => [
    { value: 1, label: "Reliable" },
    { value: 2, label: "Available" },
    { value: 3, label: "Accessible" },
    { value: 4, label: "Usable" },
    { value: 5, label: "Secure" },
  ]);

  const [selectedChipOptions, setSelectedChipOptions] = useState([]);
  return (
    <>
      <Helmet>
        <title>Brainstake eSchools - Streamline Educational Management</title>
        <meta
          name="description"
          content="Discover Brainstake eSchools, the comprehensive solution for educational institution management. Enhance efficiency, decision-making, and student performance tracking."
        />
      </Helmet>
      <div className="relative h-[7052px] rounded-t-lg flex mx-auto  w-full bg-gray-900_01 md:h-auto">
        <div className="absolute bottom-0 left-0 w-[85%] right-0 top-0 mx-[100px] my-auto h-max  max-w-[1240px] flex-1 bg-gray-50 md:mx-0 md:px-5">
          <div className="mt-[1958px]">
            <IntroductionSection />
            <div className="mx-[100px] md:mx-0">
              <div>
                <div className="relative z-[1]">
                  <div className="relative z-[2] flex flex-col items-start gap-14 bg-white-a700 py-8 sm:gap-7 sm:py-5">
                    <LandingPageOverviewSection />
                    <Heading
                      size="headingmd"
                      as={"h4"}
                      className="ml-[66px] text-[25px] font-bold text-black-900_01 md:ml-0 md:text-[23px] sm:text-[21px]"
                    >
                      ... and many more to come
                    </Heading>
                  </div>
                  <div className="relative mt-[-26px] h-[580px] bg-gray-200">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 bg-blue_gray-50 py-[174px] pl-28 pr-14 md:p-5">
                      <div className="mt-[174px] h-[4px] w-[10%] bg-gray-900" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[580px] flex-1 px-[198px] py-[68px] md:p-5">
                      <Img
                        src={"images/quotation_marks.png"}
                        alt={"Quotation Marks"}
                        className={
                          "absolute bottom-0 right-[19%] top-0 my-auto h-[444px] w-[90%] object-contain"
                        }
                      />
                      <div className="absolute bottom-[22%] left-0 right-0 m-auto flex flex-1 flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
                        <Img
                          src={"images/3.png"}
                          alt={"Customer image"}
                          className={
                            "h-[100px] w-[12%] self-end object-contain"
                          }
                        />
                        <div className="flex w-[16%] justify-center gap-2.5 md:w-full">
                          <div className="h-[20px] w-[18px] rounded-[50%] border border-solid border-black-900_01 bg-[#efefef]" />
                          <div className="h-[20px] w-[18px] rounded-[50%] border border-solid border-black-900_01" />
                          <div className="h-[20px] w-[18px] rounded-[50%] border border-solid border-black-900_01" />
                          <div className="h-[20px] w-[18px] rounded-[50%] border border-solid border-black-900_01" />
                        </div>
                      </div>
                    </div>
                    <Heading
                      size="heaadingmd"
                      as={"h5"}
                      className="absolute left-[7%] top-[18%] m-auto w-[70%] text-[25px] font-bold leading-[37px] text-black-900_01 md:text-[23px] sm:text-[21px]"
                    >
                      <>
                        Here&apos;s what some of our customers have to say about
                        <br />
                        Brainstake eSchools
                      </>
                    </Heading>
                    <Text
                      size="textxl"
                      as={"p"}
                      className="absolute bottom-[33%] left-[22%] m-auto text-[20px] font-normal italic text-black-900_01"
                    >
                      Headmaster, Langham Girls High School
                    </Text>
                    <Text
                      size="textmd"
                      as={"p"}
                      className="absolute left-[11%] top-[38%] m-auto w-[68%] text-[18px] font-normal italic leading-[27px] text-black-900_01"
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eius, illum labore porro nemo veniam reiciendis alias
                      necessitatibus. Facere veritatis ratione officiis ex
                      blanditiis alias?
                    </Text>
                  </div>
                </div>
                <div className="relative mt-[-34px] h-[230px] bg-gray-200_01 px-11 py-[34px] md:px-5 sm:p-5">
                  <Button
                    size="md"
                    className="absolute bottom-[17%] left-[6%] m-auto min-w-[224px] rounded-[30px] px-[34px] sm:px-5"
                  >
                    Contact us
                  </Button>
                  <Heading
                    size="headingmd"
                    as={"h6"}
                    className="absolute left-[6%] top-[15%] m-auto w-[56%] text-[25px] font-bold leading-[37px] text-black-900_01 md:text-[23px] sm:text-[21px]"
                  >
                    Ready to take school management to the next level? Reach out
                    today
                  </Heading>
                  <Heading
                    size="heading3xl"
                    as={"h1"}
                    className="absolute bottom-[23%] right-[4%] m-auto text-[60px] font-bold text-white-a700 md:text-[52px] sm:text-[46px]"
                  >
                    GET IN TOUCH
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[26px] bg-blue-100 py-[34px] pl-16 pr-14 md:px-5 sm:p-5">
                <div className="flex w-[42%] items-center justify-between gap-5 rounded-[30px] border border-solid border-black-900_01 px-[38px] py-2 md:w-full sm:px-5">
                  <Heading
                    size="text2xl"
                    as={"p"}
                    className=" ml-1.5 self-end text-[25px] font-medium text-black-900_01 md:ml-0 md:text-[23px] sm:text-[21px]"
                  >
                    Hide enquiry form
                  </Heading>
                  <div className="h-[2px] w-[40px] bg-black-900_01" />
                </div>
                <div className=" mb-[46px] mr-3 flex flex-col items-start self-start md:mr-0">
                  <Heading
                    size="text2xl"
                    as={"p"}
                    className="text-[25px] font-medium text-black-900_01 md:text-[23px] sm:text-[21px]"
                  >
                    Have an enquiry? Fill in the form below and we&apos;ll get
                    back to you
                  </Heading>
                  <div className="mt-4 flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Name of school
                    </Text>
                    <Input
                      shape={"round"}
                      type="text"
                      name="School Name Input"
                      placeholder="Enter the name of your school"
                      className="self-stretch rounded-[5px] px-6 sm:px-5 py-3"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Name of Town
                    </Text>
                    <Input
                      shape={"round"}
                      type="text"
                      name="Town Name Input"
                      placeholder="Enter the name of your school town"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Name of District
                    </Text>
                    <Input
                      shape={"round"}
                      type="text"
                      name="District Name Input"
                      placeholder="Enter your school district"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Name of Province
                    </Text>
                    <Input
                      shape={"round"}
                      type="text"
                      name="Province Name Input"
                      placeholder="Enter your school province"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Name of Country
                    </Text>
                    <Input
                      shape={"round"}
                      type="text"
                      name="Country Name Input"
                      placeholder="Enter your school country"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Name of Head
                    </Text>
                    <Input
                      shape={"round"}
                      type="text"
                      name="Head Name Input"
                      placeholder="Enter the name of your school head"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Head&apos;s phone number
                    </Text>
                    <Input
                      shape={"round"}
                      type="number"
                      name="Head Phone Input"
                      placeholder="Enter head's phone number"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Head&apos;s email
                    </Text>
                    <Input
                      shape={"round"}
                      type="email"
                      name="Head Email Input"
                      placeholder="Enter head's email"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Name of Admin
                    </Text>
                    <Input
                      shape={"round"}
                      type="text"
                      name="Admin Name Input"
                      placeholder="Enter admin's name"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Admin&apos;s phone number
                    </Text>
                    <Input
                      shape={"round"}
                      type="number"
                      name="Admin Phone Input"
                      placeholder="Enter admin's phone number"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Admin&apos;s email
                    </Text>
                    <Input
                      shape={"round"}
                      type="email"
                      name="Admin Email Input"
                      placeholder="Enter admin's email"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Number of Student
                    </Text>
                    <Input
                      shape={"round"}
                      type="number"
                      name="Student Number Input"
                      placeholder="Enter the number of students"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      Number of teachers
                    </Text>
                    <Input
                      shape={"round"}
                      type="number"
                      name="teacher Number Input"
                      placeholder="Enter the number of teachers"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      School Phone Number
                    </Text>
                    <Input
                      shape={"round"}
                      type="number"
                      name="School Phone Input"
                      placeholder="Enter the school's phone number"
                      className="self-stretch py-3 rounded-[5px] px-6 sm:px-5"
                    />
                  </div>
                  <div className="mt-[30px] flex flex-col items-start gap-2.5 self-stretch ">
                    <Text
                      size="textxl"
                      as={"p"}
                      className="text-[20px] font-normal text-black-900_01"
                    >
                      School Address
                    </Text>
                    <TextArea
                      shape="round"
                      name="School Address Input"
                      placeholder="Enter School Address"
                      className="self-stretch rounded-[5px] px-6 text-black-900_4c sm:pt-5 sm:px-5"
                    />
                  </div>
                  <Button
                    size="md"
                    className=" ml-1.5 mt-[70px] min-w-[370px] rounded-[30px] px-[34px] md:ml-0 sm:px-5"
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center px-6 sm:px-5">
          <div className="mx-auto flex w-full max-w-[1348px] items-start self-stretch md:flex-col">
            <div className="relative z-[3] mt-[60px] flex w-[4%] flex-col items-center gap-[38px] md:w-full">
              <div className="h-[50px] w-[50px] bg-green-500" />
              <div className="h-[50px] w-[50px] bg-[#efefef]" />
              <div className="h-[50px] w-[50px] bg-black-900_01" />
              <div className="h-[50px] w-[50px] bg-[#efefef]" />
              <div className="h-[50px] w-[50px] bg-[#efefef]" />
              <div className="h-[50px] w-[50px] bg-black-900_01" />
              <div className="h-[50px] w-[50px] bg-[#efefef]" />
            </div>
            <Img
              src={"images/bg.png"}
              alt={"Background Image"}
              className={
                "relative ml-[-4px] h-[1708px] w-[96%] self-center object-contain md:ml-0 md:w-full"
              }
            />
          </div>
          <div className="relative mx-auto mt-[-90px] flex h-[344px] w-full max-w-[1038px] items-start self-stretch bg-gray-700 bg-[url(/public/images/school_children.png)] bg-cover bg-no-repeat px-14 py-[82px] md:h-auto md:p-5">
            <Heading
              size="headinglg"
              as={"h2"}
              className="mb-[46px] w-[96%] text-[30px] font-bold leading-[45px] text-white-a700 md:text-[28px] sm:text-[26px]"
            >
              Empowering students with seamless access to resources,
              personalized learning, and real-time academic insights for a
              brighter future
            </Heading>
          </div>
        </div>
        <Header className=" absolute left-0 right-0 top-0 z-[4] m-auto flex-1 px-[200px] md:px-5" />
        <div className="absolute left-0 right-0 top-[2%] m-auto flex w-full max-w-[1008px] gap-[138px] md:relative md:flex-col md:px-5">
          <WelcomeRow className="h-[238px] w-[52%] md:w-full" />

          <WelcomeRightRow
            welcomeText="Your ultimate school management system"
            className="mt-4 flex h-[224px] w-[48%] rounded-[20px] bg-white-a700  px-[26px] py-5 md:mt-0 md:w-full sm:px-5"
          />
        </div>
        <div className="absolute right-[14%] top-[5%] m-auto h-[60px] w-[60px] rounded-[30px] bg-black-900_01" />
        <div className="absolute left-0 right-0 top-[7%] z-[5] m-auto flex flex-1 flex-col items-center gap-[30px] px-14 md:px-5">
          <div className="container-xs">
            <div className="flex flex-col justify-center items-center bg-white-a700 p-4 ">
              <Heading
                size="headings"
                as={"h2"}
                className=" mb-[11px] text-[20px] font-bold text-black-900_01"
              >
                Who we are
              </Heading>
              <div className="flex w-[919px] h-[90px] items-center justify-center mx-auto">
                <Text
                  as={"p"}
                  className=" font-normal text-[20px] leading-[30px] text-black-900_01"
                >
                  At BrainStake, we empower educational institutions with
                  innovative, all-in-one management solutions, streamlining
                  operations and enhancing communication to foster student
                  success.
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 bg-black-900_01 p-8 sm:p-5">
              <Heading
                size="headings"
                as={"h3"}
                className="text-[20px] font-bold text-white-a700"
              >
                Why choose Brainstake eSchools?
              </Heading>
              <ChipView
                options={chipOptions}
                setOptions={setChipOptions}
                values={selectedChipOptions}
                setValues={setSelectedChipOptions}
                className="mb-4 flex w-[74%] flex-wrap gap-[18px]"
              >
                {(option) => (
                  <React.Fragment key={option.index}>
                    {option.isSelected ? (
                      <div
                        onClick={option.toggle}
                        className="flex h-[40px] min-w-[120px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap border border-solid border-white-a700_99 bg-gray-900_02 pl-[18px] pr-[34px] text-center text-[16px] text-white-a700 sm:pr-5"
                      >
                        <span>{option.label}</span>
                      </div>
                    ) : (
                      <div className="flex h-[40px] min-w-[120px] cursor-pointer flex-row items-center justify-center bg-gray-900_02 pl-[18px] pr-[34px] text-center text-[16px] text-white-a700 sm:pr-5">
                        <span>{option.label}</span>
                      </div>
                    )}
                  </React.Fragment>
                )}
              </ChipView>
            </div>
          </div>
          <div className="ml-[66px] mr-[62px] flex w-full max-w-[910px] flex-col items-start gap-3.5 md:mx-0">
            <Heading
              size="headings"
              as={"h2"}
              className="text-[20px] font-bold text-black-900_01"
            >
              Features of the software
            </Heading>
            <div className=" self-stretch">
              <div className="flex flex-col gap-12">
                <div className="flex items-start gap-[34px] md:flex-col">
                  <Text
                    as={"p"}
                    className="w-[32%] self-center text-[16px] font-normal leading-6 text-black-900_01 md:w-full"
                  >
                    <>
                      Admission without the need for paperwork
                      <br />
                      Enhance efficiency and convenience by implementing a
                      digital, paper-free admission process.
                    </>
                  </Text>
                  <div className="flex-1 md:self-stretch">
                    <Text
                      as={"p"}
                      className="text-[16px] font-normal leading-6 text-black-900_01"
                    >
                      <>
                        Activity Reporting
                        <br />
                        Gain insights and make informed decisions by tracking
                        and analyzing activities.
                      </>
                    </Text>
                  </div>
                  <Text
                    as="p"
                    className="w-[32%] text-[16px] font-normal leading-6 text-black-900_01 md:w-full"
                  >
                    <>
                      Smart Dashboards
                      <br />
                      Achieve smart insights by conveniently accessing intuitive
                      dashboards with comprehensive, real-time data.
                    </>
                  </Text>
                </div>
                <div className="flex items-start gap-[34px] md:flex-col">
                  <Text
                    as={"p"}
                    className="w-[32%] self-start text-[16px] font-normal leading-6 text-black-900_01 md:w-full md:self-auto"
                  >
                    <>
                      Examination management
                      <br />
                      Effectively supervise assessments with efficient
                      procedures and thorough supervision abilities.
                    </>
                  </Text>
                  <Text
                    as={"p"}
                    className="w-[32%] text-[16px] font-normal leading-6 text-black-900_01 md:w-full "
                  >
                    <>
                      Competitive Edge
                      <br />
                      You hold within your grasp, without any delays, all the
                      necessary data for making sound decisions on demand.
                    </>
                  </Text>
                  <Text
                    as={"p"}
                    className="w-[32%] text-[16px] font-normal leading-6 text-black-900_01 md:w-full "
                  >
                    <>
                      Collaboration
                      <br />
                      Maintaining a constant flow of information allows for all
                      stakeholders to stay connected and informed about the
                      institute.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ClientTestimonialsSection />
      </div>
    </>
  );
};

export default LandingPage;
