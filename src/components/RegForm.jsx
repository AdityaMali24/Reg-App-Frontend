import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
// import { addApplicant } from "../Redux/Applicant/Action";

const RegForm = () => {

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [check, setCheck] = useState([]);

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setCheck([...check, value]);
      console.log("check", check.length);
    } else {
      setCheck(check.filter((ele) => ele !== value));
    }
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={6} lg={6} sm={10} xs={12}>
            <Card className="shadow-lg formback p-4">
              <Card.Body>
                <div className="text-center mb-4">
                  <h2 className="fw-bold mb-2 text-white text-uppercase">Registration</h2>
                </div>
                <Formik
                  initialValues={{
                    name: "",
                    dob: "",
                    gender: "",
                    hobbies: "",
                    state: "",
                    address: "",
                    resume: "",
                  }}
                  validate={(values) => {
                    console.log('Validating values:', values);
                    const errors = {};

                    if (!values.name) {
                      errors.name = "name is required"
                    }
                    if (!values.dob) {
                      errors.dob = "dob is required"
                    }
                    if (!values.gender) {
                      errors.gender = "gender is required"
                    }
                    // if (!values.hobbies) {
                    //   errors.hobbies = "hobbies is required"
                    // }
                    if (!values.state) {
                      errors.state = "state is required"
                    }
                    if (!values.address) {
                      errors.address = "address is required"
                    }
                    if (!values.resume) {
                      errors.resume = "resume is required"
                    }
                    console.log('Validation errors:', errors);
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log('Form Submitted with values:', values);
                    const formData = new FormData();
                    formData.append("name", values.name);
                    formData.append("dob", values.dob);
                    formData.append("state", values.state);
                    formData.append("gender", values.gender);
                    console.log('Appending hobbies:', check);
                    formData.append("hobbies", check);
                    formData.append("address", values.address);
                    formData.append("resume", values.resume);
                    for (let pair of formData.entries()) {
                      console.log(pair[0] + ':', pair[1]);
                    }
                    setTimeout(() => {

                      console.log('Dispatching addApplicant action');
                      axios
                      .post(
                        "https://registerform-qiph.onrender.com/applicant/add-applicant",
                        formData
                      )
                      .then((res) => {
                        navigate("/list");
                      })
                      .catch((err) => console.log(err));
                      
                      // dispatch(addApplicant(formData)).then(() => {
                      //   navigate("/list");
                      // });
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur, setFieldValue, resetForm
                  }) => (

                    <form onSubmit={handleSubmit} >
                      <Form.Group className="mb-3 row" controlId="Name">
                        <Form.Label className="col-3 col-sm-4  col-form-label">
                          Name
                        </Form.Label>
                        <Col className="col-9 col-sm-8">
                          <Form.Control className="intag" type="text" name="name" onChange={handleChange} value={values.name} placeholder="Enter Name" />
                        </Col>
                      </Form.Group>
                      <Form.Group className="mb-3 row" controlId="DOB">
                        <Form.Label className="col-3 col-sm-4  col-form-label">
                          Date of Birth
                        </Form.Label>
                        <Col className="col-9 col-sm-8">
                          <Form.Control type="date" name="dob" onChange={handleChange} value={values.dob} />
                        </Col>
                      </Form.Group>
                      <Form.Group className="mb-3 row" controlId="Gender">
                        <Form.Label className="col-3 col-sm-4  col-form-label">
                          Gender
                        </Form.Label>
                        <Col className=" col-9 col-sm-8 d-flex align-items-center">
                          <Form.Check
                            className="text-white"
                            inline
                            type="radio"
                            label="Male"
                            name="gender"
                            value="male"
                            checked={values.gender === "male"}
                            onChange={handleChange}
                          />
                          <Form.Check
                            className="text-white"

                            inline
                            type="radio"
                            label="Female"
                            name="gender"
                            value="female"
                            checked={values.gender === "female"}
                            onChange={handleChange}
                          />
                          {errors.gender && touched.gender && errors.gender}
                        </Col>
                      </Form.Group>

                      <Form.Group className="mb-3 row" controlId="Hobbies">
                        <Form.Label className="col-3 col-sm-4 col-form-label">
                          Hobbies
                        </Form.Label>
                        <Col className=" col-9 col-sm-8 d-flex align-items-center flex-wrap">
                          <Form.Check

                            inline
                            type="checkbox"
                            label="Music"
                            name="hobbies.hob1"
                            value="Music"
                            className="mr-2 text-white"
                            onChange={handleCheck}
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Travel"
                            name="hobbies.hob2"
                            value="Travel"
                            className="mr-2 text-white"
                            onChange={handleCheck}

                          />
                          <Form.Check
                            className="text-white"
                            inline
                            type="checkbox"
                            label="Sport"
                            name="hobbies.hob3"
                            value="Sport"
                            onChange={handleCheck}

                          />
                          {check.length > 0 ? (
                            <span className="errorcolor">
                              {check.length <= 1 ? (
                                <span>select more than 1</span>
                              ) : (
                                ""
                              )}
                            </span>
                          ) : (
                            ""
                          )}
                        </Col>
                      </Form.Group>
                      <Form.Group className="mb-3 row" controlId="State">
                        <Form.Label className="col-3 col-sm-4 col-form-label">
                          State
                        </Form.Label>
                        <Col className="col-9 col-sm-8">
                          <Form.Select name="state" value={values.state} onChange={handleChange}>
                            <option value="State 1">Mahrashtra</option>
                            <option value="State 2">Delhi</option>
                            <option value="State 3">Punjab</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                      <Form.Group className="mb-3 row" controlId="Address">
                        <Form.Label className="col-3 col-sm-4 col-form-label">
                          Address
                        </Form.Label>
                        <Col className="col-9 col-sm-8">
                          <Form.Control
                            as="textarea"
                            rows={4}
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your address"
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group className="mb-3 row" controlId="Resume">
                        <Form.Label className=" col-3 col-sm-4 col-form-label">
                          Upload Resume
                        </Form.Label>
                        <Col className="col-9 col-sm-8">
                          <Form.Control type="file" accept=".docx" name="resume" onChange={(e) => {
                            setFieldValue("resume", e.currentTarget.files[0]);
                          }}
                          />
                          <span className="errorcolor">
                            {" "}
                            {errors.resume && touched.resume && errors.resume}
                          </span>
                        </Col>
                      </Form.Group>
                      <div className="d-grid justify-content-center mt-3">
                        <Row>
                          <Col className="d-flex justify-content-end">
                            <button type="reset" onClick={resetForm} className="me-2">Reset</button> {/* Reset button */}
                          </Col>
                          <Col className="d-flex justify-content-start">
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                          </Col>
                        </Row>
                      </div>
                    </form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default RegForm;
