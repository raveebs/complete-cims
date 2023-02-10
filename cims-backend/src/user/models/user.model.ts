import Roles from '@bluescape1/cims-core';

export class User {
  id: string;

  fname: string;

  lname: string;

  email: string;

  avatar: string;

  status: string;

  createdAt: Date;

  roles?: [Roles];
  // Todo : Created By
}
