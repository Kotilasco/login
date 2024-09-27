import { useState } from "react";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import EnrolmentForm from "../components/widgets/EnrolmentForm";
import SuccessErrorModal from "../components/widgets/SuccessErrorModal";
import Loading from "../components/widgets/Loading";

const EnrolYourSchool = () => {
  const [formData, setFormData] = useState({});
  const [previewDisplay, setPreviewDisplay] = useState(false);
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [paymentReceipt, setPaymentReceipt] = useState(null);

  const [schoolLogoName, setSchoolLogoName] = useState("");
  const [paymentReceiptName, setPaymentReceiptName] = useState("");

  const [schoolOwnership, setSchoolOwnership] = useState("");

  const [isFormLoading, setIsFormLoading] = useState(null);

  const [showLoading, setShowLoading] = useState(false);

  const [showSuccessErrorModal, setShowSuccessErrorModal] = useState(false);

  const [hasFormSubmittedSuccessfully, setHasFormSubmittedSuccessfully] =
    useState(false);

  const styles = {
    container_styles: {
      maxWidth: "1200px",
      marginInline: "auto",
      backgroundImage: "url('/images/bg.png')",
      backgroundSize: "100% auto",
      backgroundPosition: "center 0",
      backgroundRepeat: "no-repeat repeat",
    },
  };
  const { container_styles } = styles;
  return (
    <section
      className="bg-white-50 min-h-screen dark:bg-gray-900 font-appFont enrol_your_school_container"
      style={container_styles}
    >
      <Nav />
      <form action="#">
        <EnrolmentForm
          heading_title="School enrolment"
          form_description="Fill in the form to register a school"
          formData={formData}
          setFormData={setFormData}
          isPreview={false}
          setPreviewDisplay={setPreviewDisplay}
          schoolLogo={schoolLogo}
          setSchoolLogo={setSchoolLogo}
          paymentReceipt={paymentReceipt}
          setPaymentReceipt={setPaymentReceipt}
          schoolLogoName={schoolLogoName}
          setSchoolLogoName={setSchoolLogoName}
          paymentReceiptName={paymentReceiptName}
          setPaymentReceiptName={setPaymentReceiptName}
          schoolOwnership={schoolOwnership}
          setSchoolOwnership={setSchoolOwnership}
        />
      </form>
      <form action="#">
        <div className={`is_preview${previewDisplay ? " displayed_flex" : ""}`}>
          <EnrolmentForm
            heading_title="School enrolment"
            form_description="Preview your information before completing registration"
            formData={formData}
            isPreview={true}
            setPreviewDisplay={setPreviewDisplay}
            schoolLogo={schoolLogo}
            setSchoolLogo={setSchoolLogo}
            paymentReceipt={paymentReceipt}
            setPaymentReceipt={setPaymentReceipt}
            schoolLogoName={schoolLogoName}
            setSchoolLogoName={setSchoolLogoName}
            paymentReceiptName={paymentReceiptName}
            setPaymentReceiptName={setPaymentReceiptName}
            schoolOwnership={schoolOwnership}
            setSchoolOwnership={setSchoolOwnership}
            hasFormSubmittedSuccessfully={hasFormSubmittedSuccessfully}
            setHasFormSubmittedSuccessfully={setHasFormSubmittedSuccessfully}
            showSuccessErrorModal={showSuccessErrorModal}
            setShowSuccessErrorModal={setShowSuccessErrorModal}
            showLoading={showLoading}
            setShowLoading={setShowLoading}
          />
        </div>
      </form>
      <div
        className={`form_submission_status${
          showSuccessErrorModal ? " displayed_flex" : ""
        }`}
      >
        <SuccessErrorModal
          message={
            !hasFormSubmittedSuccessfully
              ? "Your enrolment request has been submitted. You will receive an email confirmation soon!"
              : "There was an issue submitting your form. Please try again."
          }
          hasFormSubmittedSuccessfully={!hasFormSubmittedSuccessfully}
          setShowSuccessErrorModal={setShowSuccessErrorModal}
        />
      </div>
      <div className={`form_loading${showLoading ? " displayed_flex" : ""}`}>
        <Loading message="The form is being submitted. Do not close this page" />
      </div>
      <Footer />
    </section>
  );
};

export default EnrolYourSchool;
