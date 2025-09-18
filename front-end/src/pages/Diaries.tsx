import { Box } from '@mui/material';
import DiaryItem from '../components/diaries/DiaryItem';
import { useQuery } from '@tanstack/react-query';
import { postsService } from '../services/PostsService';

const DiariesPage = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => postsService.getAllPosts(),
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={3}
      justifyContent="center"
      alignItems="center"
    >
      {data &&
        data.map((item) => (
          <DiaryItem
            key={item._id}
            title={item.title}
            description={item.description}
            date={item.date}
            image={item.image}
            location={item.location}
            user={item.user._id}
          />
        ))}
    </Box>
  );
};

export default DiariesPage;
