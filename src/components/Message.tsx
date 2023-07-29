import React from 'react';
import styles from './Message.module.css';
import { MessageType } from '../types/MessageType';

interface MessageProps {
  type: MessageType;
  text: string;
}

const Message: React.FC<MessageProps> = ({ type, text }) => {
  return <p className={styles[type]}>{text}</p>;
};

export default Message;