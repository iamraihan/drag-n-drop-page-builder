"use client";

export const saveItemToLocalStorage = (itemName, data) => {
  localStorage.setItem(itemName, JSON.stringify(data));
};
export const parseItemFromLocalStorage = (itemName) => {
  const data = JSON.parse(localStorage.getItem(itemName));
  return data;
};
