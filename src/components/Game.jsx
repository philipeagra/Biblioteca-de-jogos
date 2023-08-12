/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

Game.PropTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  onRemove: PropTypes.func,
};

export default function Game({ title, cover, onRemove }) {
  return (
    <div>
      <img src={cover} alt="Capa do jogo" />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  );
}
