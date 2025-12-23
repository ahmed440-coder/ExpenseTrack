import moment from "moment";
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}
export const getInitials = (name) => {
    if (!name) return "";
    const words = name.split(" ");
    let initials = "";
    for(let i = 0; i < Math.min(words.length, 2); i++){
        initials+=words[i][0];
    }
    return initials.toUpperCase();
}
export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";

  const integerPart = Math.floor(Number(num)).toString(); 
  const formattedInteger = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  return formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
    // Step 1: Create an empty object to store totals for each month
    const monthlyTotals = {};

    // Step 2: Loop through each expense transaction
    for (const item of data) {
        const month = moment(item?.date).format('MMM YYYY'); // e.g. "Dec 2025"
        const amount = Number(item?.amount) || 0;

        // If this month doesn't exist yet, create it
        if (!monthlyTotals[month]) {
            monthlyTotals[month] = { category: month, amount: 0 };
        }

        // Add the amount to this month's total
        monthlyTotals[month].amount += amount;
    }

    // Step 3: Convert the object to an array for the chart
    const chartData = Object.values(monthlyTotals);

    return chartData;
}
export const prepareIncomeBarChartData = (data = []) => {
    // Step 1: Create an empty object to store totals for each month
    const monthlyTotals = {};

    // Step 2: Loop through each income transaction
    for (const item of data) {
        const month = moment(item?.date).format('MMM YYYY'); // e.g. "Dec 2025"
        const amount = Number(item?.amount) || 0;

        // If this month doesn't exist yet, create it
        if (!monthlyTotals[month]) {
            monthlyTotals[month] = { category: month, amount: 0 };
        }

        // Add the amount to this month's total
        monthlyTotals[month].amount += amount;
    }

    // Step 3: Convert the object to an array for the chart
    const chartData = Object.values(monthlyTotals);

    return chartData;
}
export const prepareExpenseLineChartData = (data = []) => {
  const dailyTotals = {};

  //aggregation by the real date (YYYY-MM-DD)
  for (const item of data) {
    const dayKey = moment(item.date).format('YYYY-MM-DD');
    const amount = Number(item.amount) || 0;

    if (!dailyTotals[dayKey]) {
      dailyTotals[dayKey] = 0;
    }

    dailyTotals[dayKey] += amount;
  }

  //converting to array and sorting by the date (REAL SORT)
  return Object.entries(dailyTotals)
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .map(([date, amount]) => ({
      month: moment(date).format('Do MMM YYYY'), //adding the year so it won't look confusing
      amount,
    }));
};
export const prepareLast30DaysExpenseByCategory = (data = []) => {
  const categoryTotals = {};

  for (const item of data) {
    const category = item?.category || "Other";
    const amount = Number(item?.amount) || 0;

    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    categoryTotals[category] += amount;
  }

  return Object.entries(categoryTotals)
    .map(([category, amount]) => ({
      category,
      amount,
    }))
    .sort((a, b) => b.amount - a.amount);
};
