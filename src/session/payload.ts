export type Payload = {
  user: {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    timeZone: string;
  };
  accessToken: string;
};
