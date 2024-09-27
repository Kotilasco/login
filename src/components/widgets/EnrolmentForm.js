import FormInput from "./FormInput";
import "../../css/enrolment.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const EnrolmentForm = ({
  heading_title,
  form_description,
  isPreview,
  formData,
  setFormData,
  setPreviewDisplay,
  schoolLogo,
  setSchoolLogo,
  paymentReceipt,
  setPaymentReceipt,
  schoolLogoName,
  setSchoolLogoName,
  paymentReceiptName,
  setPaymentReceiptName,
  schoolOwnership,
  setSchoolOwnership,
  hasFormSubmittedSuccessfully,
  setHasFormSubmittedSuccessfully,
  showSuccessErrorModal,
  setShowSuccessErrorModal,
  showLoading,
  setShowLoading,
}) => {
  const [logoFileTypeError, setLogoFileTypeError] = useState(false);
  const [receiptFileTypeError, setReceiptFileTypeError] = useState(false);

  const [logoFileSizeError, setLogoFileSizeError] = useState(false);
  const [receiptFileSizeError, setReceiptFileSizeError] = useState(false);

  function checkFileType(file_name, accepted_file_types_array) {
    if (!file_name) {
      return;
    }
    const file_extension = "." + file_name.split(".").pop().toLowerCase();
    return accepted_file_types_array.includes(file_extension);
  }

  function checkFileSize(file_size) {
    return parseInt(file_size) < 5250000;
  }

  function addInputDataToFormData(input, input_name) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [input_name]: input,
    }));
    console.log(formData);
  }

  const handleSchoolLogoChange = (e) => {
    const selectedFile = e.target.files[0];
    setSchoolLogo(selectedFile);
  };

  const handlePaymentReceiptChange = (e) => {
    const selectedFile = e.target.files[0];
    setPaymentReceipt(selectedFile);
  };

  const handleSubmit = () => {
    // setShowLoading(true)
    setShowSuccessErrorModal(true);

    // CODE COMMENTED, TO BE USED ON API INTEGRATION TASK
    // if (!formData) {
    //   return;
    // }
    // const complete_form_data = new FormData()
    // Object.keys(formData)?.forEach((key) => {
    //   if (formData[key]) {
    //     complete_form_data.append(key, formData[key])
    //   }
    // })

    // if (schoolLogo) complete_form_data.append('school_logo_data', schoolLogo)
    // if (paymentReceipt) complete_form_data.append('payment_receipt_data', paymentReceipt)

    // for (const [key, value] of complete_form_data.entries()) {
    //   console.log(`${key}:`, value);
    // }
    // fetch('AWAITING_API_INTEGRATION', {
    //   method: 'POST',
    //   body: complete_form_data,
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setHasFormSubmittedSuccessfully(true)
    //   setFormData({})
    // })
    // .catch(error => setHasFormSubmittedSuccessfully(false))
  };

  return (
    <div className="enrolment_form">
      {isPreview && (
        <button
          className="hide_parent"
          onClick={(e) => {
            e.preventDefault();
            setPreviewDisplay(false);
          }}
        >
          +
        </button>
      )}
      {!isPreview && heading_title && <h1>{heading_title}</h1>}
      {form_description && (
        <p className="form_description">{form_description}</p>
      )}
      <div className="form_inputs">
        {!isPreview ? (
          <>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_name`}
                placeholder="Enter name of school"
                title="Enter the full name of the school"
                name="school_name"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_name");
                }}
              />
            </div> 
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_head_name`}
                placeholder="Enter the name of the school Head/ Principal"
                title="Enter name of school head"
                name="school_head_name"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_head_name");
                }}
              />
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_head_phone`}
                placeholder="Enter the school Head’s/ Principal’s phone number"
                title="Enter school head phone"
                name="school_head_phone"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_head_phone");
                }}
              />
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_head_email`}
                placeholder="Enter the school Head’s/ Principal’s email"
                title="Enter email of school head"
                name="school_head_email"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_head_email");
                }}
              />
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_city_or_town`}
                placeholder="Enter the name of the school city/town"
                title="Enter the school city/town"
                name="school_city_or_town"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_city_or_town");
                }}
              />
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_admin_name`}
                placeholder="Enter name of school admin"
                title="Enter the name of the school Admin Officer"
                name="school_admin_name"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_admin_name");
                }}
              />
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_admin_phone`}
                placeholder="Enter the phone number of the school Admin Officer"
                title="Enter school admin phone"
                name="school_admin_phone"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_admin_phone");
                }}
              />
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_admin_email`}
                placeholder="Enter the school Admin Officer’s email"
                title="Enter admin email"
                name="school_admin_email"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_admin_email");
                }}
              />
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_phone_number`}
                placeholder="Enter school phone number"
                title="Enter the official phone number of the school"
                name="school_phone_number"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_phone_number");
                }}
              />
            </div>
            <div className="form_input_container">
              <label htmlFor="school_address">
                Enter the address of the school
              </label>
              <textarea
                required
                id={`school_address`}
                placeholder="Enter the address of the school"
                title="Enter school address"
                name="school_address"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_address");
                }}
              ></textarea>
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_email`}
                placeholder="Enter school email address"
                title="Enter the official email address of the school"
                name="school_email"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_email");
                }}
              />
              <button
                className="tooltip_btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.target.parentElement
                    .querySelector(".tooltip")
                    .classList.toggle("displayed_flex");
                  e.target.classList.toggle("tooltip_btn_clicked");
                }}
              >
                ?
              </button>
              <div className="tooltip">
                Please enter the school's official email address, as provided by
                the administration. This should be a valid, active email used
                for official communication.
              </div>
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_district`}
                placeholder="Enter the name of the school district"
                title="Enter the school district"
                name="school_district"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_district");
                }}
              />
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_province`}
                placeholder="Enter the name of the school province"
                title="Enter the school province"
                name="school_province"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_province");
                }}
              />
            </div>
            <div className="form_input_container">
              <label htmlFor="school_country">
                Select the name of the school country
              </label>
              <select
                id={`school_country`}
                name="school_country"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_country");
                }}
              >
                <option value="">Select the school country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">
                  Congo, The Democratic Republic of The
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard Island and Mcdonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">
                  Korea, Democratic People's Republic of
                </option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">
                  Lao People's Democratic Republic
                </option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">
                  Libyan Arab Jamahiriya
                </option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova, Republic of">
                  Moldova, Republic of
                </option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">
                  Palestinian Territory, Occupied
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">
                  Saint Pierre and Miquelon
                </option>
                <option value="Saint Vincent and The Grenadines">
                  Saint Vincent and The Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">
                  South Georgia and The South Sandwich Islands
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">
                  Virgin Islands, British
                </option>
                <option value="Virgin Islands, U.S.">
                  Virgin Islands, U.S.
                </option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                required
                id={`school_responsible_authority`}
                placeholder="Enter responsible authority"
                title="Enter the name of the school Responsible Authority"
                name="school_responsible_authority"
                onChange={(e) => {
                  addInputDataToFormData(
                    e.target.value,
                    "school_responsible_authority"
                  );
                }}
              />
            </div>
            <div className="form_input_container school_ownership">
              <h3>Select the school Ownership</h3>
              <FormInput
                type="radio"
                required
                name="school_ownership"
                value="Church"
                checked={schoolOwnership === "Church"}
                title="Church"
                onChange={(e) => {
                  setSchoolOwnership(e.target.value);
                  addInputDataToFormData(e.target.value, "school_ownership");
                }}
              />
              <FormInput
                type="radio"
                required
                name="school_ownership"
                value="Council"
                checked={schoolOwnership === "Council"}
                title="Council"
                onChange={(e) => {
                  setSchoolOwnership(e.target.value);
                  addInputDataToFormData(e.target.value, "school_ownership");
                }}
              />
              <FormInput
                type="radio"
                required
                name="school_ownership"
                value="Government"
                checked={schoolOwnership === "Government"}
                title="Government"
                onChange={(e) => {
                  setSchoolOwnership(e.target.value);
                  addInputDataToFormData(e.target.value, "school_ownership");
                }}
              />
              <FormInput
                type="radio"
                required
                name="school_ownership"
                value="Private"
                checked={schoolOwnership === "Private"}
                title="Private"
                onChange={(e) => {
                  setSchoolOwnership(e.target.value);
                  addInputDataToFormData(e.target.value, "school_ownership");
                }}
              />
            </div>
            <div className="form_input_container">
              <FormInput
                type="file"
                required
                id={`school_logo`}
                name="school_logo"
                title="Upload the school logo (only jpg, jpeg, png, svg and pdf file formats only. File size should be 5MB or less)"
                accept=".jpg, .jpeg, .png, .svg, .pdf"
                onChange={(e) => {
                  setLogoFileTypeError(false);
                  setLogoFileSizeError(false);
                  setSchoolLogoName("");
                  if (
                    !checkFileType(e.target?.files[0]?.name, [
                      ".jpg",
                      ".jpeg",
                      ".png",
                      ".svg",
                      ".pdf",
                    ])
                  ) {
                    setLogoFileTypeError(true);
                    setTimeout(() => {
                      setLogoFileTypeError(false);
                    }, 5000);
                  } else if (!checkFileSize(e.target?.files[0]?.size)) {
                    setLogoFileSizeError(true);
                    setTimeout(() => {
                      setLogoFileSizeError(false);
                    }, 5000);
                  } else {
                    setSchoolLogoName(e.target.value);
                    handleSchoolLogoChange(e);
                  }
                }}
                value={schoolLogoName}
              />
              <p
                className={`file_type_and_size_error ${
                  logoFileTypeError ? "displayed_flex" : ""
                }`}
              >
                Invalid file type. Only jpg, jpeg, png, svg and pdf accepted
              </p>
              <p
                className={`file_type_and_size_error ${
                  logoFileSizeError ? "displayed_flex" : ""
                }`}
              >
                File size should be 5MB or less
              </p>
              {schoolLogoName.length > 0 && (
                <button
                  className="clear_file_input"
                  onClick={(e) => {
                    e.preventDefault();
                    setSchoolLogoName("");
                    setSchoolLogo(null);
                  }}
                >
                  +
                </button>
              )}
            </div>
            <div className="form_input_container payment_receipt">
              <FormInput
                type="file"
                id={`payment_receipt`}
                name="payment_receipt"
                title="Upload the payment receipt (if the school has paid)"
                accept=".jpg, .jpeg, .png, .pdf"
                onChange={(e) => {
                  setReceiptFileTypeError(false);
                  setReceiptFileSizeError(false);
                  setPaymentReceiptName("");
                  if (
                    !checkFileType(e.target?.files[0]?.name, [
                      ".jpg",
                      ".jpeg",
                      ".png",
                      ".svg",
                      ".pdf",
                    ])
                  ) {
                    setReceiptFileTypeError(true);
                    setTimeout(() => {
                      setReceiptFileTypeError(false);
                    }, 5000);
                  } else if (!checkFileSize(e.target.files[0].size)) {
                    setReceiptFileSizeError(true);
                    setTimeout(() => {
                      setReceiptFileSizeError(false);
                    }, 5000);
                  } else {
                    setPaymentReceiptName(e.target?.value);
                    handlePaymentReceiptChange(e);
                  }
                }}
                value={paymentReceiptName}
              />
              <p
                className={`file_type_and_size_error ${
                  receiptFileTypeError ? "displayed_flex" : ""
                }`}
              >
                Invalid file type. Only jpg, jpeg, png and pdf accepted
              </p>
              <p
                className={`file_type_and_size_error ${
                  receiptFileSizeError ? "displayed_flex" : ""
                }`}
              >
                File size should be 5MB or less
              </p>
              <button
                className="tooltip_btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.target.parentElement
                    .querySelector(".tooltip")
                    .classList.toggle("displayed_flex");
                  e.target.classList.toggle("tooltip_btn_clicked");
                }}
              >
                ?
              </button>
              <div className="tooltip">
                If the school has paid, please upload the payment receipt. If
                the school hasn’t paid, leave this blank
              </div>
              {paymentReceiptName.length > 0 && (
                <button
                  className="clear_file_input"
                  onClick={(e) => {
                    e.preventDefault();
                    setPaymentReceiptName("");
                    setPaymentReceipt(null);
                  }}
                >
                  +
                </button>
              )}
            </div>
            <div className="form_input_container">
              <FormInput
                type="text"
                id={`payment_reference_number`}
                placeholder="Enter payment reference number"
                title="Enter the payment reference number (if the school has paid)"
                name="payment_reference_number"
                onChange={(e) => {
                  addInputDataToFormData(
                    e.target.value,
                    "payment_reference_number"
                  );
                }}
              />
              <button
                className="tooltip_btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.target.parentElement
                    .querySelector(".tooltip")
                    .classList.toggle("displayed_flex");
                  e.target.classList.toggle("tooltip_btn_clicked");
                }}
              >
                ?
              </button>
              <div className="tooltip">
                If the school has paid, please enter the payment reference
                number. If the school hasn’t paid, leave this blank.
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_name`}
                placeholder="Enter name of school"
                title="Enter the full name of the school"
                name="school_name"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_name");
                }}
                value={formData?.school_name}
                disabled
              />
            </div> 
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_head_name`}
                placeholder="Enter the name of the school Head/ Principal"
                title="Enter name of school head"
                name="school_head_name"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_head_name");
                }}
                value={formData?.school_head_name}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_head_phone`}
                placeholder="Enter the school Head’s/ Principal’s phone number"
                title="Enter school head phone"
                name="school_head_phone"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_head_phone");
                }}
                value={formData?.school_head_phone}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_head_email`}
                placeholder="Enter the school Head’s/ Principal’s email"
                title="Enter email of school head"
                name="school_head_email"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_head_email");
                }}
                value={formData?.school_head_email}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_city_or_town`}
                placeholder="Enter the name of the school city/town"
                title="Enter the school city/town"
                name="school_city_or_town"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_city_or_town");
                }}
                value={formData?.school_city_or_town}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_admin_name`}
                placeholder="Enter name of school admin"
                title="Enter the name of the school Admin Officer"
                name="school_admin_name"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_admin_name");
                }}
                value={formData?.school_admin_name}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_admin_phone`}
                placeholder="Enter the phone number of the school Admin Officer"
                title="Enter school admin phone"
                name="school_admin_phone"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_admin_phone");
                }}
                value={formData?.school_admin_phone}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_admin_email`}
                placeholder="Enter the school Admin Officer’s email"
                title="Enter admin email"
                name="school_admin_email"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_admin_email");
                }}
                value={formData?.school_admin_email}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_phone_number`}
                placeholder="Enter school phone number"
                title="Enter the official phone number of the school"
                name="school_phone_number"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_phone_number");
                }}
                value={formData?.school_phone_number}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <label htmlFor="school_address">
                Enter the address of the school
              </label>
              <textarea
                required
                id={`preview__school_address`}
                placeholder="Enter the address of the school"
                title="Enter school address"
                name="school_address"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_address");
                }}
                value={formData?.school_address}
                disabled
              ></textarea>
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_email`}
                placeholder="Enter school email address"
                title="Enter the official email address of the school"
                name="school_email"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_email");
                }}
                value={formData?.school_email}
                disabled
              />
              <button
                className="tooltip_btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.target.parentElement
                    .querySelector(".tooltip")
                    .classList.toggle("displayed_flex");
                  e.target.classList.toggle("tooltip_btn_clicked");
                }}
              >
                ?
              </button>
              <div className="tooltip">
                Please enter the school's official email address, as provided by
                the administration. This should be a valid, active email used
                for official communication.
              </div>
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_district`}
                placeholder="Enter the name of the school district"
                title="Enter the school district"
                name="school_district"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_district");
                }}
                value={formData?.school_district}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_province`}
                placeholder="Enter the name of the school province"
                title="Enter the school province"
                name="school_province"
                onChange={(e) => {
                  addInputDataToFormData(e.target.value, "school_province");
                }}
                value={formData?.school_province}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_country`}
                title="Select the school country"
                name="school_country"
                value={formData?.school_country}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_responsible_authority`}
                placeholder="Enter responsible authority"
                title="Enter the name of the school Responsible Authority"
                name="school_responsible_authority"
                onChange={(e) => {
                  addInputDataToFormData(
                    e.target.value,
                    "school_responsible_authority"
                  );
                }}
                value={formData?.school_responsible_authority}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                required
                id={`preview__school_ownership`}
                title="Select the school Ownership"
                name="school_ownership"
                value={formData?.school_ownership}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input file_input">
              <FormInput
                type="text"
                required
                id={`preview__school_logo`}
                name="school_logo"
                title="Upload the school logo (only jpg, jpeg, png, svg and pdf file formats only. File size should be 5MB or less)"
                accept=".jpg, .jpeg, .png, .svg, .pdf"
                value={schoolLogoName}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input payment_receipt file_input">
              <FormInput
                type="text"
                id={`preview__payment_receipt`}
                name="payment_receipt"
                title="Upload the payment receipt (if the school has paid)"
                accept=".jpg, .jpeg, .png, .pdf"
                value={paymentReceiptName}
                disabled
              />
            </div>
            <div className="form_input_container disabled_input">
              <FormInput
                type="text"
                id={`preview__payment_reference_number`}
                placeholder=""
                title="Enter the payment reference number (if the school has paid)"
                name="payment_reference_number"
                onChange={(e) => {
                  addInputDataToFormData(
                    e.target.value,
                    "payment_reference_number"
                  );
                }}
                value={formData?.payment_reference_number}
                disabled
              />
              <button
                className="tooltip_btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.target.parentElement
                    .querySelector(".tooltip")
                    .classList.toggle("displayed_flex");
                  e.target.classList.toggle("tooltip_btn_clicked");
                }}
              >
                ?
              </button>
              <div className="tooltip">
                If the school has paid, please enter the payment reference
                number. If the school hasn’t paid, leave this blank.
              </div>
            </div>
          </>
        )}
        {!isPreview && (
          <>
            <div className="terms_and_privacy_notice">
              By submitting this form, you agree to Brainstake's&nbsp;
              <Link to="/terms" target="_blank" rel="noreferrer">
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link to="/privacy" target="_blank" rel="noreferrer">
                Privacy Policy.
              </Link>{" "}
              Your data is encrypted and securely stored, following
              industry-standard practices to protect your personal information.
            </div>
            <button
              className="submit"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setPreviewDisplay(true);
              }}
            >
              Submit
            </button>
          </>
        )}
        {isPreview && (
          <>
            <p className="check_if_correct_data_desc">
              Check if the information you provided is accurate. If not,
              go&nbsp;
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPreviewDisplay(false);
                }}
              >
                back and edit
              </button>
              &nbsp;before completing registration
            </p>
            <button
              className="complete_registration"
              type="submit"
              onClick={() => {
                handleSubmit();
                // setShowSuccessErrorModal(true)
              }}
            >
              Complete Registration
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EnrolmentForm;
