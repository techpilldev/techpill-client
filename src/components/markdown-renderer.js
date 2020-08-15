import React, { memo, useMemo } from 'react';
import md from '../constants/mdRenderer.js';

const PreviewWysiwyg = ({ data }) => {
  const html = useMemo(() => md.render(data || ''), [data]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default memo(PreviewWysiwyg);