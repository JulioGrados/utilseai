// const MontserratNormal = require('../fonts/montserratl')
// const MontserratRegular = require('../fonts/montserratr')
// const MontserratSemiBold = require('../fonts/montserrats')
// const MontserratBold = require('../fonts/montserratb')

const CalibriNormal = require('../fonts/calibri')
const CalibriBold = require('../fonts/calibrib')

class PDF {
  constructor () {
    const {jsPDF} = require('jspdf')
    require('jspdf-autotable')
    const doc = new jsPDF({
      orientation: 'l',
      format: 'a4',
      putOnlyUsedFonts: true,
      lineHeight: 1.7
    })
    this.doc = doc
    this.marginX = 30
    this.marginY = 30
    this.widthPage = doc.internal.pageSize.getWidth()
    this.width = doc.internal.pageSize.getWidth() - this.marginX * 2
    this.heightPage = doc.internal.pageSize.getHeight()
    this.height = doc.internal.pageSize.getHeight() - this.marginY * 2
  }

  /* header = () => {
    let x = props.x,
      y = props.y
  } */

  text (props) {
    let x = props.x + 25,
      y = props.y + 50,
      text = props.text,
      flags = props.flags,
      angle = props.angle,
      align = props.align,
      color = props.color || '#000',
      fontName = props.fontName || 'calibri',
      fontStyle = props.fontStyle || 'normal',
      size = props.size || 10
    this.doc.addFileToVFS('calibri.ttf', CalibriNormal)
    this.doc.addFileToVFS('calibrib.ttf', CalibriBold)
    if (fontStyle === 'bold') {
      this.doc.addFont('calibrib.ttf', 'calibri', fontStyle)
    } else {
      this.doc.addFont('calibri.ttf', 'calibri', fontStyle)
    }
    this.doc.setFont('calibri', fontStyle)
    this.doc.setTextColor(color)
    this.doc.setFont(fontName)
    // this.doc.setFontStyle(fontStyle)
    this.doc.setFontSize(size)

    const lines = this.doc.splitTextToSize(
      text,
      this.widthPage - this.marginX * 2
    )

    const dim = this.doc.getTextDimensions('Text')
    const lineHeight = dim.h

    for (var i = 0; i < lines.length; i++) {
      let lineTop = (lineHeight + 3) * i
      this.doc.text(lines[i], x, y + lineTop, { flags, angle, align })
    }
  }

  fonts () {
    return this.doc.getFontList()
  }

  image (props) {
    let x = props.x,
      y = props.y,
      img = props.img,
      width = props.width,
      height = props.height

    this.doc.addImage(img, 'PNG', x, y, width, height)
  }

  addPage () {
    this.doc.addPage()
  }

  setFillColor (props) {
    let number = props.number || ''
    this.doc.setFillColor(number)
  }

  rect (props) {
    let x = props.x + this.marginX,
      y = props.y + this.marginY,
      width = props.width || 180,
      height = props.height || 0,
      style = props.style || ''

    this.doc.rect(x, y, width, height, style)
  }

  autoTable (props) {
    const columns = props.columns,
      body = props.data,
      x = props.x + this.marginX,
      y = props.y + this.marginY

    this.doc.autoTable({
      columns,
      body,
      startY: y,
      startX: x,
      theme: 'grid',
      styles: {},
      showHead: 'firstPage',
      didDrawPage: props.callback,
      headStyles: {
        font: 'calibri',
        halign: 'center',
        fillColor: '0',
        borderColor: '#000',
        cellWidth: 'wrap',
        fontSize: 10
      },
      margin: { top: 0, left: 25, right: 25, bottom: 0 },
      rowPageBreak: 'avoid',
      bodyStyles: {
        font: 'calibri',
        minCellHeight: 2,
        textColor: 0,
        fontSize: 10,
        fontStyle: 'normal',
        valign: 'middle'
      },
      columnStyles: {
        0: {
          fontSize: 10,
          halign: 'center'
        },
        1: {
          fontSize: 10
        },
        2: {
          fontSize: 10,
          halign: 'center'
        }
      }
    })

    let finalY = this.doc.previousAutoTable.finalY
    return finalY
  }

  print () {
    var string = this.doc.output('datauristring')
    var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
    var x = window.open()
    x.document.open()
    x.document.write(embed)
    x.document.close()
  }

  output() {
    var element = this.doc.output()
    return element
  }

  send () {
    var element = this.doc.output('datauristring')
    return element
  }

  save(course, names, code) {
    this.doc.save(`certificado - ${course} - ${names} - ${code}.pdf`)
  }
}

module.exports = PDF
