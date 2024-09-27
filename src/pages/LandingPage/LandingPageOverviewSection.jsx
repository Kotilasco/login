import Heading from "../../components/Heading";
import Img from "../../components/Img";
import Text from "../../components/Text";

const LandingPageOverviewSection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-[50px] self-stretch px-14 md:px-5">
        <div className="flex w-[50%] flex-col items-center gap-3.5 md:w-full">
          <Heading
            size="headings"
            as={"h3"}
            className="text-[20px] font-bold text-black-900_01"
          >
            Brainstake eSchools Modules
          </Heading>

          <Text
            as="p"
            className="self-stretch text-center text-[16px] font-normal leading-6 text-black-900_01"
          >
            With a keen focus on every aspect of your institutions day-to-day
            running, these modules intricately cooperate to present accurate and
            timely informative reports.
          </Text>
        </div>
        <div className="self-stretch">
          <div className="flex flex-col gap-16 sm:gap-8">
            <div className="flex justify-between gap-5 md:flex-col">
              <div className="relative h-[268px] w-[44%] rounded-[10px] bg-blue_gray-50 px-[30px] py-[22px] md:w-full sm:p-5">
                <Img
                  src={"images/student_info.png"}
                  alt={"Student Info"}
                  className={
                    "absolute left-0 right-0 top-[25px] m-auto h-[200px] w-[200px] object-cover"
                  }
                />
                <Text
                  as={"p"}
                  className="absolute left-0 right-0 top-[23px] m-auto w-full text-[16px] font-normal leading-[30px] text-black-900_01"
                >
                  <span className="text-[20px] font-bold text-green-500">
                    <>
                      Module
                      <br />
                    </>
                  </span>
                  <span className="font-bold text-gray-600">
                    <>
                      Student Information System
                      <br />
                    </>
                  </span>
                  <span className="text-black-900_01">
                    The student information system efficiently records all
                    student information and presents it in accessible formats
                    such as easily understandable outputs, printable reports,
                    and statistics.
                  </span>
                </Text>
              </div>
              <div className="relative h-[268px] w-[44%] rounded-[10px] bg-blue-100 px-7 py-6 md:w-full sm:p-5">
                <Img
                  src={"images/institution_admin.png"}
                  alt={"Admin"}
                  className={
                    "absolute bottom-0 left-0 right-0 top-0 m-auto h-[200px] w-[200px] object-cover"
                  }
                />
                <Text
                  as={"p"}
                  className="absolute left-0 right-0 top-[25px] m-auto w-[98%] text-[16px] font-normal leading-[29px] text-black-900_01"
                >
                  <span className="text-[20px] font-bold text-green-500">
                    <>
                      Module
                      <br />
                    </>
                  </span>
                  <span className="font-bold text-gray-600">
                    <>
                      Insitution Administration
                      <br />
                    </>
                  </span>
                  <span className="text-black-900_01">
                    Tools or decision making and rapid response are integrated
                    into the institutions very hard.
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex justify-between gap-5 md:flex-col">
              <div className="relative h-[268px] w-[44%] rounded-[10px] bg-blue-100 px-8 py-6 md:w-full sm:p-5">
                <Img
                  src={"images/student_performance.png"}
                  alt={"Student Performance"}
                  className={
                    "absolute left-[23%] bottom-0 right-0 top-0 my-auto h-[200px] w-[200px] object-cover"
                  }
                />
                <Text
                  as={"p"}
                  className="absolute left-[8%] top-[25px] m-auto w-[90%] text-[16px] font-bold leading-[29px] text-black-900_01"
                >
                  <span className="text-[20px] text-green-500">
                    <>
                      Module
                      <br />
                    </>
                  </span>
                  <span className="text-gray-600">
                    <>
                      Student Performance Management
                      <br />
                      Stay on top of your student academic progress at all times
                      with real-time performance reporting and tracking
                    </>
                  </span>
                </Text>
              </div>
              <div className="flex h-[268px] w-[44%] items-start justify-center bg-[url(/public/images/bgcommunication.png)] bg-cover bg-no-repeat p-[22px] md:w-full sm:p-5">
                <div className="relative mb-3.5 h-[208px] w-full">
                  <Img
                    src={"images/communication.png"}
                    alt={"Communication"}
                    className={
                      "absolute bottom-0 left-0 right-0 m-auto h-[200px] w-[200px] object-cover"
                    }
                  />
                  <Text
                    as={"p"}
                    className="absolute left-0 right-0 top-0 m-auto w-[98%] text-[16px] font-bold leading-[30px] text-black-900_01"
                  >
                    <span className="text-[20px] text-green-500">
                      <>
                        Module
                        <br />
                      </>
                    </span>
                    <span className=" text-gray-600">
                      <>
                        Student Information System
                        <br />
                        At all times, you maintain constant communication with
                        all stakeholders and retain real-time control.
                      </>
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageOverviewSection;
