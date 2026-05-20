import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import SubjectInput from "../components/SubjectInput";
import { useMarksheet } from "../context/MarksheetContext";

function Editor() {
  const navigate = useNavigate();
  const { formData, setFormData } = useMarksheet();

  const updateSubject = (index, field, value) => {
    const updatedSubjects = [...formData.subjects];

    updatedSubjects[index][field] = value;

    setFormData({
      ...formData,
      subjects: updatedSubjects,
    });
  };

  return (
    <>
      <Layout title="Form Editor">
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            value={formData.studentName}
            onChange={(e) =>
              setFormData({
                ...formData,
                studentName: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department: e.target.value,
              })
            }
          />
        </div>

        <div className="subjects">
          <h3>Subjects</h3>

          {formData.subjects.map((subject, index) => (
            <SubjectInput
              key={index}
              index={index}
              subject={subject}
              updateSubject={updateSubject}
            />
          ))}
        </div>

        <button onClick={() => navigate("/preview")}>Generate Preview</button>
      </Layout>
    </>
  );
}

export default Editor;
