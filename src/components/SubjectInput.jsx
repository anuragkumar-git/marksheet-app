function SubjectInput({ index, subject, updateSubject }) {
  return (
    <div className='subject-row'>
      <input
        type='text'
        value={subject.name}
        placeholder='Subject Name'
        onChange={(e) => updateSubject(index, 'name', e.target.value)}
      />

      <input
        type='number'
        value={subject.marks}
        placeholder='Marks'
        onChange={(e) => updateSubject(index, 'marks', e.target.value)}
      />
    </div>
  )
}

export default SubjectInput