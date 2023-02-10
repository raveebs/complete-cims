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

type Role = PlatformRole | AdminRole | ReviewerRole | ContractorRole;

export default Role;
