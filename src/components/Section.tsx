import React, { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  backgroundType: 'wave-purple' | 'wave-blue' | 'spectrum' | 'circle' | 'particles';
  id?: string;
};

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  backgroundType,
  id
}) => {
  return (
    <section 
      id={id}
      className={`min-h-screen flex flex-col justify-center items-center px-4 py-16 section-${backgroundType} ${className}`}
    >
      <div className="section-content container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
