import '../styles/default';

import * as React from 'react';

import { CommentBlock } from './CommentBlock';

export default { title: "Comment Block" };

export const others = () => <CommentBlock self={false} />
export const self = () => <CommentBlock self={true} />