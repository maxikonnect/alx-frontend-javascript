import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) { // ES6 shorthand for defining a method
      return `$${income}`;
    },
    getIncomeInEuros(income) { // ES6 shorthand for defining a method
      return `${income} euros`;
    },
  };

  return fullBudget;
}
