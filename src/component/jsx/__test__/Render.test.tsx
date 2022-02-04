/* eslint-disable testing-library/no-debugging-utils */
//import React, { useState } from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test.skip('delete characters within the selectedRange', () => {
  const handle = jest.fn();
  render(
    <input type="text" defaultValue="This is a bad example" onChange={handle} />
  )

  const input: HTMLInputElement = screen.getByRole('textbox')
  input.setSelectionRange(10, 13)

  userEvent.type(screen.getByRole('textbox'), '{backspace}GOOD')
  expect(input).toHaveValue('This is a GOOD example');

  screen.debug(input);  //debug()では非制御コンポーネントの表示に問題あり
})