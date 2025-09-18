import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import { ModeOfTravel } from '@mui/icons-material';
import { useState, type SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const linksArray: string[] = ['home', 'diaries', 'auth'];
const loggedInLinks: string[] = ['home', 'diaries', 'add', 'profile'];

const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(0);

  const isLoggedIn = useSelector((s: RootState) => s.auth.isLoggedIn);

  const handleChangeLink = (_e: SyntheticEvent, link: number) => {
    setActiveLink(link);
  };

  return (
    <AppBar sx={{ bgcolor: 'transparent', position: 'static' }}>
      <Toolbar>
        <ModeOfTravel sx={{ color: 'black' }} />

        <Tabs
          value={activeLink}
          onChange={handleChangeLink}
          sx={{ ml: 'auto', textDecoration: 'none' }}
        >
          {isLoggedIn
            ? loggedInLinks.map((link, i) => (
                <Tab
                  component={Link}
                  to={`/${link === 'home' ? '' : link}`}
                  sx={{
                    textDecoration: 'none',
                    ':hover': {
                      textDecoration: 'underline',
                      textUnderlineOffset: '18px',
                    },
                  }}
                  key={i}
                  label={link}
                />
              ))
            : linksArray.map((link, i) => (
                <Tab
                  component={Link}
                  to={`/${link === 'home' ? '' : link}`}
                  sx={{
                    textDecoration: 'none',
                    ':hover': {
                      textDecoration: 'underline',
                      textUnderlineOffset: '18px',
                    },
                  }}
                  key={i}
                  label={link}
                />
              ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
