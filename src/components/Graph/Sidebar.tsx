import type { GraphData } from '@components/Graph/Graph.tsx';

interface SidebarProps {
  onFileUpload: (data: GraphData) => void;
}

export const Sidebar = ({ onFileUpload }: SidebarProps) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        try {
          const data = JSON.parse(e.target.result) as GraphData;
          onFileUpload(data);
        } catch (error) {
          console.error('Ошибка парсинга JSON:', error);
        }
      }
    };

    reader.readAsText(file);
  };

  return (
    <div style={{ padding: '10px', borderRight: '1px solid #ccc', width: '220px' }}>
      <h3>Элементы управления</h3>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Загрузить JSON:
        <input type="file" accept=".json" onChange={handleFileUpload} style={{ display: 'block', marginTop: '5px' }} />
      </label>
    </div>
  );
};
