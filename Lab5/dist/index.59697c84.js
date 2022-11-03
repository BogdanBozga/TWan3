class RegisterFormController {
    static fields = [
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
    static fields = [
        "firstName",
        "lastName",
        "birthday",
        "password",
        "confirmPassword"
    ];
    constructor(){
        for (const field of RegisterFormController.fields)this.bindElement(field);
    }
    bindElement(field) {
        document.getElementById(field).addEventListener("input", (event)=>{
            this.formData = {
                ...this.formData,
                [field]: event.target.value
            };
            console.log(this.formData);
            this.onDataChanged(field);
        });
    }
    onDataChanged = (field)=>{
        if (field === "firstName") {
            if (this.formData.firstName.length < 2) this.setValidation("firstName", "Your name must have at least 2 characters.");
            else this.setValidation("firstName", "Looks good!");
        }
    };
    setValidation = (field, message)=>{
        document.getElementById(`${field}-validation`).innerHTML = message;
    };
} // /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/g;

//# sourceMappingURL=index.59697c84.js.map
