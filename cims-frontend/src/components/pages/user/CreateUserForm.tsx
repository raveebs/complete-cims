import { Email } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BadgeIcon from "@mui/icons-material/Badge";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NumbersIcon from "@mui/icons-material/Numbers";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SearchIcon from "@mui/icons-material/Search";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import VillaIcon from "@mui/icons-material/Villa";
import {
  Alert,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { FormEvent, useReducer } from "react";
import ContainerProps from "../../container-props";

export interface CreateUserFormProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (fname: string, lname: string, email: string) => Promise<void>;
}

export interface FormSectionProps extends ContainerProps {}

/** 
 * 
 * type roles =
  | { name: "account_admin" }
  | { name: "contractor_manager" }
  | { name: "payroll_manager" }
  | {
      name: "contractor";
      reviewers: { primaryReviewer: string; secondaryReviewer: string };
      address: { address: string; city: string; state: string; zip: string };
      paymentDetails: {
        payrate: number;
        accountNumber: string;
        name: string;
        bank: string;
        ifscCode: string;
      };
    };

      roles: Array<roles>;


        roles: [
    { name: "account_admin" },
    {
      name: "contractor",
      reviewers: { primaryReviewer: "1", secondaryReviewer: "2" },
      address: { address: "ABC", city: "XYZ", state: "PQR", zip: "123" },
      paymentDetails: {
        payrate: 40.0,
        accountNumber: "123443",
        name: "ABC",
        bank: "fhsjh",
        ifscCode: "123sx",
      },
    },
  ],


    const contractor = state.roles.find((role) => (role.name = "contractor"));

*/

// const initialState: FormState = {
//   name: "",
//   phone: "",
//   email: "",
//   roles: [],
//   error: "",
// };

interface FormState {
  name: string;
  phone: string;
  email: string;
  isAccountAdmin: boolean;
  isContractManager: boolean;
  isPayrollManager: boolean;
  isContractor: boolean;
  error: string;
  primaryReviewer: string;
  secondaryReviewer: string;
  address: string;
  city: string;
  addressState: string;
  zip: string;
  payRate: number;
  accountNumber: string;
  accountHolderName: string;
  bank: string;
  ifscCode: string;
}

type FormAction =
  | { type: "submit" }
  | { type: "error"; message: string }
  | { type: "field"; fieldName: string; payload: any };

const initialState: FormState = {
  name: "Raveendra Tudangil",
  phone: "+91-9920076193",
  email: "raveendra.tudangil@gmail.com",
  isAccountAdmin: false,
  isContractManager: false,
  isPayrollManager: false,
  isContractor: false,
  primaryReviewer: "Anubhav Basu",
  secondaryReviewer: "Rupen Chanda",
  address: "Dahisar",
  city: "Mumbai",
  addressState: "Maharashtra",
  zip: "400068",
  payRate: 38.46,
  accountNumber: "4354657676564",
  accountHolderName: "Raveendra Tudangil",
  bank: "Kotak Mahindra Bank",
  ifscCode: "KTKM53674",
  error: "Primary Reviewer Cannot be empty.",
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "error": {
      return {
        ...state,
        error: action.message,
      };
    }

    default:
      return { ...state };
  }
};

