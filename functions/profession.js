const professions = [
  {
    value: 1,
    label: "Actividad física y del deporte"
  },
  {
    value: 2,
    label: "Administración y empresa"
  },
  {
    value: 3,
    label: "Antropología social y cultural y Estudios y gestión de la cultura"
  },
  {
    value: 4,
    label: "Arqueología"
  },
  {
    value: 5,
    label: "Arquitectura técnica"
  },
  {
    value: 6,
    label: "Arquitectura y Urbanismo y paisajismo"
  },
  {
    value: 7,
    label: "Audiovisual, imagen y multimedia"
  },
  {
    value: 8,
    label: "Bellas artes"
  },
  {
    value: 9,
    label: "Biología"
  },
  {
    value: 10,
    label: "Biomedicina"
  },
  {
    value: 11,
    label: "Bioquímica"
  },
  {
    value: 12,
    label: "Biotecnología"
  },
  {
    value: 13,
    label: "Ciencia y tecnología de los alimentos e Ingeniería alimentaria"
  },
  {
    value: 14,
    label: "Ciencias ambientales"
  },
  {
    value: 15,
    label: "Ciencias del mar"
  },
  {
    value: 16,
    label: "Ciencias del trabajo"
  },
  {
    value: 17,
    label: "Comercio"
  },
  {
    value: 18,
    label: "Comunicación"
  },
  {
    value: 19,
    label: "Conservación y restauración"
  },
  {
    value: 20,
    label: "Criminología"
  },
  {
    value: 21,
    label: "Derecho"
  },
  {
    value: 22,
    label: "Desarrollo de software y de aplicaciones e Ingeniería multimedia"
  },
  {
    value: 23,
    label: "Diseño"
  },
  {
    value: 24,
    label: "Economía"
  },
  {
    value: 25,
    label: "Educación infantil"
  },
  {
    value: 26,
    label: "Educación primaria"
  },
  {
    value: 27,
    label: "Educación social"
  },
  {
    value: 28,
    label: "Enfermería"
  },
  {
    value: 29,
    label: "Enología"
  },
  {
    value: 30,
    label: "Estadística"
  },
  {
    value: 31,
    label: "Farmacia"
  },
  {
    value: 32,
    label: "Filosofía"
  },
  {
    value: 33,
    label: "Financiera y actuarial"
  },
  {
    value: 34,
    label: "Finanzas y contabilidad"
  },
  {
    value: 35,
    label: "Física"
  },
  {
    value: 36,
    label: "Fisioterapia"
  },
  {
    value: 37,
    label: "Geografía"
  },
  {
    value: 38,
    label: "Geografía y ordenación del territorio"
  },
  {
    value: 39,
    label: "Geología"
  },
  {
    value: 40,
    label: "Gestión y administración pública"
  },
  {
    value: 41,
    label: "Historia"
  },
  {
    value: 42,
    label: "Historia del arte"
  },
  {
    value: 43,
    label: "Humanidades"
  },
  {
    value: 44,
    label: "Información y documentación"
  },
  {
    value: 45,
    label: "Informática"
  },
  {
    value: 46,
    label: "Ingeniería aeronáutica"
  },
  {
    value: 47,
    label: "Ingeniería agraria y agroalimentaria"
  },
  {
    value: 48,
    label: "Ingeniería agrícola, agropecuaria y medio rural"
  },
  {
    value: 49,
    label: "Ingeniería biomédica y de la salud"
  },
  {
    value: 50,
    label: "Ingeniería civil"
  },
  {
    value: 51,
    label: "Ingeniería de computadores"
  },
  {
    value: 52,
    label: "Ingeniería de la energía"
  },
  {
    value: 53,
    label: "Ingeniería de materiales e Ingeniería textil"
  },
  {
    value: 54,
    label: "Ingeniería de minas y energía"
  },
  {
    value: 55,
    label: "Ingeniería de organización industrial y Nanotecnología"
  },
  {
    value: 56,
    label: "Ingeniería de sonido e imagen"
  },
  {
    value: 57,
    label: "Ingeniería de telecomunicación"
  },
  {
    value: 58,
    label: "Ingeniería eléctrica"
  },
  {
    value: 59,
    label: "Ingeniería electrónica industrial y automática"
  },
  {
    value: 60,
    label: "Ingeniería en diseño industrial y desarrollo del producto"
  },
  {
    value: 61,
    label: "Ingeniería en electrónica"
  },
  {
    value: 62,
    label: "Ingeniería en tecnologías industriales"
  },
  {
    value: 63,
    label: "Ingeniería forestal y montes"
  },
  {
    value: 64,
    label: "Ingeniería geomática, topografía y cartografía"
  },
  {
    value: 65,
    label: "Ingeniería horticultura y jardinería"
  },
  {
    value: 66,
    label: "Ingeniería mecánica"
  },
  {
    value: 67,
    label: "Ingeniería naval y oceánica"
  },
  {
    value: 68,
    label: "Ingeniería química industrial e Ingeniería medioambiental"
  },
  {
    value: 69,
    label: "Lengua inglesa"
  },
  {
    value: 70,
    label: "Lenguas clásicas"
  },
  {
    value: 71,
    label: "Lenguas modernas y aplicadas"
  },
  {
    value: 72,
    label: "Lenguas y dialectos españoles"
  },
  {
    value: 73,
    label: "Literatura"
  },
  {
    value: 74,
    label: "Logopedia"
  },
  {
    value: 75,
    label: "Marketing"
  },
  {
    value: 76,
    label: "Matemáticas"
  },
  {
    value: 77,
    label: "Medicina"
  },
  {
    value: 78,
    label: "Música y Artes escénicas"
  },
  {
    value: 79,
    label: "Náutica y transporte marítimo"
  },
  {
    value: 80,
    label: "Nutrición humana y dietética"
  },
  {
    value: 81,
    label: "Odontología"
  },
  {
    value: 82,
    label: "Óptica y optometría"
  },
  {
    value: 83,
    label: "Otras lenguas extranjeras"
  },
  {
    value: 84,
    label: "Otros maestros"
  },
  {
    value: 85,
    label: "Pedagogía"
  },
  {
    value: 86,
    label: "Periodismo"
  },
  {
    value: 87,
    label: "Podología"
  },
  {
    value: 88,
    label: "Política y gestión pública"
  },
  {
    value: 89,
    label: "Protocolo y eventos"
  },
  {
    value: 90,
    label: "Psicología"
  },
  {
    value: 91,
    label: "Publicidad y relaciones públicas"
  },
  {
    value: 92,
    label: "Química"
  },
  {
    value: 93,
    label: "Relaciones internacionales"
  },
  {
    value: 94,
    label: "Servicio de transporte terrestre y Servicio de transporte aéreo"
  },
  {
    value: 95,
    label: "Servicios (otros estudios)"
  },
  {
    value: 96,
    label: "Sociología e Igualdad de género"
  },
  {
    value: 97,
    label: "Terapia ocupacional"
  },
  {
    value: 98,
    label: "TOTAL"
  },
  {
    value: 99,
    label: "Trabajo social"
  },
  {
    value: 100,
    label: "Traducción e interpretación"
  },
  {
    value: 101,
    label: "Turismo"
  },
  {
    value: 102,
    label: "Veterinaria"
  },
  {
    value: 103,
    label: "Actividad física y del deporte"
  },
  {
    value: 104,
    label: "Administración y empresa"
  },
  {
    value: 105,
    label: "Antropología social y cultural y Estudios y gestión de la cultura"
  },
  {
    value: 106,
    label: "Arqueología"
  },
  {
    value: 107,
    label: "Arquitectura técnica"
  },
  {
    value: 108,
    label: "Arquitectura y Urbanismo y paisajismo"
  },
  {
    value: 109,
    label: "Audiovisual, imagen y multimedia"
  },
  {
    value: 110,
    label: "Bellas artes"
  },
  {
    value: 111,
    label: "Biología"
  },
  {
    value: 112,
    label: "Biomedicina"
  },
  {
    value: 113,
    label: "Bioquímica"
  },
  {
    value: 114,
    label: "Biotecnología"
  },
  {
    value: 115,
    label: "Ciencia y tecnología de los alimentos e Ingeniería alimentaria"
  },
  {
    value: 116,
    label: "Ciencias ambientales"
  },
  {
    value: 117,
    label: "Ciencias del mar"
  },
  {
    value: 118,
    label: "Ciencias del trabajo"
  },
  {
    value: 119,
    label: "Comercio"
  },
  {
    value: 120,
    label: "Comunicación"
  },
  {
    value: 121,
    label: "Conservación y restauración"
  },
  {
    value: 122,
    label: "Criminología"
  },
  {
    value: 123,
    label: "Derecho"
  },
  {
    value: 124,
    label: "Desarrollo de software y de aplicaciones e Ingeniería multimedia"
  },
  {
    value: 125,
    label: "Diseño"
  },
  {
    value: 126,
    label: "Economía"
  },
  {
    value: 127,
    label: "Educación infantil"
  },
  {
    value: 128,
    label: "Educación primaria"
  },
  {
    value: 129,
    label: "Educación social"
  },
  {
    value: 130,
    label: "Enfermería"
  },
  {
    value: 131,
    label: "Enología"
  },
  {
    value: 132,
    label: "Estadística"
  },
  {
    value: 133,
    label: "Farmacia"
  },
  {
    value: 134,
    label: "Filosofía"
  },
  {
    value: 135,
    label: "Financiera y actuarial"
  },
  {
    value: 136,
    label: "Finanzas y contabilidad"
  },
  {
    value: 137,
    label: "Física"
  },
  {
    value: 138,
    label: "Fisioterapia"
  },
  {
    value: 139,
    label: "Geografía"
  },
  {
    value: 140,
    label: "Geografía y ordenación del territorio"
  },
  {
    value: 141,
    label: "Geología"
  },
  {
    value: 142,
    label: "Gestión y administración pública"
  },
  {
    value: 143,
    label: "Historia"
  },
  {
    value: 144,
    label: "Historia del arte"
  },
  {
    value: 145,
    label: "Humanidades"
  },
  {
    value: 146,
    label: "Información y documentación"
  },
  {
    value: 147,
    label: "Informática"
  },
  {
    value: 148,
    label: "Ingeniería aeronáutica"
  },
  {
    value: 149,
    label: "Ingeniería agraria y agroalimentaria"
  },
  {
    value: 150,
    label: "Ingeniería agrícola, agropecuaria y medio rural"
  },
  {
    value: 151,
    label: "Ingeniería biomédica y de la salud"
  },
  {
    value: 152,
    label: "Ingeniería civil"
  },
  {
    value: 153,
    label: "Ingeniería de computadores"
  },
  {
    value: 154,
    label: "Ingeniería de la energía"
  },
  {
    value: 155,
    label: "Ingeniería de materiales e Ingeniería textil"
  },
  {
    value: 156,
    label: "Ingeniería de minas y energía"
  },
  {
    value: 157,
    label: "Ingeniería de organización industrial y Nanotecnología"
  },
  {
    value: 158,
    label: "Ingeniería de sonido e imagen"
  },
  {
    value: 159,
    label: "Ingeniería de telecomunicación"
  },
  {
    value: 160,
    label: "Ingeniería eléctrica"
  },
  {
    value: 161,
    label: "Ingeniería electrónica industrial y automática"
  },
  {
    value: 162,
    label: "Ingeniería en diseño industrial y desarrollo del producto"
  },
  {
    value: 163,
    label: "Ingeniería en electrónica"
  },
  {
    value: 164,
    label: "Ingeniería en tecnologías industriales"
  },
  {
    value: 165,
    label: "Ingeniería forestal y montes"
  },
  {
    value: 166,
    label: "Ingeniería geomática, topografía y cartografía"
  },
  {
    value: 167,
    label: "Ingeniería horticultura y jardinería"
  },
  {
    value: 168,
    label: "Ingeniería mecánica"
  },
  {
    value: 169,
    label: "Ingeniería naval y oceánica"
  },
  {
    value: 170,
    label: "Ingeniería química industrial e Ingeniería medioambiental"
  },
  {
    value: 171,
    label: "Lengua inglesa"
  },
  {
    value: 172,
    label: "Lenguas clásicas"
  },
  {
    value: 173,
    label: "Lenguas modernas y aplicadas"
  },
  {
    value: 174,
    label: "Lenguas y dialectos españoles"
  },
  {
    value: 175,
    label: "Literatura"
  },
  {
    value: 176,
    label: "Logopedia"
  },
  {
    value: 177,
    label: "Marketing"
  },
  {
    value: 178,
    label: "Matemáticas"
  },
  {
    value: 179,
    label: "Medicina"
  },
  {
    value: 180,
    label: "Música y Artes escénicas"
  },
  {
    value: 181,
    label: "Náutica y transporte marítimo"
  },
  {
    value: 182,
    label: "Nutrición humana y dietética"
  },
  {
    value: 183,
    label: "Odontología"
  },
  {
    value: 184,
    label: "Óptica y optometría"
  },
  {
    value: 185,
    label: "Otras lenguas extranjeras"
  },
  {
    value: 186,
    label: "Otros maestros"
  },
  {
    value: 187,
    label: "Pedagogía"
  },
  {
    value: 188,
    label: "Periodismo"
  },
  {
    value: 189,
    label: "Podología"
  },
  {
    value: 190,
    label: "Política y gestión pública"
  },
  {
    value: 191,
    label: "Protocolo y eventos"
  },
  {
    value: 192,
    label: "Psicología"
  },
  {
    value: 193,
    label: "Publicidad y relaciones públicas"
  },
  {
    value: 194,
    label: "Química"
  },
  {
    value: 195,
    label: "Relaciones internacionales"
  },
  {
    value: 196,
    label: "Servicio de transporte terrestre y Servicio de transporte aéreo"
  },
  {
    value: 197,
    label: "Servicios (otros estudios)"
  },
  {
    value: 198,
    label: "Sociología e Igualdad de género"
  },
  {
    value: 199,
    label: "Terapia ocupacional"
  },
  {
    value: 200,
    label: "TOTAL"
  },
  {
    value: 201,
    label: "Trabajo social"
  },
  {
    value: 202,
    label: "Traducción e interpretación"
  },
  {
    value: 203,
    label: "Turismo"
  },
  {
    value: 204,
    label: "Veterinaria"
  },
  {
    value: 205,
    label: "Ingeniería química"
  },
  {
    value: 206,
    label: "Derecho y ciencias política abogado"
  },
  {
    value: 207,
    label: "Banca y seguros"
  },
  {
    value: 208,
    label: "Ciencias contables y financieras contador público"
  },
  {
    value: 209,
    label: "Ciencias de la educación"
  },
  {
    value: 209,
    label: "Turismo y hoteleria"
  },
  {
    value: 210,
    label: "Farmacia y bioquimica"
  }
]

const professionsData = professions
  .map(profession => ({
    value: profession.value,
    label: profession.label.toUpperCase()
  }))

module.exports = professionsData