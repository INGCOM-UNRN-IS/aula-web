import { loggedUser } from '../logged-user';

const UserInfo = async () => {
  const session = await loggedUser();
  if (!session) return null;
  return (
    <p className=" text-2xl font-bold">Bienvenido, {session?.user?.name}!</p>
  );
};

export default UserInfo;
