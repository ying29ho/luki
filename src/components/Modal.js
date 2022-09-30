import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from 'yup';
import 'react-day-picker/dist/style.css' 


export const AdoptModal = ({ show, onHide }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      terms: "",
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Name is required."),
        email: Yup.string().email("Email is invalid").required("Email is required."),
        terms: Yup.bool().required("Adoption Terms must be accepted"),
    }),
    onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
      alert("Form Submitted");
    },
  });
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Adoption Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={2} direction="vertical" className="col-md mx-auto p-2">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                id="name"
                name="name"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? 
              <div className="text-danger">{formik.errors.name}</div>
              : null }
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="email"
                onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else
              </Form.Text>
              {formik.touched.email && formik.errors.email ? 
              <div className="text-danger">{formik.errors.email}</div>
              : null }
            </Form.Group>
            <Form.Group className="pt-5">
              <Form.Check
              id="terms"
              name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.terms}
                type="checkbox"
                label="By submitting this form, you agree to treat the pets well and give them a new loving home <3"
              />
               {formik.errors.terms && 
              (<div className="text-danger">{formik.errors.terms}</div>)
              }
            </Form.Group>
            <div className="d-grid p-2 pt-3" align="center">
              <Button type="submit">Submit Adoption Form</Button>
            </div>
          </Form>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const BreedModal = ({  show, onHide }) => {
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        terms: "",
      },
      validationSchema: Yup.object({
          name: Yup.string().required("Name is required."),
          email: Yup.string().email("Email is invalid").required("Email is required."),
          terms: Yup.bool().required("Terms must be accepted"),
      }),
      onSubmit: (values) => {
        alert("Owner contacted.");
      },
    });
    return (
      <Modal
        show={show}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack gap={2} direction="vertical" className="col-md mx-auto p-2">
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? 
                <div className="text-danger">{formik.errors.name}</div>
                : null }
              </Form.Group>
  
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={formik.handleChange} onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else
                </Form.Text>
                {formik.touched.email && formik.errors.email ? 
                <div className="text-danger">{formik.errors.email}</div>
                : null }
              </Form.Group>
              <Form.Group className="pt-5">
                <Form.Check
                id="terms"
                name="terms"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.terms}
                  type="checkbox"
                  label="By submitting this form, you agree to our terms and condition."
                />
                 {formik.errors.terms && 
                (<div className="text-danger">{formik.errors.terms}</div>)
                }
              </Form.Group>
              <div className="d-grid p-2 pt-3" align="center">
                <Button type="submit">Submit Adoption Form</Button>
              </div>
            </Form>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };


  export const SitterModal = ({  show, onHide }) => {

    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        terms: "",
      },
      validationSchema: Yup.object({
          name: Yup.string().required("Name is required."),
          email: Yup.string().email("Email is invalid").required("Email is required."),
          terms: Yup.bool().required("Terms must be accepted"),
      }),
      onSubmit: (values) => {
        alert("Sitter contacted.");
      },
    });
    return (
      <Modal
        show={show}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Sitter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack gap={2} direction="vertical" className="col-md mx-auto p-2">
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? 
                <div className="text-danger">{formik.errors.name}</div>
                : null }
              </Form.Group>
  
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={formik.handleChange} onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else
                </Form.Text>
                {formik.touched.email && formik.errors.email ? 
                <div className="text-danger">{formik.errors.email}</div>
                : null }
              </Form.Group>
   
              <Form.Group className="pt-5">
                <Form.Check
                id="terms"
                name="terms"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.terms}
                  type="checkbox"
                  label="By submitting this form, you agree to our terms and condition."
                />
                 {formik.errors.terms && 
                (<div className="text-danger">{formik.errors.terms}</div>)
                }
              </Form.Group>
              <div className="d-grid p-2 pt-3" align="center">
                <Button type="submit">Submit Request Form</Button>
              </div>
            </Form>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };