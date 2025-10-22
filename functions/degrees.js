const degrees = [
  {
    value: 1,
    label: "Bachiller"
  },
  {
    value: 2,
    label: "Ingeniero(a)"
  },
  {
    value: 3,
    label: "Licenciatura"
  },
  {
    value: 4,
    label: "Maestría"
  },
  {
    value: 5,
    label: "Doctorado"
  }
]

const degreesData = degrees
  .map(degree => ({
    value: degree.value,
    label: degree.label.toUpperCase()
  }))

module.exports = degreesData