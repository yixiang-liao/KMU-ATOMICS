import React, { useState } from "react";
import { IoCaretForwardCircleSharp, IoSearchCircle } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(o => !o);

  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-content">
          <ul>
            <li><img src="./icon/icon_1genomics-light.png" alt="Genomics" />Genomics</li>
            <li><img src="./icon/icon_2epigenomics-light.png" alt="Epigenomics" />Epigenomics</li>
            <li><img src="./icon/icon_3transciptomics-light.png" alt="Transcriptomics" />Transcriptomics</li>
            <li><img src="./icon/icon_4proteomics-light.png" alt="Proteomics" />Proteomics</li>
            <li><img src="./icon/icon_5metabolomics-light.png" alt="Metabolomics" />Metabolomics</li>
          </ul>
        </div>

        {/* 你原本的底部功能鍵可保留 */}
        <div className="sidebar-button">
          <button aria-label="Search"><IoSearchCircle /></button>
          <button aria-label="btn-2"><IoCaretForwardCircleSharp/></button>
        </div>
      </div>

      {/* 浮動圓形收合按鈕（永遠可點） */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        aria-expanded={isOpen}
      >
        <FaChevronRight className="icon" />
      </button>

      {/* 主內容 */}
      <div className="home-page">
        <div className="text-group">
          <p className="p-1">INTERGRATING TAIWAN MULTI-OMICS DATA</p>
          <h1>ATOMICS</h1>
          <p className="p-2">
            From Discovery to Validation:Empowering Global Biological Insight
          </p>
        </div>
        <div className="button-group">
          <button className="btn-1">Analyzer</button>
          <button className="btn-2">Public Validation</button>
        </div>
        <div className="p-3">COMING SOON</div>
      </div>
    </div>
  );
};

export default HomePage;
