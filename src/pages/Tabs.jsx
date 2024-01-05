import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PatientDetails from './PatientDetails';
import NurseSchedule from './NurseSchedule';
import AddPatient from './AddPatient';
import AddNurse from './AddNurse';
import NurseList from './NurseList';
import PatientList from './PatientList';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Patients List" {...a11yProps(0)} />
          <Tab label="Add Patient" {...a11yProps(1)} />
          <Tab label="Nurses" {...a11yProps(2)} />
          <Tab label="Add Nurse" {...a11yProps(3)} />
          <Tab label="Shift Reports" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PatientList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AddPatient />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <NurseList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <AddNurse />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <NurseSchedule />
      </CustomTabPanel>
    </Box>
  );
}
