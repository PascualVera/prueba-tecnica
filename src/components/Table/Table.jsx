import style from "./Table.module.css"; 
import { useUsers } from "../../hooks/useUsers";

export default function Table() {
  const dataTable = useUsers()


  return (
    <article className={style.container}>
      <table className={style.table}>
        <thead className={style.table_header}>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Available</td>
            <td>Last login</td>
          </tr>
        </thead>
        <tbody className={style.table_body}>
          {dataTable &&
            dataTable.map((user) => {
              return (
                <tr>
                  <td title={user.user_name}>
                    {user.user_name}
                  </td>
                  <td>{user.age}</td>
                  <td>{user.available ? "✔️" : "❌"}</td>
                  <td>{user.last_login}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </article>
  );
}
