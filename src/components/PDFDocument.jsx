import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  schoolName: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 15,
  },

  label: {
    fontWeight: "bold",
  },

  table: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
  },

  tableRow: {
    flexDirection: "row",
  },

  tableHeader: {
    backgroundColor: "#e5e5e5",
    fontWeight: "bold",
  },

  cell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
  },

  total: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
  },
  summary: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 1.8,
  },
});
function PDFDocument({ data }) {
  const total = data.subjects.reduce(
    (acc, item) => acc + Number(item.marks || 0),
    0,
  );
  const maxMarks = data.subjects.length * 100;

  const percentage = ((total / maxMarks) * 100 || 0).toFixed(2);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.schoolName}>Sethani Low School</Text>
        <Text style={styles.title}>Student Marksheet</Text>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Student Name: </Text>
            {data.studentName}
          </Text>
        </View>

        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Department: </Text>
            {data.department}
          </Text>
        </View>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.cell}>Subject</Text>
            <Text style={styles.cell}>Marks</Text>
          </View>

          {data.subjects.map((subject, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cell}>{subject.name}</Text>
              <Text style={styles.cell}>{subject.marks}/100</Text>
            </View>
          ))}
        </View>

        <View style={styles.summary}>
          <Text>
            Total Marks: {total}/{maxMarks}
          </Text>

          <Text>Percentage: {percentage}%</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PDFDocument;
