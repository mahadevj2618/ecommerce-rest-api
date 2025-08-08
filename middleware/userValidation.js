function validateUser(req, res, next) {
  const { username, email,password, phone } = req.body;

  if (!username || username.length < 3) {
    return res.status(400).json({ error: 'Username must be at least 3 characters.' });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  if (!password ) {
    return res.status(400).json({ error: 'password requires' });
  }
  if(!phone){
    return res.status(400).json({error:'phone require'})
  }

  // If all checks pass
  next();
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// function isValidPassword(password) {
//   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//   return regex.test(password);
// }


module.exports = validateUser;
