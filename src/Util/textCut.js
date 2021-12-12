export const textCut = (text="", len=0) => {
  if (text.length > len) {
    return text.substr(0, len) + "...";
  } else return text;
}