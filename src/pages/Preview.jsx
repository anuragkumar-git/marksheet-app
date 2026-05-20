import Layout from '../components/Layout'
import { useMarksheet } from '../context/MarksheetContext'
import PDFDocument from '../components/PDFDocument'

import {
  PDFViewer,
  PDFDownloadLink,
} from '@react-pdf/renderer'

function Preview() {
  const { formData } = useMarksheet()

  return (
    <Layout title='PDF Preview'>
      <div className='preview-container'>
        <PDFViewer width='100%' height='600'>
          <PDFDocument data={formData} />
        </PDFViewer>
      </div>

      <div className='download-section'>
        <PDFDownloadLink
          document={<PDFDocument data={formData} />}
          fileName={`${formData.studentName || 'Student'}Marksheet.pdf`}
        >
          {({ loading }) =>
            loading ? 'Generating PDF...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
    </Layout>
  )
}

export default Preview