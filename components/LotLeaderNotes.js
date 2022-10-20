import React from "react";
import { Message } from "semantic-ui-react";

const LotLeaderNotes = ({ note }) => {
  return (
    <div>
      <Message floating compact>
        <Message.Header>Notes: </Message.Header>
        <Message.List>
          <Message.Item>Forging: {note}</Message.Item>
          <Message.Item>Pressing:</Message.Item>
          <Message.Item>Tapping:</Message.Item>
          <Message.Item>VS / Pack</Message.Item>
        </Message.List>
      </Message>
    </div>
  );
};

export default LotLeaderNotes;
