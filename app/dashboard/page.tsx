import { Metadata } from 'next';
import SignoutButton from '../components/dashboard/signout-button';
import UserInfo from '../components/dashboard/user-info';

export const metadata: Metadata = {
  title: 'Admin',
};

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-center">
      <UserInfo />
      <SignoutButton />
    </main>
  );
}
