import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../utils/axiosClient";

const notify = () =>
    toast.success("🦄 Mesajınız İletildi!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
const notify_error = () =>
    toast.error("🦄 Mesajınız İletilemedi!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

function ContactMeForm() {
    const validate = Yup.object({
        name: Yup.string()
            .max(15, "Fazla karakter girdiniz.")
            .required("Gerekli alan"),
        mail: Yup.string().email("Geçersiz adres.").required("Gerekli alan"),
        subject: Yup.string()
            .max(20, "Fazla karakter girdiniz.")
            .required("Gerekli alan"),
        message: Yup.string()
            .max(200, "Fazla karakter girdiniz.")
            .required("Gerekli alan"),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                mail: "",
                subject: "",
                message: "",
            }}
            onSubmit={async (values, { resetForm }) => {
                await axiosClient
                    .post("/api/contact", values)
                    .then(() => {
                        notify();
                        resetForm({ values: "" });
                    })
                    .catch(() => {
                        notify_error();
                    });
            }}
            validationSchema={validate}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <Field
                                type="text"
                                className={`form-control form-control-lg ${
                                    errors.name &&
                                    touched.name &&
                                    "border border-danger"
                                }`}
                                name="name"
                                placeholder="Ad*"
                            />
                            <ErrorMessage
                                component="div"
                                className="text-danger"
                                name="name"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <Field
                                type="email"
                                className={`form-control form-control-lg ${
                                    errors.mail &&
                                    touched.mail &&
                                    "border border-danger"
                                }`}
                                name="mail"
                                placeholder="E-mail*"
                            />
                            <ErrorMessage
                                component="div"
                                className="text-danger"
                                name="mail"
                            />
                        </div>
                    </div>


                    <div className="col-lg-12">
                        <div className="form-group">
                            <Field
                                type="text"
                                className={`form-control form-control-lg ${
                                    errors.subject &&
                                    touched.subject &&
                                    "border border-danger"
                                }`}
                                name="subject"
                                placeholder="Konu"
                            />
                            <ErrorMessage
                                component="div"
                                className="text-danger"
                                name="subject"
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <Field
                                as="textarea"
                                className={`form-control ${
                                    errors.message &&
                                    touched.message &&
                                    "border border-danger"
                                }`}
                                name="message"
                                placeholder="Mesaj"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-danger"
                                name="message"
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 mx-auto text-center justify-content-center">
                        <button
                            className="rn-btn edu-btn"
                            disabled={isSubmitting}
                            type="submit"
                        >
                            <span>Gönder</span>
                            <i className="icon-arrow-right-line-right"></i>
                        </button>
                    </div>
                    </div>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Form>
            )}
        </Formik>
    );
}
export default ContactMeForm;
