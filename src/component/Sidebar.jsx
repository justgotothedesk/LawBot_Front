import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="chat-history">
        <h2 style={{ fontSize: '1rem', position: 'sticky', top: '0' }}>Chat History</h2>
        <ul>
          <li><button>Chat 1</button></li>
          <li><button>Chat 2</button></li>
          {/* 추가적인 채팅 기록 버튼들 */}
        </ul>
      </div>
      <div className="buttons">
        <button>Help</button>
      </div>
      <div className="buttons">
        <button>Setting</button>
      </div>
    </div>
  );
};

export default Sidebar;
