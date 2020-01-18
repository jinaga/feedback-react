import * as React from "react";
import { UserAvatar } from "./UserAvatar";
import { action } from "@storybook/addon-actions";

export interface CommentBlockProps {
  self: boolean;
};

export const CommentBlock = ({ self }: CommentBlockProps) => (
  <div>
    <div>
      <UserAvatar />
      <p>{ new Date().toString() }</p>
    </div>
    <p>I like where this is going. Keep it up!</p>
    {
      self ?
        <a onClick={action("Edit a comment.")}>Edit</a>
        : <></>
    }
  </div>
)