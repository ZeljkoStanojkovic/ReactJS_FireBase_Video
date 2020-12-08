import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from 'react-player';
import videoFile from '../assets/mp4/RunningMan.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed', 
    left: 0, 
    top: 0, 
    right: 0, 
    bottom: 0, 
    zIndex: 10001, 
    textAlign: 'center', 
    margin: 'auto', 
    backgroundColor: 'white'
  } 
}));

export default function Loading() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>      
      <div style={{position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <ReactPlayer url={videoFile} loop={true} playing muted config={{ file: { attributes: { autoPlay: true, muted: true }}}}/>
      </div>
    </div>
  );
}
