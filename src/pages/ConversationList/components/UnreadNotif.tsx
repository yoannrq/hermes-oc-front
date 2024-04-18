import { Box, Typography } from '@mui/material';

export interface UnreadNotifProps {
  unreadMessageCount: number;
  date: string;
}

export default function UnreadNotif({
  unreadMessageCount,
  date,
}: UnreadNotifProps) {
  // Calcul de la différence de temps entre l'heure actuelle et l'heure du message
  const messageTime = new Date(date).getTime();
  const now = Date.now();
  const timeDiff = now - messageTime;

  // Calcul des unités de temps
  const oneSecond = 1000;
  const oneMinute = 60 * oneSecond;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30 * oneDay;
  const oneYear = 365 * oneDay;

  // Calcul du temps écoulé en jours, heures, minutes, secondes
  const years = Math.floor(timeDiff / oneYear);
  const months = Math.floor((timeDiff % oneYear) / oneMonth);
  const weeks = Math.floor(timeDiff / oneWeek);
  const days = Math.floor((timeDiff % oneWeek) / oneDay);
  const hours = Math.floor((timeDiff % oneDay) / oneHour);
  const minutes = Math.floor((timeDiff % oneHour) / oneMinute);

  // Construction de la chaîne de temps écoulé
  let timeElapsed = '';
  if (years > 0) {
    timeElapsed = `${years} an${years > 1 ? 's' : ''}`;
  } else if (months > 0) {
    timeElapsed = `${months} m`;
  } else if (weeks > 0) {
    timeElapsed = `${weeks} sem`;
  } else if (days > 0) {
    timeElapsed = `${days} j`;
  } else if (hours > 0) {
    timeElapsed = `${hours} h`;
  } else if (minutes > 0) {
    timeElapsed = `Il y a ${minutes} min`;
  } else {
    timeElapsed = "À l'instant";
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontSize: '0.7em',
          fontWeight: '700',
        }}
      >
        {timeElapsed}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.7em',
          fontWeight: '700',
          color: '#fafafa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.5em',
          height: '1.5em',
          borderRadius: 50,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        {unreadMessageCount}
      </Typography>
    </Box>
  );
}
