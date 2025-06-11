import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import blog from '../assets/blog.png';
import pyn from '../assets/pyn.png';
import saberlink from '../assets/saberlink.png';
import tarefas from '../assets/tarefas.png';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projectsData: Project[] = [
  { id: 1, title: 'BLOG', description: 'Página de um blog responsivo para desenvolvedores e criado para o curso da DNC.', imageUrl: blog, link: 'https://emanuellcsdnc02.netlify.app/' },
  { id: 2, title: 'PYN', description: 'Uma ferramenta baseada em Python para análise e geração de senhas, com avaliação de força e detecção de senhas comprometidas.', imageUrl: pyn, link: 'https://github.com/emanuellcs/pyn' },
  { id: 3, title: 'SABERLINK', description: 'Uma página web para recursos educacionais gratuitos para o ENEM e exames vestibulares.', imageUrl: saberlink, link: 'https://projetosocialds3.github.io/SaberLink/' },
  { id: 4, title: 'BOARD DE TAREFAS', description: 'Um gerenciador de tarefas responsivo criado para o curso da DNC.', imageUrl: tarefas, link: 'https://emanuellcsdnc03.netlify.app/' },
];

const ProjectsContainer = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: left;
  font-weight: 600;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
  margin-left: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projetos</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
