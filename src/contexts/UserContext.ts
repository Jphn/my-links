import { createContext } from 'react';

interface IUserInfo {
	name?: string;
	bio?: string;
	avatar_url?: string;
}

export default createContext<IUserInfo>({});
