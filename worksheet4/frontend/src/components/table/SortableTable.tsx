import React from "react";
import styles from "./SortableTable.module.scss"; // Import the styles

interface SortableTableProps {
  headers: { key: string; label: string }[];
  data: any[];
}

const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => (
  <table className={styles.table}> {/* Apply the table class */}
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key}>{header.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {headers.map((header) => (
            <td key={header.key}>{row[header.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default SortableTable;
