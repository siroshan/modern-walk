import { FC } from 'react';
import { SectionLayoutProps } from './SectionLayout.type';
import { Typography } from '../../components/Atoms/Typography';

const SectionLayout: FC<SectionLayoutProps> = ({ children, heading }) => {
  return (
    <div className='mt-8'>
      <Typography variant='h2' className='mb-8'>
        {heading}
      </Typography>
      <div>{children}</div>
    </div>
  );
};

export default SectionLayout;
