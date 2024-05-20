export const getInitials = name => {
  const words = name.split(/[\s-]+/);
  let initials = '';
  for (let i = 0; i < words.length; i++) {
    initials += words[i].charAt(0).toUpperCase();
  }
  return initials;
};
