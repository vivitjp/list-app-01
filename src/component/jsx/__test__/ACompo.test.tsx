import React from 'react'
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import ACompo from '../ACompo'

describe("App components", () => {
  test("render App components", () => {
    const { getByLabelText, queryAllByTestId } = render(<ACompo />);

    //screen.debug();
    //expect(getByText(/Please sign in/)).toBeInTheDocument();
    //expect(getByText(/Sign in/)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/count/));

    //screen.debug();
    //    expect(getByText(/Down/)).toBeInTheDocument();
    //    expect(getByText(/BaseUp/)).toBeInTheDocument();

    //fireEvent.click(getByText(/Sign out/));

    //screen.debug();
    //expect(getByText(/Please sign in/)).toBeInTheDocument();
  });
});