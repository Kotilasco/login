import Button from "../Button";
import CheckBox from "../CheckBox";
import Heading from "../Heading";
import Input from "../Input";
import Text from "../Text";

const LoginSection = () => {
  return (
    <>
      <div className="flex flex-col gap-[72px] px-2 md:gap-[54px] sm:gap-9">
        <div className="mx-[22px] flex flex-col gap-8 md:mx-0">
          <Heading
            size="headingxl"
            as={"h1"}
            className="text-center text-[34px] font-bold leading-[51px] text-black-900_01 md:text-[32px] sm:text-[30px]"
          >
            Brainstake Eschools Login
          </Heading>
          <div className="mx-[126px] md:mx-0  shadow-lg -py-2 border-y border-black">
            <div className="flex flex-col items-start">
              <div className="h-[3.4px] w-[100%] bg-black-900_33" />
              <Text
                size="textmd"
                as={"p"}
                className="ml-[42px] mt-[22px] text-[18px] font-normal text-black-900 md:ml-0"
              >
                Please sign in to access your account
              </Text>
              <div className="ml-[42px] mt-6 flex w-[92%] flex-col items-start md:ml-0 md:w-full">
                <Text
                  size="textmd"
                  as={"p"}
                  className="text-[18px] font-normal text-black-900"
                >
                  Username
                </Text>
                <Input
                  color="gray_200_01"
                  size="xs"
                  type="text"
                  name="Username Input"
                  placeholder={`Username`}
                  className="w-[82%] py-3 rounded-[14px] px-7"
                />
              </div>

              <div className="ml-[42px] mt-[22px] flex w-[92%] flex-col items-start md:ml-0 md:w-full">
                <Text
                  size="textmd"
                  as={"p"}
                  className="text-[18px] font-normal text-black-900"
                >
                  Password
                </Text>
                <Input
                  color="gray_200_01"
                  size="xs"
                  type="password"
                  name="Password Input"
                  placeholder={`Password`}
                  className="relative mt-[-2px] w-[82%] rounded-[14px] py-3 px-7 sm:px-5"
                />
              </div>

              <div className="ml-[42px] flex w-[90%] justify-between gap-5 md:ml-0 md:w-full">
                <CheckBox
                  name="Remember Checkbox"
                  label="Keep me signed in"
                  id="RememberCheckbox"
                  className="gap-1 text-left text-[15px] font-bold leading-[22px] text-black-900"
                />
                <a href="#" className="mr-12 w-[40%] leading-[22px]">
                  <Text
                    size="textxs"
                    as={"p"}
                    className="text-[15px] font-normal text-black-900 underline"
                  >
                    Forgot password?
                  </Text>
                </a>
              </div>

              <div className="w-full flex items-center justify-start">
                <Button
                  color="green_500_01"
                  size="sm"
                  className="ml-[62px] mt-[22px]  min-w-[380px] rounded-[24px] px-[34px] font-bold md:ml-0 sm:px-5"
                >
                  Sign in
                </Button>
              </div>

              <Text
                size="textxs"
                as={"p"}
                className="ml-[42px] mt-[26px] mb-3 w-[78%] text-[15px] font-normal leading-[22px] text-black-900_01 md:ml-0 md:w-full"
              >
                <span>By signing in, I agree to Brainstake&nbsp;</span>
                <a href="#" className="inline underline">
                  Terms of service
                </a>
                <span>&nbsp;and&nbsp;</span>
                <a href="#" className="inline underline">
                  Privacy Policy
                </a>
              </Text>

              <div className="h-[3.4px] w-[100%] bg-black-900_33" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSection;
