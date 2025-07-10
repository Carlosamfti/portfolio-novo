import { Link } from 'react-router-dom'; // Importa o Link para navegação

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 text-center">
      <h1 className="text-6xl font-bold text-slate-800">404</h1>
      <p className="mt-4 text-xl text-slate-600">Página Não Encontrada</p>
      <p className="mt-2 text-md text-slate-500">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFound;