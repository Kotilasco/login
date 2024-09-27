/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Heading from "./Heading";

const ClientSection = ({
  clientText = (
    <>
      Some of our <br />
    </>
  ),
  props,
}) => {
  return (
    <div
      {...props}
      className={`${props?.className} flex items-center gap-[22px]`}
    >
      <Heading
        size="textlg"
        as={"p"}
        className="w-full text-[19px] font-medium leading-7 text-black-900_01"
      >
        {clientText}
      </Heading>
      <div className="h-[72px] w-px bg-black-900_01" />
    </div>
  );
};

export default ClientSection;
