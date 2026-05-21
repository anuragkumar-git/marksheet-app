import Layout from "../components/Layout";
import { useMarksheet } from "../context/MarksheetContext";
import PDFDocument from "../components/PDFDocument";

import { PDFViewer, PDFDownloadLink, pdf } from "@react-pdf/renderer";
import { useState } from "react";

function Preview() {
  const { formData } = useMarksheet();
  const [sharing, setSharing] = useState(false);
  const handleShare = async () => {
    try {
      setSharing(true);
      const blob = await pdf(<PDFDocument data={formData} />).toBlob();

      const fileName = `${formData.studentName || "Student"}Marksheet.pdf`;

      const file = new File([blob], fileName, { type: "application/pdf" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `${fileName}`,
          text: "Sharing marksheet PDF",
          files: [file],
        });
        setSharing(false);
      } else {
        alert("Sharing is not supported on your device.");
        setSharing(false);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to share PDF");
      setSharing(false);
    }
  };

  return (
    <Layout title="PDF Preview">
      <div className="preview-container">
        <PDFViewer width="100%" height="600">
          <PDFDocument data={formData} />
        </PDFViewer>
      </div>

      <div className="download-section">
        <PDFDownloadLink
          document={<PDFDocument data={formData} />}
          fileName={`${formData.studentName || "Student"}Marksheet.pdf`}
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>
        <button onClick={handleShare} disabled={sharing}>
          Share PDF
        </button>
      </div>
    </Layout>
  );
}

export default Preview;
