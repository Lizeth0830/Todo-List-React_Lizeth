import { useState } from "react";

export default function TodoItem({ tarea, toggleCompleted, eliminarTarea }) {
  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.text);

  const guardarEdicion = () => {
    if (nuevoTexto.trim()) {
      tarea.text = nuevoTexto;
      setEditando(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
      {editando ? (
        <input
          className="flex-1 p-1 border rounded mr-2"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
        />
      ) : (
        <span
          onClick={() => toggleCompleted(tarea.id)}
          className={`flex-1 cursor-pointer flex items-center gap-2 ${
            tarea.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {tarea.completed && <span>✅</span>}
          {tarea.text}
        </span>
      )}

      {editando ? (
        <button
          onClick={guardarEdicion}
          className="text-green-600 text-xl mr-2"
        >
          💾
        </button>
      ) : (
        <button
          onClick={() => setEditando(true)}
          className="text-yellow-600 text-xl mr-2"
        >
          ✏️
        </button>
      )}

      <button
        onClick={() => eliminarTarea(tarea.id)}
        className="text-red-600 text-xl"
      >
        🗑️
      </button>
    </div>
  );
}