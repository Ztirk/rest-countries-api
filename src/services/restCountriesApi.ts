import axios from "axios";
import React from "react";

export const getAllFlags = async (
  setFlags: React.Dispatch<React.SetStateAction<unknown>>
) => {
  // try {
  //   const res = await axios.get(`https://restcountries.com/v3.1/all`);
  //   setFlags(res.data);
  // } catch (err) {
  //   console.log(err);
  // }
};

export const getFlagsByRegion = async (
  setFlags: React.Dispatch<React.SetStateAction<unknown>>,
  region: string
) => {
  // try {
  //   const res = await axios.get(
  //     `https://restcountries.com/v3.1/region/${region}`
  //   );
  //   setFlags(res.data);
  // } catch (err) {
  //   console.log(err);
  // }
};

export const getFlagsByName = async (
  setFlags: React.Dispatch<React.SetStateAction<unknown>>,
  country: string
) => {
  // try {
  //   const res = await axios.get(
  //     `https://restcountries.com/v3.1/name/${country}`
  //   );
  //   setFlags(res.data);
  // } catch (err) {
  //   setFlags(err);
  // }
};

export const getBorders = async (
  setBorders: React.Dispatch<React.SetStateAction<string[] | undefined>>,
  borderCodes: string[]
) => {
  // try {
  //   const bordersFullName = [];
  //   for (const code of borderCodes) {
  //     const res = await axios.get(
  //       `https://restcountries.com/v3.1/alpha/${code}`
  //     );
  //     bordersFullName.push(res.data[0].name.common);
  //     console.log(code);
  //   }
  //   setBorders(bordersFullName);
  // } catch (err) {
  //   console.log(err);
  // }
};
