import React, { useState } from "react";
import MainWrapper from "../components/MainWrapper";
import TitleWrapper from "../components/TitleWrapper";
import { Pen } from "lucide-react";

const SignUpView: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Adicione lógica de cadastro aqui
    alert(`Cadastro: ${name} - ${email}`);
  };

  return (
    <MainWrapper>
      <TitleWrapper>
        <Pen className="mr-3 text-red-600" size={32} />
        <h1>Criar Conta</h1>
      </TitleWrapper>

      <form className="md:m-8" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome:
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email:
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="email"
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
          Cadastrar
        </button>
      </form>
    </MainWrapper>
  );
};

export default SignUpView;
