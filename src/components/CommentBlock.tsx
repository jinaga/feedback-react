import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { UserAvatar } from './UserAvatar';

export interface CommentBlockProps {
  self: boolean;
  content: string;
};

export const CommentBlock = ({ self, content }: CommentBlockProps) => (
  <div className="jinaga-feedback-comment-block">
    <div className="jinaga-feedback-comment-block-info">
      <UserAvatar />
      <p>{ new Date().toLocaleTimeString() }</p>
      <p>{ new Date().toLocaleDateString() }</p>
    </div>
    <div className="jinaga-feedback-comment-block-content" dangerouslySetInnerHTML={(
      {
        __html: content
      }
    )}>
      
    </div>
    <div className="jinaga-feedback-comment-block-controls">
      {
        self ?
          <a onClick={action("Edit a comment.")}>Edit</a>
          : <></>
      }
      <a onClick={action("Show more")}>Show more</a>
    </div>
  </div>
)