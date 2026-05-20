import { createContext, useContext, useState } from 'react'

const MarksheetContext = createContext()

export const MarksheetProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    department: '',
    subjects: [
      { name: 'Mathematics', marks: '' },
      { name: 'Physics', marks: '' },
      { name: 'Chemistry', marks: '' },
      { name: 'English', marks: '' },
    ],
  })

  return (
    <MarksheetContext.Provider value={{ formData, setFormData }}>
      {children}
    </MarksheetContext.Provider>
  )
}

export const useMarksheet = () => useContext(MarksheetContext)