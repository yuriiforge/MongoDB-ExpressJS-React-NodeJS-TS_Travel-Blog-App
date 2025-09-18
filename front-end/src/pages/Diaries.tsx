import { Box } from '@mui/material';
import DiaryItem from '../components/diaries/DiaryItem';

const DiariesPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={3}
      justifyContent="center"
      alignItems="center"
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <DiaryItem key={item} />
      ))}
    </Box>
  );
};

export default DiariesPage;
