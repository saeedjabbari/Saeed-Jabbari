import React, { useState } from 'react';
import { NavPage, Project, SectorCategory } from './types';
import { PROJECTS } from './data/content';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Industries } from './components/Industries';
import { SelectedWork } from './components/SelectedWork';
import { EngagementModels } from './components/EngagementModels';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { WorkArchive } from './components/WorkArchive';
import { ProjectDetailView } from './components/ProjectDetailView';
import { ProcessView } from './components/ProcessView';
import { PricingView } from './components/PricingView';
import { ArticlesView } from './components/ArticlesView';
import { ServicesView } from './components/ServicesView';
import { BrandAuditModal } from './components/BrandAuditModal';
import { IntakeBriefModal } from './components/IntakeBriefModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [archiveInitialSector, setArchiveInitialSector] = useState<SectorCategory | 'all'>('all');

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectDetail = (proj: Project) => {
    setSelectedProject(proj);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSectorFromHome = (sectorId: SectorCategory) => {
    setArchiveInitialSector(sectorId);
    setCurrentPage('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreWorks = () => {
    const workElem = document.getElementById('work');
    if (workElem && currentPage === 'home') {
      workElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentPage('work');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const capElem = document.getElementById('capabilities');
    if (capElem && currentPage === 'home') {
      capElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentPage('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-[#f4f5f7] selection:bg-[#D4FF00] selection:text-[#080c14]">
      {/* Main Studio Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBrief={() => setIsBriefModalOpen(true)}
      />

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onExploreWorks={handleExploreWorks}
              onOpenAudit={() => setIsAuditModalOpen(true)}
              onExploreServices={handleExploreServices}
            />
            <Capabilities
              onSelectCapability={() => {
                setCurrentPage('process');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <Industries onSelectSector={handleSelectSectorFromHome} />
            <SelectedWork
              onViewAll={() => {
                setArchiveInitialSector('all');
                setCurrentPage('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectProject={handleOpenProjectDetail}
            />
            <EngagementModels
              onViewPricing={() => {
                setCurrentPage('pricing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRequestAudit={() => setIsAuditModalOpen(true)}
              onDiscussProject={() => setIsBriefModalOpen(true)}
              onInquireRetainer={() => setIsBriefModalOpen(true)}
            />
            <CtaBanner
              onOpenBrief={() => setIsBriefModalOpen(true)}
              onViewPricing={() => {
                setCurrentPage('pricing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {currentPage === 'services' && (
          <ServicesView
            onOpenBrief={() => setIsBriefModalOpen(true)}
            onSelectProject={handleOpenProjectDetail}
            onNavigateToProcess={() => {
              setCurrentPage('process');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'work' && (
          <>
            <WorkArchive
              initialSector={archiveInitialSector}
              onSelectProject={handleOpenProjectDetail}
            />
            <CtaBanner
              onOpenBrief={() => setIsBriefModalOpen(true)}
              onViewPricing={() => {
                setCurrentPage('pricing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {currentPage === 'project-detail' && (
          <>
            <ProjectDetailView
              project={selectedProject}
              onBackToArchive={() => {
                setCurrentPage('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectProject={handleOpenProjectDetail}
              onOpenBrief={() => setIsBriefModalOpen(true)}
            />
            <CtaBanner
              onOpenBrief={() => setIsBriefModalOpen(true)}
              onViewPricing={() => {
                setCurrentPage('pricing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {currentPage === 'process' && (
          <ProcessView onOpenBrief={() => setIsBriefModalOpen(true)} />
        )}

        {currentPage === 'pricing' && (
          <PricingView
            onRequestAudit={() => setIsAuditModalOpen(true)}
            onDiscussProject={() => setIsBriefModalOpen(true)}
            onInquireRetainer={() => setIsBriefModalOpen(true)}
            onOpenBrief={() => setIsBriefModalOpen(true)}
          />
        )}

        {(currentPage === 'insights' || currentPage === 'articles') && (
          <ArticlesView onOpenBrief={() => setIsBriefModalOpen(true)} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBrief={() => setIsBriefModalOpen(true)}
      />

      {/* 1:1 Forensic Brand & Shelf Audit Modal */}
      <BrandAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onOpenBrief={() => setIsBriefModalOpen(true)}
      />

      {/* Client Intake Brief Wizard */}
      <IntakeBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
      />

      {/* Floating Back to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
