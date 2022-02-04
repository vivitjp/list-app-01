import React from 'react';
import axios, { AxiosResponse } from 'axios';

const URL = 'http://hn.algolia.com/api/v1/search';

export interface IStory { objectID: string, url?: string, title: string }

//Axios の戻り値を拡張
export interface IGetProps extends AxiosResponse {
  hits: IStory[]
}

function AxiosGet() {
  const [stories, setStories] = React.useState<IStory[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  async function handleFetch(event: React.MouseEvent<HTMLButtonElement>) {
    let result;
    try {
      result = await axios.get<IGetProps>(`${URL}?query=React`);
      setStories(result.data.hits);
    } catch (e: any) { setError(e.toString()) }
  }

  return (
    <div>
      <button type="button" onClick={handleFetch}>Fetch Stories</button>

      {error && <span>Something went wrong ...</span>}
      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosGet;
