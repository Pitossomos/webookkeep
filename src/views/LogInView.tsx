import { UserCheck } from "lucide-react";
import React, { useState } from "react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";

const LogInView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Adicione lógica de autenticação aqui
    alert(`Login: ${email}`);
  };

  return (
    <MainWrapper>
      <TitleWrapper>
        <UserCheck className="mr-3 text-gold-600" size={32} />
        <h1>Entrar</h1>
      </TitleWrapper>

      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email:
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Senha:
          <input
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </MainWrapper>
  );
};

export default LogInView;
