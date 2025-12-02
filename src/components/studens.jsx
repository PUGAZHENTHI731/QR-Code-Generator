function Students(props) {
  return (
    <table>
      <tbody>
         {props.students.map(student =>(
            <>
        <tr>
          <th>Name :</th>
          <td>{student.name}</td>
        </tr>
        <tr>
          <th>Age:</th>
          <td>{student.age}</td>
        </tr>
        <tr>
          <th>Marride:</th>
          <td>{student.ismarride?'Yes':'No'}</td>
        </tr>
        </>
         ))}
         
      </tbody>
    </table>
  );
}
export {Students};
