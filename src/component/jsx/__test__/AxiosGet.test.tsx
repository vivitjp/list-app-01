import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import AxiosGet, { IStory } from '../AxiosGet';

jest.mock('axios');

describe.skip('AxiosGet', () => {

  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    (axios.get as any).mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<AxiosGet />);
    userEvent.click(screen.getByRole('button'));

    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  test('fetches stories from an API and fails', async () => {
    (axios.get as any).mockImplementationOnce(() =>
      Promise.reject(new Error())
    );

    render(<AxiosGet />);
    userEvent.click(screen.getByRole('button'));

    const message = await screen.findByText(/Something went wrong/);
    expect(message).toBeInTheDocument();
  });

  test('fetches Act', async () => {
    const stories: IStory[] = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    interface IPromise {
      data: { hits: IStory[] }
    }

    const promise = Promise.resolve({ data: { hits: stories } });

    (axios.get as any).mockImplementationOnce(() => promise);

    render(<AxiosGet />);

    await userEvent.click(screen.getByRole('button')); //await は無意味

    // await (act as any)(
    //   (): Promise<IPromise> => promise
    // );

    // expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

});
