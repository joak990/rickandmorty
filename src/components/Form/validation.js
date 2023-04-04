//regex validations
//

//function errors of inputs
const validation = (userData, errors, setErrors) => {
  const passwordRegex = /^(?=.*\d).{6,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userData.username)
    setErrors (oldErrors =>({ ...oldErrors, username: "este campo no puede estar vacio" }));
   if (userData.username.length > 35) {
    setErrors(oldErrors =>({ ...oldErrors, username: "No puede superar los 35 caracteres" }));
  }  if (!emailRegex.test(userData.username))
    setErrors(oldErrors =>({ ...oldErrors, username: "Debe ser un correo electrónico valido" }));
  else {
    setErrors(oldErrors =>({ ...oldErrors, username: "" })); 
  }
   if(userData.password.length <6){
    setErrors(oldErrors =>({ ...oldErrors, password: "longitud de password incorrecta" }))
  

if (!userData.password) {
  setErrors(oldErrors =>({ ...oldErrors, password: "este campo no puede estar vacio" }))
}
if (/\d/.test(userData.password)){
  setErrors(oldErrors =>({ ...oldErrors, password: "la contraseña debe tener almenos 1 numero" }))
}

}
else {
  setErrors(oldErrors =>({ ...oldErrors, password: "" }));
}

}
//export function
export default validation;
