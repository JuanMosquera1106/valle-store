import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image
            src="https://github.com/JuanMosquera1106/valle-store/blob/imagenes/ValleDeGigantes_Color.png?raw=true"
            alt="Valle de Gigantes Logo"
            width={50}
            height={50}
          />
          <span className="text-green-700 font-bold text-lg">
            Valle de GIGANTES
          </span>
        </div>

        {/* Contact Information */}
        <div className="text-gray-600 text-sm text-center md:text-left space-y-1 mb-4 md:mb-0">
          <p>Número de contacto: 0996234563</p>
          <p>Email: vallegigantes@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-start">
          <a
            href="https://www.instagram.com/valle.de.gigantes.ec/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-700 flex items-center space-x-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram Icon"
              width={20}
              height={20}
              className="inline"
            />
            <span>@vallegigantes_ec</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
