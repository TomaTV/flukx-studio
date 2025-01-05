const CV = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center gap-8">
      {/* Affichage du PDF */}
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <iframe src="CV.pdf" width="100%" height="1000px" title="Mon CV" />
      </div>

      {/* Bouton de téléchargement */}
      <a
        href="CV.pdf"
        download="CV_Thomas.pdf"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Télécharger le CV
      </a>
    </div>
  );
};

export default CV;
