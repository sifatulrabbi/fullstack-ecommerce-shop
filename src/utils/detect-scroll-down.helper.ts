let pos: number = 0;

export const detectScrollDown = (currentPos: number): boolean => {
  if (currentPos > 100 && currentPos > pos) {
    pos = currentPos;
    return true;
  }
  pos = currentPos;
  return false;
};
