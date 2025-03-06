'use client'

import Button from '../ui/button/button'

interface DownloadFichaTecnicaProps {
  fileUrl: string;
  fileName?: string;
}

export default function DownloadTechnicalSheet ({ fileUrl, fileName = 'ficha_tecnica.pdf' }: DownloadFichaTecnicaProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(fileUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)

      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error al descargar la ficha técnica:', error)
    }
  }

  return (
    <Button variant="action" onClick={handleDownload} >
       Descargar
    </Button>
  )
}
