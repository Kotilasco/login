import "../../css/successerrormodal.css";

const SuccessErrorModal = ({
  isSuccess,
  message,
  setShowSuccessErrorModal,
  hasFormSubmittedSuccessfully,
}) => {
  const success_tick = process.env.PUBLIC_URL + "/images/success_tick.png"; // files in the public folder cannot be imported
  const failure_exclamation =
    process.env.PUBLIC_URL + "/images/failure_exclamation.png"; // files in the public folder cannot be imported

  const img_src = hasFormSubmittedSuccessfully
    ? success_tick
    : failure_exclamation;

  const alt_des = hasFormSubmittedSuccessfully
    ? "Success icon"
    : "Failure icon";
  return (
    <div className="modal_container">
      <div className="modal_container__modal">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.target.parentElement.parentElement.parentElement.classList.toggle(
              "displayed_flex"
            );
            setShowSuccessErrorModal(false);
          }}
        >
          +
        </button>
        <h3>{message}</h3>
        <img src={img_src} alt={alt_des} />
      </div>
    </div>
  );
};

export default SuccessErrorModal;
