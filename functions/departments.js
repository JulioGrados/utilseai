const departments = [
  {
    id_ubigeo: '2534',
    name: 'Amazonas',
    codigo_ubigeo: '01',
    etiqueta_ubigeo: 'Amazonas, Perú',
    buscador_ubigeo: 'amazonas perú',
    numero_hijos_ubigeo: '7',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '2625',
    name: 'Áncash',
    codigo_ubigeo: '02',
    etiqueta_ubigeo: 'Áncash, Perú',
    buscador_ubigeo: 'áncash perú',
    numero_hijos_ubigeo: '20',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '2812',
    name: 'Apurímac',
    codigo_ubigeo: '03',
    etiqueta_ubigeo: 'Apurímac, Perú',
    buscador_ubigeo: 'apurímac perú',
    numero_hijos_ubigeo: '7',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '2900',
    name: 'Arequipa',
    codigo_ubigeo: '04',
    etiqueta_ubigeo: 'Arequipa, Perú',
    buscador_ubigeo: 'arequipa perú',
    numero_hijos_ubigeo: '8',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3020',
    name: 'Ayacucho',
    codigo_ubigeo: '05',
    etiqueta_ubigeo: 'Ayacucho, Perú',
    buscador_ubigeo: 'ayacucho perú',
    numero_hijos_ubigeo: '11',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3143',
    name: 'Cajamarca',
    codigo_ubigeo: '06',
    etiqueta_ubigeo: 'Cajamarca, Perú',
    buscador_ubigeo: 'cajamarca perú',
    numero_hijos_ubigeo: '13',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4568',
    name: 'Callao',
    codigo_ubigeo: '26',
    etiqueta_ubigeo: 'Callao, Perú',
    buscador_ubigeo: 'callao perú',
    numero_hijos_ubigeo: '4',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3292',
    name: 'Cusco',
    codigo_ubigeo: '08',
    etiqueta_ubigeo: 'Cusco, Perú',
    buscador_ubigeo: 'cusco perú',
    numero_hijos_ubigeo: '13',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3414',
    name: 'Huancavelica',
    codigo_ubigeo: '09',
    etiqueta_ubigeo: 'Huancavelica, Perú',
    buscador_ubigeo: 'huancavelica perú',
    numero_hijos_ubigeo: '7',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3518',
    name: 'Huánuco',
    codigo_ubigeo: '10',
    etiqueta_ubigeo: 'Huánuco, Perú',
    buscador_ubigeo: 'huánuco perú',
    numero_hijos_ubigeo: '11',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3606',
    name: 'Ica',
    codigo_ubigeo: '11',
    etiqueta_ubigeo: 'Ica, Perú',
    buscador_ubigeo: 'ica perú',
    numero_hijos_ubigeo: '5',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3655',
    name: 'Junín',
    codigo_ubigeo: '12',
    etiqueta_ubigeo: 'Junín, Perú',
    buscador_ubigeo: 'junín perú',
    numero_hijos_ubigeo: '9',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3788',
    name: 'La Libertad',
    codigo_ubigeo: '13',
    etiqueta_ubigeo: 'La Libertad, Perú',
    buscador_ubigeo: 'la libertad perú',
    numero_hijos_ubigeo: '12',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3884',
    name: 'Lambayeque',
    codigo_ubigeo: '14',
    etiqueta_ubigeo: 'Lambayeque, Perú',
    buscador_ubigeo: 'lambayeque perú',
    numero_hijos_ubigeo: '3',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '3926',
    name: 'Lima',
    codigo_ubigeo: '15',
    etiqueta_ubigeo: 'Lima, Perú',
    buscador_ubigeo: 'lima perú',
    numero_hijos_ubigeo: '10',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4108',
    name: 'Loreto',
    codigo_ubigeo: '16',
    etiqueta_ubigeo: 'Loreto, Perú',
    buscador_ubigeo: 'loreto perú',
    numero_hijos_ubigeo: '6',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4165',
    name: 'Madre de Dios',
    codigo_ubigeo: '17',
    etiqueta_ubigeo: 'Madre de Dios, Perú',
    buscador_ubigeo: 'madre de dios perú',
    numero_hijos_ubigeo: '3',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4180',
    name: 'Moquegua',
    codigo_ubigeo: '18',
    etiqueta_ubigeo: 'Moquegua, Perú',
    buscador_ubigeo: 'moquegua perú',
    numero_hijos_ubigeo: '3',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4204',
    name: 'Pasco',
    codigo_ubigeo: '19',
    etiqueta_ubigeo: 'Pasco, Perú',
    buscador_ubigeo: 'pasco perú',
    numero_hijos_ubigeo: '3',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4236',
    name: 'Piura',
    codigo_ubigeo: '20',
    etiqueta_ubigeo: 'Piura, Perú',
    buscador_ubigeo: 'piura perú',
    numero_hijos_ubigeo: '8',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4309',
    name: 'Puno',
    codigo_ubigeo: '21',
    etiqueta_ubigeo: 'Puno, Perú',
    buscador_ubigeo: 'puno perú',
    numero_hijos_ubigeo: '13',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4431',
    name: 'San Martín',
    codigo_ubigeo: '22',
    etiqueta_ubigeo: 'San Martín, Perú',
    buscador_ubigeo: 'san martín perú',
    numero_hijos_ubigeo: '10',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4519',
    name: 'Tacna',
    codigo_ubigeo: '23',
    etiqueta_ubigeo: 'Tacna, Perú',
    buscador_ubigeo: 'tacna perú',
    numero_hijos_ubigeo: '4',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4551',
    name: 'Tumbes',
    codigo_ubigeo: '24',
    etiqueta_ubigeo: 'Tumbes, Perú',
    buscador_ubigeo: 'tumbes perú',
    numero_hijos_ubigeo: '3',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  },
  {
    id_ubigeo: '4567',
    name: 'Ucayali',
    codigo_ubigeo: '25',
    etiqueta_ubigeo: 'Ucayali, Perú',
    buscador_ubigeo: 'ucayali perú',
    numero_hijos_ubigeo: '4',
    nivel_ubigeo: '1',
    id_padre_ubigeo: '2533'
  }
]

module.exports = departments
