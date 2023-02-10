interface PlatformRole {
  type: "platform-admin";
}

interface AdminRole {
  type: "account-admin";
  accountId: string;
}

interface ReviewerRole {
  type: "reviewer";
  accountId: string;
}

interface ContractorRole {
  type: "contractor";
  primaryReviewerId: string;
  secondaryReviewerId: string;
  accountId: string;
}

interface PayrollManager {
  type: "payroll-manager";
  accountId: string;
}

interface ContractorManager {
  type: "contractor-manager";
  accountId: string;
}

type Roles =
  | PlatformRole
  | AdminRole
  | ReviewerRole
  | ContractorRole
  | PayrollManager
  | ContractorManager;

export default class User {
  id: string;
  fname: string;
  lname: string;
  email: string;
  avatar: string;
  status: string;
  createdAt: Date;
  roles: Array<Roles>;
}
