const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password || !cf_password) {
    return "Vui long nhap lai";
  }
  if (!validateEmail(email)) return "nhap sai Email";
  if (password.length < 6) return "Nhap lai mat khau";
  if (password !== cf_password) return "Mat khau khong dung";
};
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default valid;
