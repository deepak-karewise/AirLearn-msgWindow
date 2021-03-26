import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Search from "@material-ui/icons/Search";
import Phone from "@material-ui/icons/Phone";
// import { users } from "./constants";
import {useSelector, connect, useDispatch} from 'react-redux';
// import userDetails from './redux/action';
import {message} from './redux/action';

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#2F1E30",
  },
  // necessary for content to be below app bar
  toolbar: {
    background: "brown",
    color: "wheat",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "auto",
    padding: theme.spacing(3),
  },

  profileImg: {
    width: "70%",
    borderRadius: "50%",
  },

  profile: {
    width: "70%",
    marginTop: "15%",
    borderRadius: "50%",
  },
}));

  const  PermanentDrawerLeft = () => {
  const user = useSelector((state) => state.user);
  const reducerMsg = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const [activeUser, setActiveUser] = useState(user[0]);
  const [filterUser, setFilterUser] = useState(user);
  const [msg, setMsg] = useState(reducerMsg);
  const classes = useStyles();

  console.log(user, reducerMsg);

  // const newmsg = '';
  // user[0].message = newmsg;

  const sendMsg = (e) => {
    setMsg(e.target.value);
    activeUser.message = msg;
    console.log("new msg",activeUser)
    document.getElementById('msgDiv').style.display="block"
  }
  useEffect(() => {
    dispatch({
      type: 'MESSAGE',
      payload: msg
  })
  });

  const onSearch = (e) => {
    const newUser = user.filter( item => {
      return  item.name.toLowerCase().includes(e.target.value)
      })
      setFilterUser(newUser);
    console.log(newUser)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className="row">
            <div className="col-lg-4">
              <img src={activeUser.img} alt="" className={classes.profileImg} />
            </div>
            <div className="col-lg-6">
              <h5 style={{ color: "#BCB7B3", marginLeft: 0 }}>
                {activeUser.name}
              </h5>
              <p className="buddyDetails">
                {activeUser.phone} | {activeUser.address}
              </p>
            </div>
            <div className="col-lg-2">
              <ListItemIcon id="phone">
                <Phone id="phone" />
              </ListItemIcon>
            </div>
          </div>
        </Toolbar>
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #c1c1c18c",
            height: "500px",
          }}
          className="container"
        >
          <div className="row">
            <div className="offset-lg-4 col-lg-7">
              <div id="msgDiv" className="sendText">
                { console.log("display",activeUser.message)}
                <p> {activeUser.message}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <input id="inputmsg" onChange={(e) => sendMsg(e)} type="text" placeholder="Type here ..." />
              <button id="sendMsg" onClick={sendMsg}>Send</button>
            </div>
          </div>
        </div>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <ListItemIcon> <Search id="searchIcon" /></ListItemIcon> */}
              <input onChange={onSearch} id="search" type="text" placeholder="Search" />
            </div>
          </div>

          <div style={{ marginTop: "20px" }} className="row">
            <div className="col-lg-3">
              <p id="contacts">Contacts</p>
            </div>
            <div className="col-lg-3">
              <p id="contacts">Recents</p>
            </div>
            <div className="offset-lg-2 col-lg-4">
              <p id="contacts">All</p>
              {/* <ListItemIcon> <ExpandMoreIcon /></ListItemIcon> */}
            </div>
          </div>
        </div>
        <Divider />
        <div className="container">
          {filterUser.map((user) => {
            return (
              <div className="row" onClick={() => setActiveUser(user)}>
                <div className="col-lg-4">
                  <img src={user.img} alt="" className={classes.profile} />
                </div>
                <div className="col-lg-6">
                  <h5 className="buddyDetails">{user.name}</h5>
                  <p className="buddyDetails">{user.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}


export default PermanentDrawerLeft

