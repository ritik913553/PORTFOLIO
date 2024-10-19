import react from "react";
import { certificationsData } from "../data/certificationsData.js";
import { useNavigate } from "react-router-dom";
function certificate() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full p-5 ">
      <h1 className="text-center text-white text-xl lg:text-3xl">
        <span className="border-b-2 border-dashed pb-2 inline-block">
          Certifications & Achievements
        </span>
      </h1>
      {certificationsData.map((certificate, index) => {
        return (
          <div className="flex flex-col lg:flex-row lg:gap-5 bg-[#390F7C] mt-10 text-white py-10 px-5">
            <div className="lg:w-[40%] lg:flex lg:flex-col lg:justify-center">
              <h1 className="text-[5.6vw] lg:text-3xl text-start font-bold mb-5">
                {certificate.title}
              </h1>
              <p className="text-md leading-5 mb-2 lg:leading-5">
                {certificate.description}
              </p>
              <p className="mt-2 ">
                Issued by:{" "}
                <span className="font-semibold">{certificate.issuedBy}</span>
              </p>
              <p className="mt-1">
                Issue Date:{" "}
                <span className="font-semibold">{certificate.issueDate}</span>
              </p>
            </div>
            {/* Certificate Image */}
            <div className="mt-10 w-full lg:w-2/3 max-w-[500px] lg:max-w-full lg:mt-0 ">
              <img
                src={certificate.photo}
                alt="Certificate"
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        );
      })}
      <button onClick={()=>navigate(-1)} className="mt-10 text-grey-800 px-5 py-1 bg-[#00EEFF] rounded-full">Back to Home</button>
    </div>
  );
}
export default certificate;
