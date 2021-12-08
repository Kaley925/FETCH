import React, { useState, useEffect } from "react";
import { BsXLg } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { apiService, TOKEN_KEY } from "../services/api-services";
import { useNavigate } from "react-router-dom";

const Login: React.FC<LoginProps> = ({ modalView, handleLoginClose }) => {
  // Redirect
  const navigate = useNavigate();

  // Login values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    apiService("/auth/login", "POST", { email, password })
      .then((token) => {
        localStorage.setItem(TOKEN_KEY, token);
        handleLoginClose();
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
    <Modal size="xl" show={modalView} onHide={() => handleLoginClose()}>
      <Modal.Body className="login-modal">
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
                <div className="modal-login-text mb-4">
                  <h3 className="login-header mb-2">Login</h3>
                  <p className="login-description text-muted">
                    Welcome back to Fetch. We're happy to see you again!
                  </p>
                </div>

                <Form className="login-form">
                  <Form.Group
                    className="mb-4 login-username-group"
                    controlId="formBasicText"
                  >
                    <Form.Label className="login-username-label">
                      Email
                    </Form.Label>
                    <Form.Control
                      className="login-username-input"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-4 login-password-group"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="login-password-label">
                      Password
                    </Form.Label>
                    <Form.Control
                      className="login-password-input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    onClick={handleLogin}
                    className="login-modal-btn w-100 mb-3"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 modal-img-col">
            <div className="login-modal-img">
              <Modal.Header
                className="close-modal-login"
                closeButton
              ></Modal.Header>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

interface LoginProps {
  modalView: boolean;
  handleLoginClose: any;
}

export default Login;