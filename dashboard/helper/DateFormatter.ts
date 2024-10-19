type DateProps = string;
type DurationProps = string;

export const dateFormatter = (dateString: DateProps) => {
  const dateObject = new Date(Date.parse(dateString));
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(dateObject);
};

export const durationFormatter = (dateString : DateProps) => {
  const dateObject = new Date(Date.parse(dateString));
  const options : Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(dateObject);
}

export const calculateDates = (key: DurationProps) => {
  const today = new Date();
  let startDate, endDate;

  switch (key) {
    case "1":
      startDate = today;
      endDate = today;
      break;
    case "2":
      startDate = new Date(today.setDate(today.getDate() - 1));
      endDate = startDate;
      break;
    case "3":
      startDate = new Date(today.setDate(today.getDate() - 7));
      endDate = new Date();
      break;
    case "4":
      startDate = new Date(today.setDate(today.getDate() - 30));
      endDate = new Date();
      break;
    case "5":
      startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      endDate = new Date();
      break;
    case "6":
      startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      endDate = new Date(today.getFullYear(), today.getMonth(), 0);
      break;
    case "8":
      // Custom logic for custom dates
      startDate = new Date(); // Placeholder
      endDate = new Date(); // Placeholder
      break;
    default:
      startDate = new Date();
      endDate = new Date();
  }

  return { startDate, endDate };
};
