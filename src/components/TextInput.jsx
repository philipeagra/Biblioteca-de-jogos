/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

TextInput.PropTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default function TextInput({ id, label, value, setValue }) {
  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
}
