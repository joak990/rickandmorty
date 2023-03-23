//regex validations
//

//function errors of inputs
const validation = (userData, errors, setErrors) => {
  const passwordRegex = /^(?=.*\d).{6,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userData.username)
    setErrors({ ...errors, username: "este campo no puede estar vacio" });
  else if (userData.username.length > 35) {
    setErrors({ ...errors, username: "No puede superar los 35 caracteres" });
  } else if (!emailRegex.test(userData.username))
    setErrors({ ...errors, username: "Debe ser un correo electrónico valido" });
  else {
    setErrors({ ...errors, username: "" });
  }
  if (userData.password.length < 6 ) {
    setErrors({ ...errors, password: "Longitud de Password invalida" });
  } else if (!passwordRegex.test(userData.password))
    setErrors({
      ...errors,
      password: "La contraseña debe contener al menos un número",
    });
  else
    setErrors({
      ...errors,
      password: "",
    });
};

//export function
export default validation;
