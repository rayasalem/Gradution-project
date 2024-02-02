import React from 'react';
import { Avatar, Paper, Typography } from '@mui/material';

interface ChatMessageProps {
  message: string;
  sender: string;
  avatar: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender, avatar }) => {
  const paperStyle: React.CSSProperties = {
    padding: '16px',
    backgroundColor: '#2979ff', 
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
  };

  const avatarStyle: React.CSSProperties = {
    marginRight: '16px',
  };

  return (
    <Paper style={paperStyle} elevation={3}>
      <Avatar style={avatarStyle} src={avatar} alt={sender} />
      <div>
        <Typography variant="subtitle1" gutterBottom>
          {sender}
        </Typography>
        <Typography variant="body1">{message}</Typography>
      </div>
    </Paper>
  );
};

export default ChatMessage;