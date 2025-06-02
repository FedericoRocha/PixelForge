import { motion } from 'framer-motion';

const legalContent = {
  privacidad: {
    title: 'Política de Privacidad',
    lastUpdated: '2 de junio de 2025',
    sections: [
      {
        title: 'Recopilación de Información',
        content: 'Recopilamos información que nos proporcionas directamente cuando te registras, realizas una compra o te pones en contacto con nosotros. Esto puede incluir tu nombre, dirección de correo electrónico, información de pago y otros datos que decidas compartir.'
      },
      {
        title: 'Uso de la Información',
        content: 'Utilizamos tu información para proporcionar, mantener y mejorar nuestros servicios, procesar transacciones, comunicarnos contigo sobre productos, servicios y ofertas, y para personalizar tu experiencia.'
      },
      {
        title: 'Divulgación a Terceros',
        content: 'No vendemos ni compartimos tu información personal con terceros, excepto según lo descrito en esta política. Podemos compartir información con proveedores de servicios que nos ayudan a operar nuestro negocio, siempre que estos terceros acuerden mantener esta información confidencial.'
      },
      {
        title: 'Seguridad',
        content: 'Implementamos medidas de seguridad para proteger tu información personal. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.'
      },
      {
        title: 'Tus Derechos',
        content: 'Puedes acceder, corregir o eliminar tu información personal en cualquier momento. También puedes oponerte al procesamiento de tus datos, solicitar la portabilidad de los mismos o retirar tu consentimiento.'
      }
    ]
  },
  terminos: {
    title: 'Términos de Servicio',
    lastUpdated: '2 de junio de 2025',
    sections: [
      {
        title: 'Aceptación de los Términos',
        content: 'Al acceder o utilizar nuestros servicios, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al servicio.'
      },
      {
        title: 'Uso del Servicio',
        content: 'Te otorgamos una licencia limitada, no exclusiva, intransferible y no sublicenciable para acceder y utilizar nuestros servicios de acuerdo con estos Términos. No debes utilizar nuestros servicios para fines ilegales o no autorizados.'
      },
      {
        title: 'Propiedad Intelectual',
        content: 'El servicio y su contenido, características y funcionalidad son y seguirán siendo propiedad exclusiva de PixelForge y sus licenciantes. Nuestras marcas comerciales no pueden utilizarse en relación con ningún producto o servicio sin el permiso previo por escrito.'
      },
      {
        title: 'Limitación de Responsabilidad',
        content: 'En la máxima medida permitida por la ley, en ningún caso PixelForge será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, o la pérdida de beneficios o ingresos.'
      }
    ]
  },
  aviso: {
    title: 'Aviso Legal',
    lastUpdated: '2 de junio de 2025',
    sections: [
      {
        title: 'Información Legal',
        content: 'Este sitio web es propiedad y está operado por PixelForge. Si tienes alguna pregunta sobre este aviso legal, puedes contactarnos en hola@pixelforge.dev.'
      },
      {
        title: 'Limitación de Responsabilidad',
        content: 'La información proporcionada en este sitio web es solo para fines informativos generales. No ofrecemos asesoramiento profesional ni garantías de ningún tipo con respecto a la exactitud, integridad o idoneidad de la información.'
      },
      {
        title: 'Enlaces a Terceros',
        content: 'Nuestro servicio puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por PixelForge. No tenemos control sobre, y no asumimos responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios o servicios de terceros.'
      },
      {
        title: 'Ley Aplicable',
        content: 'Estos Términos se regirán e interpretarán de acuerdo con las leyes de Argentina, sin tener en cuenta sus disposiciones sobre conflictos de leyes.'
      }
    ]
  }
};

const LegalSection = ({ sectionId }: { sectionId: 'privacidad' | 'terminos' | 'aviso' }) => {
  const content = legalContent[sectionId];
  
  return (
    <section id={sectionId} className="py-20 px-4 bg-[#171B22] text-gray-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-[0_2px_24px_#8b5cf6bb]">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] mb-6"></div>
          <p className="text-gray-400 text-sm mb-8">
            Última actualización: {content.lastUpdated}
          </p>
          
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="bg-[#181C22] p-6 rounded-xl border border-[#23272f] shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#8b5cf6] mr-3"></span>
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#23272f] text-center">
            <p className="text-gray-400 mb-4">¿Tienes preguntas sobre nuestros términos legales?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Contáctanos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalSection;
