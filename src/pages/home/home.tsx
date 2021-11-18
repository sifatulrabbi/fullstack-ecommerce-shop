import { ReactElement } from 'react';
import { Navbar } from '../../components';

export default function Home(): ReactElement {
  return (
    <>
      <Navbar />
      <h1>This is Home page</h1>
    </>
  );
}
