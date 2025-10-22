const CalibriNormal = require('../fonts/calibri')
const CalibriBold = require('../fonts/calibrib')

class PDF {
  constructor () {
    const {jsPDF} = require('jspdf')
    require('jspdf-autotable')
    const doc = new jsPDF({
      orientation: 'p',
      format: 'a4',
      putOnlyUsedFonts: true
    })
    this.doc = doc
    this.marginX = 25
    this.marginY = 25
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
    let x = props.x + this.marginX,
      y = props.y + this.marginY,
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
      let lineTop = (lineHeight + 1) * i
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

    this.doc.addImage(img, 'JPEG', x, y, width, height)
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
        fontSize: props.modules ? (props.modules > 18) ? 9 : 10 : 10,
        fontStyle: 'normal',
        valign: 'middle'
      },
      columnStyles: {
        0: {
          fontSize: props.modules ? (props.modules > 18) ? 9 : 10 : 10,
          halign: 'center'
        },
        1: {
          fontSize: props.modules ? (props.modules > 18) ? 9 : 10 : 10,
        },
        2: {
          fontSize: props.modules ? (props.modules > 18) ? 9 : 10 : 10,
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
}

module.exports = PDF
