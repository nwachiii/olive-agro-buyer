import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';
import VendorInfo from './VendorInfo';

export const VendorModal = Props => {
  const {
    open3,
    handleClose3,
    scroll,
    DialogContentText,
    descriptionElementRef
  } = Props;
  return (
    <Dialog
      open={open3}
      onClose={handleClose3}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description">
      <DialogTitle id="scroll-dialog-title">
        <h4 className="mb-0">Vendor Documents</h4>
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={2}>
          <VendorInfo />
        </DialogContentText>
      </DialogContent>
      <DialogActions className="justify-content-center flex-wrap">
        {/* <div style={ToggleBtnDisplay}> */}
        <Button onClick={handleClose3} color="primary" variant="contained">
          Accept
        </Button>
        <Button onClick={handleClose3} color="secondary" variant="contained">
          Decline
        </Button>
        {/* </div> */}
      </DialogActions>
    </Dialog>
  );
};
