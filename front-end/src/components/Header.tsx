import { AppBar, Link, Tab, Tabs, Toolbar } from '@mui/material';
import { ModeOfTravel } from '@mui/icons-material';
import { useState, type SyntheticEvent } from 'react';

const linksArray: string[] = ['Home', 'Diaries', 'Auth'];

const Header = () => {
  const [activeLink, setActiveLink] = useState<number | false>(false);

  const handleChangeLink = (_e: SyntheticEvent, link: number) => {
    setActiveLink(link);
  };
  return (
    <AppBar sx={{ bgcolor: 'transparent' }}>
      <Toolbar>
        <ModeOfTravel sx={{ color: 'black' }} />

        <Tabs
          value={activeLink}
          onChange={handleChangeLink}
          component={Link}
          sx={{ ml: 'auto', textDecoration: 'none' }}
        >
          {linksArray.map((link, i) => (
            <Tab
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
