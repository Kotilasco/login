/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "./Button";
import Heading from "./Heading";
import Img from "./Img";

const Header = ({ ...props }) => {
  return (
    <header {...props} className={`${props.className} flex items-center`}>
      <div className="flex w-[90%] items-center justify-between gap-5 sm:w-full">
        <Img
          src={"images/logo_container.png"}
          alt={"Header Logo"}
          className={"h-[58px] w-[192px] object-contain sm:w-[192px]"}
        />
        <div className="mb-1.5 flex flex-row w-[64%] items-center justify-center gap-4 self-end">
          <Heading
            as="h6"
            className=" text-[18px] font-bold text-black-900_01 sm:text-[15px]"
          >
            Raise an enquiry
          </Heading>
          <div className="flex flex-1  items-center justify-center gap-3">
            <Button
              color="black_900_01"
              variant="outline"
              shape="round"
              className="min-w-[198px] rounded-[18px] !border px-[19px] font-bold"
            >
              {" "}
              Enrol your school
            </Button>

            <Link to={"/home"}>
              <Button
                shape="round"
                className="min-w-[116px] rounded-[18px] px-8 font-bold sm:px-5"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
