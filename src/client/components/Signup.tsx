import React, { useState, useEffect } from "react";
import { BsXLg } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { apiService, TOKEN_KEY } from "../services/api-services";
import { useNavigate } from "react-router-dom";

const Signup: React.FC<SignupProps> = ({ modalView, handleSignupClose }) => {
  // Redirect
  const navigate = useNavigate();

  // Signup values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    apiService("/auth/register", "POST", { name, email, password })
      .then((token) => {
        localStorage.setItem(TOKEN_KEY, token);
        handleSignupClose();
        navigate("/loading");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        setTimeout(() => {
          navigate("/profile");
        }, 2900);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal size="xl" show={modalView} onHide={() => handleSignupClose()}>
      <Modal.Body className="signup-modal">
        <div className="modal-row row">
          <div className="col-lg-6 col-12 modal-form-col">
            <div className="modal-left">
              <div className="modal-left-container container">
                <div className="modal-logo mb-4 mt-3">
                  <img
                    src="https://i.imgur.com/iXM4PWE.png"
                    alt=""
                    className="fetch-logo"
                  />
                </div>
                <div className="modal-signup-text mb-4">
                  <h3 className="signup-header mb-2">Signup</h3>
                  <p className="signup-description text-muted">
                    Thank you for taking an interest in Fetch. Signup today and
                    find the perfect pet for you!
                  </p>
                </div>

                <Form className="signup-form">
                  <Form.Group
                    className="mb-4 signup-username-group"
                    controlId="formBasicText"
                  >
                    <Form.Label className="signup-username-label">
                      Username
                    </Form.Label>
                    <Form.Control
                      className="signup-username-input"
                      type="text"
                      placeholder="Enter username"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-4 signup-username-group"
                    controlId="formBasicText"
                  >
                    <Form.Label className="signup-username-label">
                      Email
                    </Form.Label>
                    <Form.Control
                      className="signup-username-input"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-4 signup-password-group"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="signup-password-label">
                      Password
                    </Form.Label>
                    <Form.Control
                      className="signup-password-input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    onClick={handleSignup}
                    className="signup-modal-btn w-100 mb-3"
                    type="submit"
                  >
                    Signup
                  </Button>
                </Form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 modal-img-col">
            <div className="signup-modal-img">
              <Modal.Header
                className="close-modal-signup"
                closeButton
              ></Modal.Header>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

interface SignupProps {
  modalView: boolean;
  handleSignupClose: any;
}

export default Signup;
