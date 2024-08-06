import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import { T } from "../../../lib/types/common";
import { Messages } from "../../../lib/config";
import { LoginInput, MemberInput } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";

const useStyles = makeStyles((theme: any) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

const ModalImg = styled('img')`
  width: 62%;
  height: 100%;
  border-radius: 10px;
  background: #000;
  margin-top: 9px;
  margin-left: 10px;
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const classes: any = useStyles();
  const [ memberNick, setMemberNick] = useState<string>("");
  const [ memberPhone, setMemberPhone ] = useState<string>("");
  const [ memberPassword, setMemberPassword] = useState<string>("")
  const { setAuthMember } = useGlobals();


  /**Handlers */
  const handleUserName = (e: T) => {
    console.log(e.target.value)
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: T) => {
    console.log(e.target.value)
    setMemberPhone(e.target.value);
  };

  const handlePassword = (e: T) => {
    console.log(e.target.value)
    setMemberPassword(e.target.value);
  };

  const handlePasswordKeyDown = (e: T) => {
    if(e.key === "Enter"  && signupOpen) {
      handleSignupRequest().then();
    } else if (e.key === "Enter"  && loginOpen) {
      //Login Request
      handleLoginRequest().then();
    }
  }

  const handleSignupRequest = async () => {
    try {
      console.log("inputs:", memberNick, memberPhone, memberPassword);
      const isFulfill = 
        memberNick !== "" && memberPhone !== "" && memberPassword !== "";
        if(!isFulfill) 
          throw new Error(Messages.error3);

        const signupInput: MemberInput = {
          memberNick: memberNick,
          memberPhone: memberPhone,
          memberPassword: memberPassword,
        };

        const member = new MemberService();
        const result = await member.signup(signupInput);

        //Saving Authenticatied User
        setAuthMember(result);
        handleSignupClose();
    } catch (err) {
      console.log(err);
      handleSignupClose();
      sweetErrorHandling(err).then()
    }
  }

  const handleLoginRequest = async () => {
    try {
     
      const isFulfill = 
        memberNick !== "" && memberPassword !== "";
        if(!isFulfill) 
          throw new Error(Messages.error3);

        const loginInput: LoginInput = {
          memberNick: memberNick,
          memberPassword: memberPassword,
        };

        const member = new MemberService();
        const result = await member.login(loginInput);
        //Saving Authenticatied User
        setAuthMember(result);
        handleLoginClose();
    } catch (err) {
      console.log(err);
      handleLoginClose();
      sweetErrorHandling(err).then()
    }
  }



  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "800px" }}
          >
            <ModalImg src={"/img/auth.webp"} alt="camera" />
            <Stack sx={{ marginLeft: "69px", alignItems: "center" }}>
              <h2>Signup Form</h2>
              <TextField
                sx={{ marginTop: "7px" }}
                id="username"
                label="Username"
                variant="outlined"
                onChange={handleUserName}
              />
              <TextField
                sx={{ my: "17px" }}
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                onChange={handlePhone}
                onKeyDown={handlePasswordKeyDown}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
              />
              <Fab
                sx={{ marginTop: "30px", width: "120px" }}
                variant="extended"
                color="primary"
                onClick={handleSignupRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "700px" }}
          >
            <ModalImg src={"/img/auth.webp"} alt="camera" />
            <Stack
              sx={{
                marginLeft: "65px",
                marginTop: "25px",
                alignItems: "center",
              }}
            >
              <h2>Login Form</h2>
              <TextField
                id="login-username"
                label="Username"
                variant="outlined"
                sx={{ my: "10px" }}
                onChange={handleUserName}
              />
              <TextField
                id="login-password"
                label="Password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                sx={{ marginTop: "27px", width: "120px" }}
                variant="extended"
                color="primary"
                onClick={handleLoginRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