const FormSection = ({ children }: FormSectionProps) => {
  return (
    <Grid container sx={{ py: 2, my: 2 }}>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

const CreateUserForm = ({ open, onCancel, onSubmit }: CreateUserFormProps) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const {
    name,
    phone,
    email,
    isAccountAdmin,
    isContractManager,
    isPayrollManager,
    isContractor,
    primaryReviewer,
    address,
    city,
    addressState,
    zip,
    payRate,
    accountNumber,
    accountHolderName,
    bank,
    ifscCode,
    error,
  } = state;

  const isEmpty = (s: string) => {
    return s.trim().length === 0;
  };
  const saveUser = async (e: FormEvent) => {
    e.preventDefault();
    if (isEmpty(name)) {
      dispatch({ type: "error", message: "Name cannot be empty" });
    } else if (isEmpty(phone)) {
      dispatch({ type: "error", message: "Phone cannot be empty" });
    }

    //
    else {
      await onSubmit(name, name, email);
    }
  };

  interface FormFieldProps {
    label: string;
    field: string;
    icon: React.ReactNode;
    value: string;
  }

  interface FormCheckBoxProps {
    label: string;
    field: string;
    value: boolean;
  }

  const FormField = ({ label, field, icon, value }: FormFieldProps) => {
    return (
      <TextField
        label={label}
        value={value}
        onChange={(e) => {
          dispatch({
            type: "field",
            fieldName: field,
            payload: `${e.currentTarget.value}`,
          });
        }}
        sx={{ padding: "10px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
      />
    );
  };

  const FormCheckBox = ({ label, field, value }: FormCheckBoxProps) => {
    return (
      <FormControlLabel
        sx={{ padding: "10px" }}
        value="end"
        control={
          <Checkbox
            checked={value}
            onChange={(e) => {
              dispatch({
                type: "field",
                fieldName: field,
                payload: e.target.checked,
              });
            }}
          />
        }
        label={label}
        labelPlacement="end"
      />
    );
  };

  return (
    <form noValidate autoComplete="off" onSubmit={saveUser}>
      <Dialog open={open} fullWidth={true} maxWidth="lg">
        <DialogTitle>Create User</DialogTitle>
        <DialogContent>
          <FormSection>
            <FormField
              label="Name"
              icon={<PersonIcon />}
              value={name}
              field="name"
            />
            <FormField
              label="Phone"
              icon={<PhoneIcon />}
              value={phone}
              field="phone"
            />

            <FormField
              label="Email"
              icon={<Email />}
              value={email}
              field="email"
            />
          </FormSection>

          <FormSection>
            <FormCheckBox
              label="Account Admin"
              field="isAccountAdmin"
              value={isAccountAdmin}
            />

            <FormCheckBox
              label="Contractor Manager"
              field="isContractManager"
              value={isContractManager}
            />

            <FormCheckBox
              label="Payroll Manager"
              field="isPayrollManager"
              value={isPayrollManager}
            />

            <FormCheckBox
              label="Contractor"
              field="isContractor"
              value={isContractor}
            />
          </FormSection>

          {isContractor && (
            <FormSection>
              <FormControl fullWidth sx={{ py: 1, my: 1 }}>
                <InputLabel>Primary Reviewer</InputLabel>
                <Select label="Primary Reviewer">
                  <MenuItem value={10}>{primaryReviewer}</MenuItem>
                  <MenuItem value={20}>Bryan Munro</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ py: 1, my: 1 }}>
                <InputLabel>Secondary Reviewer</InputLabel>
                <Select label="Secondary Reviewer">
                  <MenuItem value={10}>
                    {"ontractor?.reviewers?.secondaryReviewer"}
                  </MenuItem>
                </Select>
              </FormControl>
            </FormSection>
          )}

          {isContractor && (
            <FormSection>
              <FormField
                label="Address"
                icon={<LocationOnIcon />}
                value={address}
                field="address"
              />

              <FormField
                label="City"
                icon={<LocationCityIcon />}
                value={city}
                field="city"
              />

              <FormField
                label="State"
                icon={<VillaIcon />}
                value={addressState}
                field="addressState"
              />

              <FormField
                label="Zip"
                icon={<TravelExploreIcon />}
                value={zip}
                field="zip"
              />
            </FormSection>
          )}

          {isContractor && (
            <FormSection>
              <FormField
                label="Pay Rate"
                icon={<PriceCheckIcon />}
                value={`${payRate}`}
                field="payRate"
              />

              <FormField
                label="Account Number"
                icon={<NumbersIcon />}
                value={accountNumber}
                field="accountNumber"
              />

              <FormField
                label="Account Holder's Name"
                icon={<BadgeIcon />}
                value={accountHolderName}
                field="accountHolderName"
              />

              <FormField
                label="Bank"
                icon={<AccountBalanceIcon />}
                value={bank}
                field="bank"
              />

              <FormField
                label="IFSC Code"
                icon={<SearchIcon />}
                value={ifscCode}
                field="ifscCode"
              />
            </FormSection>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" onClick={saveUser}>
            Submit
          </Button>
        </DialogActions>
        {error && (
          <Snackbar
            open={true}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert severity="error">{error}</Alert>
          </Snackbar>
        )}
      </Dialog>
    </form>
  );
};

export default CreateUserForm;
