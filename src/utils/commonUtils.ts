export const timestampToDate = (iDate: number): string => {
    const date = new Date(iDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDate = `${year} - ${month} - ${day} ${hours}:${minutes}`;
    return formattedDate;
};
