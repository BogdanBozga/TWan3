interface IFormData {
	firstName: string;
    lastName: string;
    birthday: Date;
    password: string;
    confirmPassword: string;
}
type FormField = keyof IFormData;

class RegisterFormController {
    formData: IFormData;
    static fields: FormField[] = [
        "firstName",
        "lastName",
        "email",
        "birthday",
        "password",
        "confirmPassword"
    ];
}

const controller = new RegisterFormController();

class RegisterFormController {
    formData: IFormData;
    static fields: FormField[] = [
        "firstName",
        "lastName",
        "birthday",
        "password",
        "confirmPassword"
    ];

    constructor() {
      for (const field of RegisterFormController.fields) {
      	this.bindElement(field);
      }
    }

    bindElement(field: FormField) {
    	document.getElementById(field)!.addEventListener("input", (event: any) => {
          this.formData = {...this.formData, [field]: event.target.value};
          console.log(this.formData);
          this.onDataChanged(field);
      });
    }

    onDataChanged = (field: FormField) => {
    	if (field === "firstName") {
          	if (this.formData.firstName.length < 2) {
            	this.setValidation("firstName", "Your name must have at least 2 characters.");
            } else {
            	this.setValidation("firstName", "Looks good!");
            }
        }
    }

    setValidation = (field: FormField, message: string) => {
    	document.getElementById(`${field}-validation`)!.innerHTML = message;
    }
  }
  // /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/g;
