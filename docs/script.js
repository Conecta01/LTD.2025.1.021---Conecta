function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const senha = document.getElementById('login-senha').value;
  const storedUser = localStorage.getItem(email);
  if (storedUser && JSON.parse(storedUser).senha === senha) {
    toggleSections(false);
    document.getElementById('dashboard').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    alert('Credenciais inválidas!');
  }
}
function handleCadastro(event) {
  event.preventDefault();
  const nome = document.querySelector('#cadastro input[name="nome"]').value;
  const email = document.querySelector('#cadastro input[name="email"]').value;
  const senha = document.querySelector('#cadastro input[name="senha"]').value;
  if (!nome || !email || !senha) {
    alert('Preencha todos os campos!');
    return;
  }
  const existingUser = localStorage.getItem(email);
  if (existingUser) {
    alert('Este e-mail já está cadastrado!');
    return;
  }
  const newUser = { nome, email, senha };
  localStorage.setItem(email, JSON.stringify(newUser));
  alert('Cadastro realizado com sucesso!');
}
function logout() {
  document.getElementById('login').style.display = 'block';
  document.getElementById('dashboard').style.display = 'none';
}
function toggleSections(isLoggedIn) {
  document.getElementById('login').style.display = isLoggedIn ? 'none' : 'block';
  document.getElementById('dashboard').style.display = isLoggedIn ? 'block' : 'none';
}
