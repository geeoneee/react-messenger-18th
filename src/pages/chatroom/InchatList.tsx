import { styled } from "styled-components";
import Chat from "./Chat";
import React, { useEffect, useRef } from "react";

type InchatListProps = {
  currentUser: { id: number; name: string };
  chat: Array<{ value: string; id: number; sender: string; date: string }>;
};

const determineShowProfileImage = (
  chat: Array<{ value: string; sender: string; date: string }>,
  index: number
) => {
  let displayProfile = false;
  if (index !== 0) {
    const prevSender = chat[index - 1].sender;
    if (prevSender !== chat[index].sender) displayProfile = true;
  } else displayProfile = true;
  return displayProfile;
};

const determineshowDate = (
  chat: Array<{ sender: string; date: string }>,
  index: number
) => {
  let displayTime = true;
  if (index !== chat.length - 1) {
    const nextSender = chat[index + 1].sender;
    if (nextSender === chat[index].sender) {
      const nextTimeValue = chat[index + 1].date;
      if (nextTimeValue === chat[index].date) displayTime = false;
    }
  }
  return displayTime;
};

const InchatList: React.FC<InchatListProps> = ({ currentUser, chat }) => {
  const chatListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <InChatListContainer>
      <InChatListWrapper ref={chatListRef} id="chat-container">
        {chat.map((message, index) => (
          <Chat
            value={message.value}
            id={message.id}
            sender={message.sender}
            date={message.date}
            key={message.id}
            showDate={determineshowDate(chat, index)}
            currentUser={currentUser}
            showProfileImage={determineShowProfileImage(chat, index)}
          />
        ))}
      </InChatListWrapper>
    </InChatListContainer>
  );
};

export default InchatList;

const InChatListContainer = styled.div`
  height: 624px;
  padding: 0px 16px;
  margin-top: 60px;
  margin-bottom: 46px;
`;

const InChatListWrapper = styled.div`
  height: 610px;
  overflow: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  > * {
    &:first-child {
      margin-top: auto !important;
    }
  }
`;
