import { Suspense } from "react";
import Heading from "../../components/Heading";
import ClientSection from "../../components/ClientSection";

const clientList = [
  {
    clientText: (
      <>
        Some of our <br />
        clients
      </>
    ),
  },
  {
    clientText: (
      <>
        Some of our <br />
        clientsvv
      </>
    ),
  },
  {
    clientText: (
      <>
        Some of our <br />
        clients
      </>
    ),
  },
];
const ClientTestimonialsSection = () => {
  return (
    <>
      <div className="absolute left-0 right-0 top-[19%] m-auto flex flex-1 justify-center px-14 md:px-5">
        <div className="container-xs flex flex-col items-center gap-9 bg-white-a700 p-[38px] md:px-5 sm:p-5">
          <Heading
            size="headings"
            as={"h2"}
            className="self-stretch text-center text-[20px] font-bold leading-[30px] text-black-900_01"
          >
            Our valued customers experiencing effective, efficient and
            effortless school management
          </Heading>
          <div className="mb-6 ml-20 mr-[88px] flex items-center justify-center w-[94%] gap-8 md:mx-0 md:w-full md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {clientList.map((d, index) => (
                <ClientSection
                  {...d}
                  key={"featuresList" + index}
                  className="my-1.5 w-[14%] md:my-0 md:w-full"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimonialsSection;
