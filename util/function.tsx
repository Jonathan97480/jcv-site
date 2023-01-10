export const sliceText = (title: string, size: number) => {
  return title.length > size ? title.slice(0, size) + "..." : title;
};


export function validateEmail(email: string): string {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    return "Veuillez entrer un email valide";
  }
  return "";
}

export function validatePhone(phone: string): string {
  const re = /^\d{10}$/;
  if (!re.test(phone)) {
    return "Veuillez entrer un numéro de téléphone valide";
  }
  return "";
}

export function validateName(name: string): string {
  const re = /^[a-zA-Z ]{2,30}$/;
  if (!re.test(name)) {
    return "Veuillez entrer un nom valide";
  }
  return "";
}

export function validateMessage(message: string): string {
  const re = /^[a-zA-Z ]{2,30}$/;
  if (!re.test(message)) {
    return "Veuillez entrer un message valide";

  }
  return "";
}