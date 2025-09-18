import { red } from '@mui/material/colors';
import {
  Box,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function DiaryItem() {
  return (
    <Card
      sx={{
        width: '50%',
        height: '60 vh',
        margin: 1,
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '5px 5px 10px #ccc',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditLocationAltIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <img
        height="194"
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXH_vXzgYjUHY2NSWs2t6vR6CpB-g3DqNRFy9e3LYgQ-dw7BiPq43BG38cop9_7vXmfHJ77crkjrh9G15vHKh_eKQAQSI5Yw1xjb_J4pwA2Q"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          paddingBlock={1}
          variant="h6"
          sx={{ color: 'text.secondary' }}
        >
          This impressive paella
        </Typography>
        <hr />
        <Box
          paddingTop={1}
          gap={4}
          display="flex"
          justifyContent="space-between"
        >
          <Typography width="170px" fontWeight="bold" variant="caption">
            Yurii Stepaniuk
          </Typography>
          <Typography
            paddingTop={1}
            variant="body2"
            sx={{ color: 'text.secondary' }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            eaque suscipit nihil quas, consequatur vero error assumenda, animi
            nobis corrupti omnis minima nulla nesciunt obcaecati non
            necessitatibus? Rerum odio deleniti amet. Quo nostrum et dolorum
            provident perferendis similique, nam cum quis vero sint nobis
            recusandae, commodi blanditiis repudiandae incidunt veniam placeat
            odit distinctio delectus repellendus expedita tempore error, enim
            consectetur. Esse, quas placeat dolorum sint qui id soluta nostrum.
            Beatae perferendis in necessitatibus, non debitis ex repudiandae
            eos, dolore ab facere obcaecati. Expedita maxime recusandae neque
            quibusdam veritatis numquam ea placeat voluptatibus saepe, ut esse
            eveniet facilis, nihil reprehenderit explicabo?
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ marginLeft: 'auto' }}>
        <IconButton color="warning">
          <ModeEditOutlineIcon />
        </IconButton>
        <IconButton color="error">
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
