import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { UserAvatar } from './UserAvatar';

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
    <p><a onClick={action("Show more")}>Show more</a></p>
    {
      self ?
        <a onClick={action("Edit a comment.")}>Edit</a>
        : <></>
    }
  </div>
)