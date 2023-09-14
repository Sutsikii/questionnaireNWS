const Footer: React.FC = () => {
    return (
      <footer className="bg-[#e94a34] text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} <a href="https://normandiewebschool.fr" className="underline" target="_blank"> Normandie Web School.</a>Tous droits réservés.  Quizz App by <a href="https://portfolio.sutcorp-industry.com" className="underline" target="_blank">Sutsiki</a></p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  