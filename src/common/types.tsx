export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
  }
  
  export interface AppData {
    activeUser: User | undefined;
  }