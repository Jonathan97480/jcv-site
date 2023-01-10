export const  sliceText = (title: string, size: number) => {
    return title.length > size ? title.slice(0, size) + "..." : title;
  };
