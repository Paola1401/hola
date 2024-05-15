import React from 'react';

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="register_content">
        {/* Formulario de Registro */}
        <form>
          <input
            placeholder="First Name"
            name="firstname"
            required
          />
          <input
            placeholder="Last Name"
            name="lastname"
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            required
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmpassword"
            type="password"
            required
          />
          <label>
            Profile Image:
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              required
            />
          </label>
        </form>

        {/* Enlace para redirigir al inicio de sesión */}
        <a href="/login">Already have an account? Log In Here</a>

        {/* Título de la página */}
        <h1>Register Page</h1>
      </div>
    </div>
  );
};

export default RegisterPage;