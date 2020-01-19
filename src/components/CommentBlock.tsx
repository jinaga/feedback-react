import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { UserAvatar } from './UserAvatar';

export interface CommentBlockProps {
  self: boolean;
  content: string;
};

export const CommentBlock = ({ self, content }: CommentBlockProps) => {
  const [ expanded, setExpanded ] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [ contentHeight, setContentHeight ] = React.useState(0);
  React.useEffect(() => {
    setContentHeight(contentRef.current?.scrollHeight ?? 0);
  }, [contentRef]);

  return (
    <div className="jinaga-feedback-comment-block">
      <div className="jinaga-feedback-comment-block-info">
        <UserAvatar />
        <p>{ new Date().toLocaleTimeString() }</p>
        <p>{ new Date().toLocaleDateString() }</p>
      </div>
      <div
        ref={contentRef}
        className={
          "jinaga-feedback-comment-block-content" +
          (expanded
            ? " jinaga-feedback-comment-block-content-expanded"
            : " jinaga-feedback-comment-block-content-collapsed")
        }
        dangerouslySetInnerHTML={(
        {
          __html: content
        }
      )}>
        
      </div>
      <div className="jinaga-feedback-comment-block-controls">
        {
          self
            ? <a onClick={action("Edit a comment.")}>Edit</a>
            : <></>
        }
        {
          contentHeight > 200
            ? <a onClick={ e => { setExpanded(!expanded); e.preventDefault(); } }>
                Show { expanded ? "less" : "more" }
              </a>
            : <></>
        }
      </div>
    </div>
  );
}