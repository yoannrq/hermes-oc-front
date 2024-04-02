// import './Footer.scss';
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';


const Footer = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation sx={{ width: '45ch' }} value={value} onChange={handleChange}>
      <BottomNavigationAction label="Accueil" value="recents" icon={<HomeIcon />} />
      <BottomNavigationAction label="Patients" value="favorites" icon={<MedicalServicesIcon/>} />
      <BottomNavigationAction label="Groupes" value="nearby" icon={<Diversity3Icon/>} />
      <BottomNavigationAction label="Privées" value="folder" icon={<ForumIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
