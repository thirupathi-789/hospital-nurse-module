import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import PatientList from './PatientList';
import AddPatient from './AddPatient';
import Nurse from './Nurse';
import NurseList from './NurseList';
import AddNurse from './AddNurse';
import NurseSchedule from './NurseSchedule';

export default function BasicTabs() {
  return (
    <Tabs
      variant="outlined"
      aria-label="Pricing plan"
      defaultValue={0}
      sx={{
        width: 900,
        borderRadius: 'lg',
        boxShadow: 'sm',
        overflow: 'auto',
        marginTop: '20px'
      }}
    >
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontSize: 'sm',
            fontWeight: 'lg',
            [`&[aria-selected="true"]`]: {
              color: 'primary.500',
              bgcolor: 'background.surface',
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: '-4px',
            },
          },
        }}
      >
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Patients List
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Add Patient
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Nurses
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Add Nurses
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Shift Reports
        </Tab>
      </TabList>
      <TabPanel value={0}>
        <Typography level="inherit">
          <PatientList />
        </Typography>
      </TabPanel>
      <TabPanel value={1}>
        <Typography level="inherit">
          <AddPatient />
        </Typography>
      </TabPanel>
      <TabPanel value={2}>
        <Typography level="inherit">
          <NurseList />
        </Typography>
      </TabPanel>
      <TabPanel value={3}>
        <Typography level="inherit">
          <AddNurse />
        </Typography>
      </TabPanel>
      <TabPanel value={4}>
        <Typography level="inherit">
          <NurseSchedule />
        </Typography>
      </TabPanel>
    </Tabs>
  );
}
