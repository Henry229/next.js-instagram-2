'user client';
import { DetailUser } from '@/model/user';
import useSWR from 'swr';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  // console.log(data?.following);
  const users = data?.following;

  return <div>FollowingBar</div>;
}
