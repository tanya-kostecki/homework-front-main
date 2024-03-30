import {CurrentUser} from './CurrentUser';
import { UserType, UsersObjectType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers: (city: string) => void // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers('Los Angeles')}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			 {props.users.myFriends.map((user: UserType) => (
			//    <ВЫЗЫВАЕМ КОМПОНЕНТУ CurrentUser />
				<CurrentUser user={user} key={user.id}/>
				
			 ))}
			</ul>
		</div>
	);
};
