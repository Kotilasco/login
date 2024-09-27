import Heading from "../../components/Heading";
import Text from "../../components/Text";

const IntroductionSection = () => {
  return (
    <div className="flex justify-center px-14 md:px-5">
      <div className="flex w-[92%] items-start justify-center gap-7 bg-black-900_0c p-[22px] md:w-full md:flex-col sm:p-5">
        <div className="mt-2 flex w-[36%] flex-col items-start gap-[22px] md:w-full">
          <Text
            size="textxl"
            as={"p"}
            className="w-full text-[20px] font-medium leading-[30px] text-black-900_01"
          >
            Unlock the power of effective, efficient and effortless Education
            Institution Management.
          </Text>
          <Heading
            size="heading2xl"
            as={"h1"}
            className="text-[50px] font-bold text-white-a700 md:text-[46px] sm:text-[40px]"
          >
            SOFTWARE
          </Heading>
        </div>
        <div className="mb-3.5 flex w-[54%] flex-col items-end gap-1 md:w-full">
          <Heading
            size="heading2xl"
            as={"h2"}
            className="text-[50px] font-bold text-white-a700 md:text-[46px] sm:text-[40px]"
          >
            UNLOCK
          </Heading>
          <Text
            size="textxl"
            as={"p"}
            className="mr-1.5 w-full text-right text-[20px] font-medium leading-[30px] text-black-900_01 md:mr-0"
          >
            Comprehensive, secure, and user-friendly software solution that
            helps educational institutions of all sizes streamline their
            operations, improve efficiency, make informed decisions, and enhance
            effectiveness in achieving their goals.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
