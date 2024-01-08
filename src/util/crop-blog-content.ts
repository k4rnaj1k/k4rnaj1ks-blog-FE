type CroppedContent = {
  isCropped: boolean;
  cropped: string;
};

export const cropContent = (blogContent: string): CroppedContent => {
  const hasMoreThanOneParagraph = blogContent.indexOf("\n\n") !== -1;
  let cropped = blogContent;
  
  if (hasMoreThanOneParagraph) {
    cropped = blogContent.slice(0, blogContent.indexOf("\n\n"));
  }

  return { isCropped: cropped.length !== blogContent.length, cropped };
};
