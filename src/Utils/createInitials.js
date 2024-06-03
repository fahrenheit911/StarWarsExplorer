export const createInitials = name => {
  if (!name.includes(' ') && !name.includes('-')) {
    return name.slice(0, 2).toUpperCase();
  }
  const words = name.split(/[\s-]+/);
  let initials = '';
  for (let i = 0; i < words.length; i++) {
    initials += words[i].charAt(0).toUpperCase();
  }
  return initials;
};
