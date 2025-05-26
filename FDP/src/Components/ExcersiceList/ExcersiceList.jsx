import React, { useEffect, useState } from 'react';

export const ExcersiceList = () => {
  const [Folders, setFolders] = useState([]);
  const [Loading, setLoading] = useState(true);

  const User = "CamachoKyan";
  const Repository = "FDP";

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${User}/${Repository}/contents/Ejercicios`);
        const data = await response.json();

        const OnlyFolders = data.filter(item => 
          item.type === "dir" && item.name.startsWith("Ejercicio")
        );

        const SortFolders = OnlyFolders.sort((a, b) => {
          const numA = parseInt(a.name.match(/\d+/)?.[0] || 0, 10);
          const numB = parseInt(b.name.match(/\d+/)?.[0] || 0, 10);
          return numA - numB;
        });

        setFolders(SortFolders);
      } catch (error) {
        console.error("Error al obtener carpetas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFolders();
  }, []);

  if (Loading) return <p>Cargando carpetas...</p>;

  return (
    <div>
      <h2>Lista de Ejercicios</h2>
      <ul>
        {Folders.map((Folder) => (
          <li key={Folder.name}>
            <a 
              href={`https://${User}.github.io/${Repository}/${Folder.name}/`} 
              rel="noopener noreferrer"
            >
              {Folder.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};