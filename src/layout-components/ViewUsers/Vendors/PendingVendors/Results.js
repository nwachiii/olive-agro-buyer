import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  DialogContentText,
  Button
} from '@material-ui/core';
import getInitials from '../../../../utils/getInitials';
import { VendorModal } from '../VendorModal';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, PendingVendors, ...rest }) => {
  const classes = useStyles();
  const [selectedPendingVendorIds, setSelectedPendingVendorIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open3, setOpen3] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen3 = scrollType => () => {
    setOpen3(true);
    setScroll(scrollType);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open3) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open3]);

  const handleSelectAll = event => {
    let newSelectedPendingVendorIds;

    if (event.target.checked) {
      newSelectedPendingVendorIds = PendingVendors.map(
        PendingVendor => PendingVendor.id
      );
    } else {
      newSelectedPendingVendorIds = [];
    }

    setSelectedPendingVendorIds(newSelectedPendingVendorIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedPendingVendorIds.indexOf(id);
    let newSelectedPendingVendorIds = [];

    if (selectedIndex === -1) {
      newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
        selectedPendingVendorIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
        selectedPendingVendorIds.slice(1)
      );
    } else if (selectedIndex === selectedPendingVendorIds.length - 1) {
      newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
        selectedPendingVendorIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
        selectedPendingVendorIds.slice(0, selectedIndex),
        selectedPendingVendorIds.slice(selectedIndex + 1)
      );
    }

    setSelectedPendingVendorIds(newSelectedPendingVendorIds);
  };

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={
                      selectedPendingVendorIds.length === PendingVendors.length
                    }
                    color="primary"
                    indeterminate={
                      selectedPendingVendorIds.length > 0 &&
                      selectedPendingVendorIds.length < PendingVendors.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Company name</TableCell>
                <TableCell>Company email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Approve/Decline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PendingVendors.slice(0, limit).map(PendingVendor => (
                <TableRow
                  hover
                  key={PendingVendor.id}
                  selected={
                    selectedPendingVendorIds.indexOf(PendingVendor.id) !== -1
                  }>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={
                        selectedPendingVendorIds.indexOf(PendingVendor.id) !==
                        -1
                      }
                      onChange={event =>
                        handleSelectOne(event, PendingVendor.id)
                      }
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Avatar
                        className={classes.avatar}
                        src={PendingVendor.avatarUrl}>
                        {getInitials(PendingVendor.companyName)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {PendingVendor.companyName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{PendingVendor.companyEmail}</TableCell>
                  <TableCell>{PendingVendor.companyAddress.state}</TableCell>
                  <TableCell>{PendingVendor.phoneNumber}</TableCell>

                  <TableCell>
                    {
                      <VendorModal
                        open3={open3}
                        handleClose3={handleClose3}
                        scroll={scroll}
                        DialogContentText={DialogContentText}
                        descriptionElementRef={descriptionElementRef}
                      />
                    }
                    <Button
                      key={PendingVendor.id}
                      onClick={handleClickOpen3('paper')}
                      color="secondary"
                      variant="contained">
                      see more...
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={PendingVendors.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  PendingVendors: PropTypes.array.isRequired
};

export default Results;
