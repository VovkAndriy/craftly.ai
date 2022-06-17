export const formatTag = (tag) =>
  tag.slice(0, 1).toUpperCase() + tag.slice(1).split('-').join(' ');
