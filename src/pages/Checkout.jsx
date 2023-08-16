//for formik & yup
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePageTitle } from "../utils/updatePageTitle";

import PropTypes from "prop-types";
import checkoutstyles from "../styles/CheckoutFormFIeld.module.css"; //path change
import styles from "../styles/CheckoutPage.module.css";

import GoBackBtn from "../components/shared/GoBackBtn";
import Summary from "../components/Summary";
function Checkout({ cartItems }) {
  usePageTitle("Audiophine - Checkout");

  return (
    <>
      <GoBackBtn />
      <div className={styles.summaryContainer}>
        <CheckoutFormField />
        <Summary cartItems={cartItems} />
      </div>
    </>
  );
}

Checkout.propTypes = {
  cartItems: PropTypes.array,
};

export default Checkout;

function CheckoutFormField() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ errors, touched, isValid }) => (
        <div className={checkoutstyles.container}>
          <Form>
            <>
              <h2>CHECKOUT</h2>
              <div>
                <h5>BILLING DETAILS</h5>
                <div className={checkoutstyles.userDetails}>
                  <div className={checkoutstyles.inputField}>
                    <label htmlFor="name">Name</label>
                    <Field
                      type="text"
                      placeholder="Sample Tayo"
                      name="name"
                      id="name"
                      className={`${checkoutstyles.formField} ${
                        touched.name && errors.name
                          ? checkoutstyles.invalid
                          : isValid
                          ? checkoutstyles.valid
                          : ""
                      }`}
                    />
                    {/* <ErrorMessage name="name" /> */}
                    <ErrorMessage name="name">
                      {(errMsg) => (
                        <div className={checkoutstyles.error}>{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className={checkoutstyles.inputField}>
                    <label htmlFor="email">Email Address</label>
                    <Field
                      type="text"
                      placeholder="bolaji_makinde@ymail.com"
                      name="email"
                      id="email"
                      className={`${checkoutstyles.formField} ${
                        touched.email && errors.email
                          ? checkoutstyles.invalid
                          : isValid
                          ? checkoutstyles.valid
                          : ""
                      }`}
                    />
                    {/* <ErrorMessage name="email" /> */}
                    <ErrorMessage name="email">
                      {(errMsg) => (
                        <div className={checkoutstyles.error}>{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className={checkoutstyles.inputField}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field
                      type="text"
                      placeholder="e.g. +234 90 6913 7526"
                      name="phoneNumber"
                      id="phoneNumber"
                      className={`${checkoutstyles.formField} ${
                        touched.phoneNumber && errors.phoneNumber
                          ? checkoutstyles.invalid
                          : isValid
                          ? checkoutstyles.valid
                          : ""
                      }`}
                    />
                    {/* <ErrorMessage name="phoneNumber" /> */}
                    <ErrorMessage name="phoneNumber">
                      {(errMsg) => (
                        <div className={checkoutstyles.error}>{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>

              <div>
                <h5 style={{ marginTop: "1rem" }}>SHIPPING INFO</h5>
                <div className={checkoutstyles.userDetails}>
                  <div
                    className={`${checkoutstyles.inputField} ${checkoutstyles.inputAddress}`}
                  >
                    <label htmlFor="address">Your Address</label>
                    <Field
                      type="text"
                      placeholder="11 Mobolaji Junction"
                      name="address"
                      id="address"
                      classaddress={`${checkoutstyles.formField} ${
                        touched.address && errors.address
                          ? checkoutstyles.invalid
                          : isValid
                          ? checkoutstyles.valid
                          : ""
                      }`}
                    />
                    {/* <ErrorMessage name="address" /> */}
                    <ErrorMessage name="address">
                      {(errMsg) => (
                        <div className={checkoutstyles.error}>{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className={checkoutstyles.inputField}>
                    <label htmlFor="zipCode">ZIP Code</label>
                    <Field
                      type="text"
                      placeholder="10001"
                      name="zipCode"
                      id="zipCode"
                      className={`${checkoutstyles.formField} ${
                        touched.zipCode && errors.zipCode
                          ? checkoutstyles.invalid
                          : isValid
                          ? checkoutstyles.valid
                          : ""
                      }`}
                    />
                    {/* <ErrorMessage name="zipCode" /> */}
                    <ErrorMessage name="zipCode">
                      {(errMsg) => (
                        <div className={checkoutstyles.error}>{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className={checkoutstyles.inputField}>
                    <label htmlFor="city">City</label>
                    <Field
                      type="text"
                      placeholder="Lagos"
                      name="city"
                      id="city"
                      className={`${checkoutstyles.formField} ${
                        touched.city && errors.city
                          ? checkoutstyles.invalid
                          : isValid
                          ? checkoutstyles.valid
                          : ""
                      }`}
                    />
                    {/* <ErrorMessage name="city" /> */}
                    <ErrorMessage name="city">
                      {(errMsg) => (
                        <div className={checkoutstyles.error}>{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className={checkoutstyles.inputField}>
                    <label htmlFor="country">Country</label>
                    <Field
                      type="text"
                      placeholder="Nigeria"
                      name="country"
                      id="country"
                      className={`${checkoutstyles.formField} ${
                        touched.country && errors.country
                          ? checkoutstyles.invalid
                          : isValid
                          ? checkoutstyles.valid
                          : ""
                      }`}
                    />
                    {/* <ErrorMessage name="country" /> */}
                    <ErrorMessage name="country">
                      {(errMsg) => (
                        <div className={checkoutstyles.error}>{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <>
                <h5 style={{ marginTop: "1rem" }}>PAYMENT METHOD</h5>
              </>
              <div className={checkoutstyles.paymentContainer}>
                <p style={{ fontWeight: "700", fontSize: ".8rem" }}>
                  Payment Method
                </p>
                <div className={checkoutstyles.radioLabel}>
                  <label>
                    <Field type="radio" name="paymentType" value="1" />
                    e-Money
                  </label>
                  <label>
                    <Field type="radio" name="paymentType" value="2" />
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </>
          </Form>
        </div>
      )}
    </Formik>
  );
}

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  zipCode: Yup.string().required("ZIP code is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
});
